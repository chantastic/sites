import {sealData, unsealData} from 'iron-session'
import type {User} from '@workos-inc/node'

export const COOKIE_NAME = 'wos-session'

export const COOKIE_OPTIONS = {
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
