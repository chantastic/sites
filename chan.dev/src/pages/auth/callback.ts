import type {APIRoute} from 'astro'
import * as AUTHKIT from '#lib/authkit'

export const GET: APIRoute = async ({
	request,
	redirect,
	cookies,
}) => {
	const code = new URL(request.url).searchParams.get('code')

	if (!code) {
		return new Response('No authorizationcode provided.', {
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
		console.error(e)
		return redirect('/sign-in')
	}
}

export const prerender = false
