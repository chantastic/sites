import type {APIContext, MiddlewareNext} from 'astro'
import {defineMiddleware} from 'astro/middleware'
import * as AUTHKIT from '#lib/authkit'

export const onRequest = defineMiddleware((context, next) => {
	const {pathname} = new URL(context.request.url)

	if (pathname.startsWith('/dashboard')) {
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

	let sessionCookie: AUTHKIT.Cookie = cookie

	if (!authenticationResponse.authenticated) {
		const refreshResponse =
			await AUTHKIT.refreshAndSealSessionData(cookie)

		if (
			!refreshResponse.authenticated ||
			!refreshResponse.sealedSession
		) {
			context.cookies.delete(
				AUTHKIT.COOKIE_NAME,
				AUTHKIT.COOKIE_OPTIONS
			)
			return context.redirect('/sign-in')
		}

		context.cookies.set(
			AUTHKIT.COOKIE_NAME,
			refreshResponse.sealedSession,
			AUTHKIT.COOKIE_OPTIONS
		)

		sessionCookie = {value: refreshResponse.sealedSession}
	}

	const session =
		await AUTHKIT.getSessionFromCookie(sessionCookie)

	if (!session?.user) {
		context.cookies.delete(
			AUTHKIT.COOKIE_NAME,
			AUTHKIT.COOKIE_OPTIONS
		)
		return context.redirect('/sign-in')
	}

	context.locals.user = session.user

	const response = await next()
	return response
}
