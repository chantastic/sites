import {WorkOS, type User} from '@workos-inc/node'
import {env} from 'cloudflare:workers'
import type {AstroCookieSetOptions} from 'astro'

export const COOKIE_NAME = 'wos-session'

function getRequiredEnv(name: keyof Cloudflare.Env) {
	const value = env[name]

	if (typeof value === 'string' && value.length > 0) {
		return value
	}

	throw new Error(`${String(name)} not set`)
}

function getRedirectUri() {
	if (env.WORKOS_REDIRECT_URI) {
		return env.WORKOS_REDIRECT_URI
	}

	if (env.CF_PAGES_URL) {
		return `${env.CF_PAGES_URL}/auth/callback`
	}

	throw new Error('WORKOS_REDIRECT_URI or CF_PAGES_URL not set')
}

function getCookiePassword() {
	return getRequiredEnv('WORKOS_COOKIE_PASSWORD')
}

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
			getRequiredEnv('WORKOS_API_KEY'),
			{
				clientId: getRequiredEnv('WORKOS_CLIENT_ID'),
			}
		)
	}
	return workosInstance
}

function getSealedSession(encryptedCookie: Cookie) {
	return getWorkOSInstance().userManagement.loadSealedSession({
		sessionData: encryptedCookie.value,
		cookiePassword: getCookiePassword(),
	})
}

export function getAuthorizationUrl() {
	const workos = getWorkOSInstance()

	return workos.userManagement.getAuthorizationUrl({
		provider: 'authkit',
		redirectUri: getRedirectUri(),
		clientId: getRequiredEnv('WORKOS_CLIENT_ID'),
	})
}

export async function getSessionFromCookie(
	encryptedCookie: Cookie
) {
	const workos = getWorkOSInstance()

	return await workos.userManagement.getSessionFromCookie({
		sessionData: encryptedCookie.value,
		cookiePassword: getCookiePassword(),
	})
}

export async function authenticateWithCode(code: string) {
	const workos = getWorkOSInstance()

	return await workos.userManagement.authenticateWithCode({
		code,
		clientId: getRequiredEnv('WORKOS_CLIENT_ID'),
		session: {
			sealSession: true,
			cookiePassword: getCookiePassword(),
		},
	})
}

export async function getLogoutUrlFromSessionCookie(
	encryptedCookie: Cookie
) {
	return await getSealedSession(encryptedCookie).getLogoutUrl()
}

export async function authenticateWithSessionCookie(
	encryptedCookie: Cookie
) {
	return await getSealedSession(encryptedCookie).authenticate()
}

export async function refreshAndSealSessionData(
	encryptedCookie: Cookie
) {
	return await getSealedSession(encryptedCookie).refresh()
}
