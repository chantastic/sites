import {sealData, unsealData} from 'iron-session'
import {WorkOS} from '@workos-inc/node'
import type {User} from '@workos-inc/node'
import {createRemoteJWKSet, jwtVerify} from 'jose'

export const COOKIE_NAME = 'wos-session'

export const COOKIE_OPTIONS = {
	path: '/',
	httpOnly: true,
	secure: true,
	sameSite: 'lax',
}

const workos = new WorkOS(import.meta.env.WORKOS_API_KEY)

export interface Session {
	accessToken: string
	refreshToken: string
	user: User
}

export interface EncryptedSession {
	value: string
}

export async function decryptSession(
	encryptedSession: EncryptedSession
) {
	let session: Session = await unsealData(
		encryptedSession.value,
		{
			password: import.meta.env.WORKOS_COOKIE_PASSWORD,
		}
	)

	return session
}

export async function encryptSession(session: Session) {
	return await sealData(session, {
		password: import.meta.env.WORKOS_COOKIE_PASSWORD,
	})
}

export function getSignInURL() {
	return workos.userManagement.getAuthorizationUrl({
		provider: 'authkit',
		redirectUri: import.meta.env.WORKOS_REDIRECT_URI,
		clientId: import.meta.env.WORKOS_CLIENT_ID,
	})
}

export async function authenticateWithCode(code: string) {
	return await workos.userManagement.authenticateWithCode({
		code,
		clientId: import.meta.env.WORKOS_CLIENT_ID,
	})
}

export async function verifySession(session: Session) {
	let verifiedSession

	try {
		verifiedSession = await jwtVerify(
			session.accessToken,
			createRemoteJWKSet(
				new URL(
					workos.userManagement.getJwksUrl(
						import.meta.env.WORKOS_CLIENT_ID
					)
				)
			)
		)

		return session
	} catch (e) {
		try {
			const refreshedSession =
				await workos.userManagement.authenticateWithRefreshToken(
					{
						clientId: import.meta.env.WORKOS_CLIENT_ID,
						refreshToken: session.refreshToken,
					}
				)

			return {user: session.user, ...refreshedSession}
		} catch (e) {
			throw e
		}
	}
}
