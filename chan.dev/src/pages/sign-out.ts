import {WorkOS} from '@workos-inc/node'
import * as AUTHKIT from '#lib/authkit'
import type {APIRoute} from 'astro'
import {createRemoteJWKSet, jwtVerify} from 'jose'

const workos = new WorkOS(AUTHKIT.API_KEY)

export const GET: APIRoute = async ({
	redirect,
	cookies,
	request,
}) => {
	if (isPrefetchRequest(request)) {
		return new Response('ok')
	}

	try {
		let session = await AUTHKIT.getSessionFromCookie(
			cookies.get(AUTHKIT.COOKIE_NAME)!
		)

		const JWKS = createRemoteJWKSet(
			new URL(
				workos.userManagement.getJwksUrl(
					import.meta.env.WORKOS_CLIENT_ID
				)
			)
		)

		const verifiedSession = await jwtVerify(
			session!.accessToken,
			JWKS
		)

		const logoutRedirect = workos.userManagement.getLogoutUrl({
			sessionId: verifiedSession.payload.sid,
		})

		cookies.delete(AUTHKIT.COOKIE_NAME, AUTHKIT.COOKIE_OPTIONS)
		return redirect(logoutRedirect)
	} catch (e) {
		cookies.delete(AUTHKIT.COOKIE_NAME, AUTHKIT.COOKIE_OPTIONS)
		return redirect('/')
	}
}

function isPrefetchRequest(request: Request) {
	if (
		request.headers.get('Purpose') === 'prefetch' ||
		request.headers.get('Sec-Purpose') === 'prefetch'
	) {
		return true
	}

	if (request.headers.get('X-Prefetch') === 'true') {
		return true
	}

	if (request.headers.get('User-Agent')?.includes('prefetch')) {
		return true
	}

	return false
}

export const prerender = false
