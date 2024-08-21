import {
	WorkOS,
	type User,
	type SessionCookieData,
} from '@workos-inc/node'
import type {AstroCookieSetOptions} from 'astro'

export const COOKIE_NAME = 'wos-session'

export const COOKIE_OPTIONS: AstroCookieSetOptions = {
	path: '/',
	httpOnly: true,
	secure: true,
	sameSite: 'lax',
}

export interface Session {
	accessToken: string
	refreshToken: string
	user: User
}

export interface Cookie {
	value: string
}

let workosInstance: WorkOS | null = null

function getWorkOSInstance(): WorkOS {
	if (!workosInstance) {
		workosInstance = new WorkOS(
			import.meta.env.WORKOS_API_KEY,
			{
				clientId: import.meta.env.WORKOS_CLIENT_ID,
			}
		)
	}
	return workosInstance
}

export function getAuthorizationUrl() {
	const workos = getWorkOSInstance()

	function getRedirectUri() {
		if (import.meta.env.WORKOS_REDIRECT_URI) {
			return import.meta.env.WORKOS_REDIRECT_URI
		}

		if (import.meta.env.CF_PAGES_URL) {
			return `${import.meta.env.CF_PAGES_URL}/auth/callback`
		}

		throw new Error('WORKOS_REDIRECT_URI is not defined.')
	}

	return workos.userManagement.getAuthorizationUrl({
		provider: 'authkit',
		redirectUri: getRedirectUri(),
		clientId: import.meta.env.WORKOS_CLIENT_ID,
	})
}

export async function getSessionFromCookie(
	encryptedCookie: Cookie
) {
	const workos = getWorkOSInstance()

	return (await workos.userManagement.getSessionFromCookie({
		sessionData: encryptedCookie.value,
		cookiePassword: import.meta.env.WORKOS_COOKIE_PASSWORD,
	})) as SessionCookieData
}

export async function authenticateWithCode(code: string) {
	const workos = getWorkOSInstance()

	return await workos.userManagement.authenticateWithCode({
		code,
		clientId: import.meta.env.WORKOS_CLIENT_ID,
		session: {
			sealSession: true,
			cookiePassword: import.meta.env.WORKOS_COOKIE_PASSWORD,
		},
	})
}

export async function getLogoutUrlFromSessionCookie(
	encryptedCookie: Cookie
) {
	const workos = getWorkOSInstance()

	const authenticationResponse =
		await workos.userManagement.authenticateWithSessionCookie({
			sessionData: encryptedCookie.value,
			cookiePassword: import.meta.env.WORKOS_COOKIE_PASSWORD,
		})

	if ('sessionId' in authenticationResponse) {
		const logoutUrl = workos.userManagement.getLogoutUrl({
			sessionId: authenticationResponse.sessionId,
		})

		return logoutUrl
	}

	throw new Error('Authentication failed')
}

export async function authenticateWithSessionCookie(
	encryptedCookie: Cookie
) {
	const workos = getWorkOSInstance()

	return await workos.userManagement.authenticateWithSessionCookie(
		{
			sessionData: encryptedCookie.value,
			cookiePassword: import.meta.env.WORKOS_COOKIE_PASSWORD,
		}
	)
}

export async function refreshAndSealSessionData(
	encryptedCookie: Cookie
) {
	const workos = getWorkOSInstance()

	return await workos.userManagement.refreshAndSealSessionData({
		sessionData: encryptedCookie.value,
		cookiePassword: import.meta.env.WORKOS_COOKIE_PASSWORD,
	})
}
