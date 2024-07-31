import {WorkOS} from '@workos-inc/node'
import * as AUTHKIT from '#lib/authkit'
import type {APIRoute} from 'astro'

export const GET: APIRoute = async ({
	redirect,
	cookies,
	request,
}) => {
	if (isPrefetchRequest(request)) {
		return new Response('ok')
	}

	const cookie = cookies.get(AUTHKIT.COOKIE_NAME)

	let logoutUrl

	try {
		logoutUrl = await AUTHKIT.getLogoutUrlFromSessionCookie(
			cookie
		)
	} catch (e) {
		logoutUrl = '/'
	}

	cookies.delete(AUTHKIT.COOKIE_NAME, AUTHKIT.COOKIE_OPTIONS)
	return redirect(logoutUrl)
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
