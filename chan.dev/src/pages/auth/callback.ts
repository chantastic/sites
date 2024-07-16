import type {APIRoute, AstroCookieSetOptions} from 'astro'
import {WorkOS} from '@workos-inc/node'
import * as AUTHKIT from '#lib/authkit'

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

	const encryptedSession = await AUTHKIT.encryptSession(session)

	cookies.set(
		AUTHKIT.COOKIE_NAME,
		encryptedSession,
		AUTHKIT.COOKIE_OPTIONS as AstroCookieSetOptions
	)

	return redirect('/dashboard')
}

export const prerender = false
