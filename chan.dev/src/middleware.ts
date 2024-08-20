import type {APIContext, MiddlewareNext} from 'astro'
import {defineMiddleware} from 'astro/middleware'
import * as AUTHKIT from '#lib/authkit'
import {minimatch} from 'minimatch'

export const onRequest = defineMiddleware((context, next) => {
	const {pathname} = new URL(context.request.url)

	if (minimatch(pathname, '/dashboard*')) {
		return withAuth(context, next)
	}

	return next()
})

async function withAuth(
	context: APIContext,
	next: MiddlewareNext
) {
	const cookie = context.cookies.get(AUTHKIT.COOKIE_NAME)

	if (!cookie?.value) {
		return context.redirect('/sign-in')
	}

	const authenticationResponse =
		await AUTHKIT.authenticateWithSessionCookie(cookie)

	if (
		!authenticationResponse.authenticated &&
		authenticationResponse.reason !== 'invalid_jwt'
	) {
		return context.redirect('/sign-in')
	}

	const refreshResponse =
		await AUTHKIT.refreshAndSealSessionData(cookie)

	if (!refreshResponse.authenticated) {
		context.cookies.delete(
			AUTHKIT.COOKIE_NAME,
			AUTHKIT.COOKIE_OPTIONS
		)
		return context.redirect('/sign-in')
	}

	context.cookies.set(
		AUTHKIT.COOKIE_NAME,
		String(refreshResponse.sealedSession),
		AUTHKIT.COOKIE_OPTIONS
	)

	const {user} = await AUTHKIT.getSessionFromCookie(
		context.cookies.get(AUTHKIT.COOKIE_NAME)!
	)

	context.locals.user = user

	const response = await next()
	return response
}
