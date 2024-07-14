import {unsealData} from 'iron-session'
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
	getEncryptedSession: () => EncryptedSession | undefined
) {
	const encryptedSession = getEncryptedSession()

	if (!encryptedSession?.value) {
		throw Error('No session found.')
	}

	let session: Session = await unsealData(
		encryptedSession.value,
		{
			password: import.meta.env.WORKOS_COOKIE_PASSWORD,
		}
	)

	return session
}
