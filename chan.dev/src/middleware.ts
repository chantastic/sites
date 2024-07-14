import {defineMiddleware} from 'astro/middleware'
import {minimatch} from 'minimatch'
import * as AUTHKIT from '#lib/authkit'
import type {AstroCookieSetOptions} from 'astro'

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

		const session = await AUTHKIT.decryptSession(cookie)

		const verifiedSession = await AUTHKIT.verifySession(session)

		if (!verifiedSession) {
			return context.redirect('/sign-in')
		}

		context.cookies.set(
			AUTHKIT.COOKIE_NAME,
			await AUTHKIT.encryptSession(verifiedSession),
			AUTHKIT.COOKIE_OPTIONS as AstroCookieSetOptions
		)

		return next()
	}
)
