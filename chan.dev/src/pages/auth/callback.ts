import type {APIRoute} from 'astro'
import * as AUTHKIT from '#lib/authkit'

export const GET: APIRoute = async ({
	request,
	redirect,
	cookies,
}) => {
	const code = String(
		new URL(request.url).searchParams.get('code')
	)

	if (!code) {
		return new Response('No code provided.', {
			status: 400,
			headers: {
				'Content-Type': 'text/plain',
			},
		})
	}

	try {
		const authenticateResponse =
			await AUTHKIT.authenticateWithCode(code)

		cookies.set(
			AUTHKIT.COOKIE_NAME,
			authenticateResponse.sealedSession!,
			AUTHKIT.COOKIE_OPTIONS
		)

		return redirect('/dashboard')
	} catch (e) {
		return redirect('/sign-in')
	}
}

export const prerender = false
