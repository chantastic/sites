import type {APIRoute} from 'astro'
import {WorkOS} from '@workos-inc/node'
import {encryptSession} from '#lib/authkit'

const workos = new WorkOS(import.meta.env.WORKOS_API_KEY)

export const GET: APIRoute = async ({
	request,
	redirect,
	cookies,
}) => {
	const code = String(
		new URL(request.url).searchParams.get('code')
	)
	const session =
		await workos.userManagement.authenticateWithCode({
			code,
			clientId: import.meta.env.WORKOS_CLIENT_ID,
		})

	const encryptedSession = await encryptSession(session)

	cookies.set('wos-session', encryptedSession, {
		path: '/',
		httpOnly: true,
		secure: true,
		sameSite: 'lax',
	})

	return redirect('/dashboard')
}

export const prerender = false
