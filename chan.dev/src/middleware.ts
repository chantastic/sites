import {defineMiddleware} from 'astro/middleware'
import {minimatch} from 'minimatch'
import {WorkOS} from '@workos-inc/node'
import {createRemoteJWKSet, jwtVerify} from 'jose'
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

		const session = await AUTHKIT.decryptSession(cookie)

		const workos = new WorkOS(import.meta.env.WORKOS_API_KEY)

		const JWKS = createRemoteJWKSet(
			new URL(
				workos.userManagement.getJwksUrl(
					import.meta.env.WORKOS_CLIENT_ID
				)
			)
		)

		let verifiedSession

		try {
			verifiedSession = await jwtVerify(
				session.accessToken,
				JWKS
			)
		} catch (e) {
			try {
				const refreshedSession =
					await workos.userManagement.authenticateWithRefreshToken(
						{
							clientId: import.meta.env.WORKOS_CLIENT_ID,
							refreshToken: session.refreshToken,
						}
					)
				const encryptedRefreshedSession = await encryptSession({
					user: session.user,
					...refreshedSession,
				})

				context.cookies.set(
					AUTHKIT.COOKIE_NAME,
					encryptedRefreshedSession,
					{
						path: '/',
						httpOnly: true,
						secure: true,
						sameSite: 'lax',
					}
				)
			} catch (e) {
				return context.redirect('/sign-in')
			}
		}

		return next()
	}
)
