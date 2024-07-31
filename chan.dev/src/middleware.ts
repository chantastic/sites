import {defineMiddleware} from 'astro/middleware'
import {minimatch} from 'minimatch'
import {
	WorkOS,
	AuthenticateWithSessionCookieFailureReason,
} from '@workos-inc/node'
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

		const workos = new WorkOS(AUTHKIT.API_KEY, {
			clientId: AUTHKIT.CLIENT_ID,
		})

		const cookie = context.cookies.get(AUTHKIT.COOKIE_NAME)

		if (!cookie) {
			return context.redirect('/sign-in')
		}

		const authenticationResponse =
			await workos.userManagement.authenticateWithSessionCookie(
				{
					sessionData: cookie.value,
					cookiePassword: AUTHKIT.COOKIE_PASSWORD,
				}
			)

		if (authenticationResponse.authenticated) {
			return next()
		}

		if (
			!authenticationResponse.authenticated &&
			authenticationResponse.reason ===
				AuthenticateWithSessionCookieFailureReason.NO_SESSION_COOKIE_PROVIDED
		) {
			return context.redirect('/sign-in')
		}

		try {
			const refreshResponse =
				await workos.userManagement.refreshAndSealSessionData({
					sessionData: cookie.value,
					cookiePassword: AUTHKIT.COOKIE_PASSWORD,
				})

			if (!refreshResponse.authenticated) {
				return context.redirect('/sign-in')
			}

			context.cookies.set(
				AUTHKIT.COOKIE_NAME,
				refreshResponse.sealedSession,
				AUTHKIT.COOKIE_OPTIONS
			)
			console.log('refreshed session')

			return next()
		} catch (e) {
			context.cookies.delete(AUTHKIT.COOKIE_NAME)
			return context.redirect('/sign-in')
		}
	}
)
