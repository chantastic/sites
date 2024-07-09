import type {APIRoute} from 'astro'
import {WorkOS} from '@workos-inc/node'
import {sealData} from 'iron-session'

const workos = new WorkOS(import.meta.env.WORKOS_API_KEY)
const clientId = import.meta.env.WORKOS_CLIENT_ID

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
			clientId,
		})

	const encryptedSession = await sealData(session, {
		password: import.meta.env.WORKOS_COOKIE_PASSWORD,
	})

	cookies.set('wos-session', encryptedSession, {
		path: '/',
		httpOnly: true,
		secure: true,
		sameSite: 'lax',
	})

	return redirect('/dashboard')
}

// disable prerendering in 'hyrbrid' mode
export const prerender = false
