import {
	WorkOS,
	AuthenticateWithSessionCookieFailureReason,
	type User,
} from '@workos-inc/node'
import type {AstroCookieSetOptions} from 'astro'

const API_KEY = import.meta.env.WORKOS_API_KEY
const CLIENT_ID = import.meta.env.WORKOS_CLIENT_ID
const REDIRECT_URI =
	import.meta.env.WORKOS_REDIRECT_URI ??
	`${import.meta.env.CF_PAGES_URL}/auth/callback`
const COOKIE_PASSWORD = import.meta.env.WORKOS_COOKIE_PASSWORD

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
		workosInstance = new WorkOS(API_KEY, {clientId: CLIENT_ID})
	}
	return workosInstance
}

export function getAuthorizationUrl() {
	const workos = getWorkOSInstance()

	return workos.userManagement.getAuthorizationUrl({
		provider: 'authkit',
		redirectUri: REDIRECT_URI,
		clientId: CLIENT_ID,
	})
}

export async function getSessionFromCookie(
	encryptedCookie: Cookie
) {
	const workos = getWorkOSInstance()

	return await workos.userManagement.getSessionFromCookie({
		sessionData: encryptedCookie.value,
		cookiePassword: COOKIE_PASSWORD,
	})
}

export async function authenticateWithCode(code: string) {
	const workos = getWorkOSInstance()

	return await workos.userManagement.authenticateWithCode({
		code,
		clientId: CLIENT_ID,
		session: {
			sealSession: true,
			cookiePassword: COOKIE_PASSWORD,
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
			cookiePassword: COOKIE_PASSWORD,
		})

	const logoutUrl = workos.userManagement.getLogoutUrl({
		sessionId: authenticationResponse.sessionId,
	})

	return logoutUrl
}

export async function authenticateWithSessionCookie(
	encryptedCookie: Cookie
) {
	const workos = getWorkOSInstance()

	return await workos.userManagement.authenticateWithSessionCookie(
		{
			sessionData: encryptedCookie.value,
			cookiePassword: COOKIE_PASSWORD,
		}
	)
}

export async function refreshAndSealSessionData(
	encryptedCookie: Cookie
) {
	const workos = getWorkOSInstance()

	return await workos.userManagement.refreshAndSealSessionData({
		sessionData: encryptedCookie.value,
		cookiePassword: COOKIE_PASSWORD,
	})
}

export {AuthenticateWithSessionCookieFailureReason}
