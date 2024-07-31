import {WorkOS, type User} from '@workos-inc/node'
import type {AstroCookieSetOptions} from 'astro'

export const API_KEY = import.meta.env.WORKOS_API_KEY
export const CLIENT_ID = import.meta.env.WORKOS_CLIENT_ID
export const REDIRECT_URI = import.meta.env.WORKOS_REDIRECT_URI
export const COOKIE_PASSWORD = import.meta.env
	.WORKOS_COOKIE_PASSWORD

export const COOKIE_NAME = 'wos-session'

const workos = new WorkOS(API_KEY, {clientId: CLIENT_ID})

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
	return await workos.userManagement.getSessionFromCookie({
		sessionData: encryptedCookie.value,
		cookiePassword: COOKIE_PASSWORD,
	})
}

export async function authenticateWithCode(code: string) {
	return workos.userManagement.authenticateWithCode({
		code,
		clientId: CLIENT_ID,
		session: {
			sealSession: true,
			cookiePassword: COOKIE_PASSWORD,
		},
	})
}

export function getAuthorizationUrl() {
	return workos.userManagement.getAuthorizationUrl({
		provider: 'authkit',
		redirectUri: REDIRECT_URI,
		clientId: CLIENT_ID,
	})
}
