import {sealData, unsealData} from 'iron-session'
import type {User} from '@workos-inc/node'

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
	let encryptedSession = await sealData(session, {
		password: import.meta.env.WORKOS_COOKIE_PASSWORD,
	})

	return encryptedSession
}
