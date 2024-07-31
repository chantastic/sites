import {WorkOS, type User} from '@workos-inc/node'
import type {AstroCookieSetOptions} from 'astro'

export const API_KEY = import.meta.env.WORKOS_API_KEY
export const CLIENT_ID = import.meta.env.WORKOS_CLIENT_ID
export const COOKIE_PASSWORD = import.meta.env
	.WORKOS_COOKIE_PASSWORD

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

export async function getSessionFromCookie(
	encryptedCookie: Cookie
) {
	const workos = new WorkOS(import.meta.env.WORKOS_API_KEY, {
		clientId: import.meta.env.WORKOS_CLIENT_ID,
	})

	return await workos.userManagement.getSessionFromCookie({
		sessionData: encryptedCookie.value,
		cookiePassword: import.meta.env.WORKOS_COOKIE_PASSWORD,
	})
}

export async function authenticateWithCode(code: string) {
	const workos = new WorkOS(import.meta.env.WORKOS_API_KEY)

	return await workos.userManagement.authenticateWithCode({
		code,
		clientId: import.meta.env.WORKOS_CLIENT_ID,
		session: {
			sealSession: true,
			cookiePassword: import.meta.env.WORKOS_COOKIE_PASSWORD,
		},
	})
}
