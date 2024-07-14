import type {APIRoute, AstroCookieSetOptions} from 'astro'
import * as AUTHKIT from '#lib/authkit'

export const GET: APIRoute = async ({
	request,
	redirect,
	cookies,
}) => {
	const code = String(
		new URL(request.url).searchParams.get('code')
	)

	const session = await AUTHKIT.authenticateWithCode(code)
	const encryptedSession = await AUTHKIT.encryptSession(session)

	cookies.set(
		AUTHKIT.COOKIE_NAME,
		encryptedSession,
		AUTHKIT.COOKIE_OPTIONS as AstroCookieSetOptions
	)

	return redirect('/dashboard')
}

export const prerender = false
