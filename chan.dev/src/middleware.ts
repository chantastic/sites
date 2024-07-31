import {defineMiddleware} from 'astro/middleware'
import {minimatch} from 'minimatch'
import * as AUTHKIT from '#lib/authkit'

export const onRequest = defineMiddleware(
	async (context, next) => {
		if (
			!minimatch(
				String(new URL(context.request.url).pathname),
				'/dashboard*'
			)
		) {
			return next()
		}

		const cookie = context.cookies.get(AUTHKIT.COOKIE_NAME)

		if (!cookie) {
			return context.redirect('/sign-in')
		}

		const authenticationResponse =
			await AUTHKIT.authenticateWithSessionCookie(cookie)

		if (
			!authenticationResponse.authenticated &&
			authenticationResponse.reason ===
				AUTHKIT.AuthenticateWithSessionCookieFailureReason
					.NO_SESSION_COOKIE_PROVIDED
		) {
			return context.redirect('/sign-in')
		}

		if (authenticationResponse.authenticated) {
			return next()
		}

		try {
			const refreshResponse =
				await AUTHKIT.refreshAndSealSessionData(cookie)

			if (!refreshResponse.authenticated) {
				return context.redirect('/sign-in')
			}

			context.cookies.set(
				AUTHKIT.COOKIE_NAME,
				refreshResponse.sealedSession,
				AUTHKIT.COOKIE_OPTIONS
			)

			return next()
		} catch (e) {
			context.cookies.delete(
				AUTHKIT.COOKIE_NAME,
				AUTHKIT.COOKIE_OPTIONS
			)
			return context.redirect('/sign-in')
		}
	}
)
