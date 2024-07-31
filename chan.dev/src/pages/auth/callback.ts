import type {APIRoute} from 'astro'
import {WorkOS} from '@workos-inc/node'
import * as AUTHKIT from '#lib/authkit'

const workos = new WorkOS(AUTHKIT.API_KEY)

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
			await workos.userManagement.authenticateWithCode({
				code,
				clientId: AUTHKIT.CLIENT_ID,
				session: {
					sealSession: true,
					cookiePassword: AUTHKIT.COOKIE_PASSWORD,
				},
			})

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
