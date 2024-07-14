import {defineMiddleware} from 'astro/middleware'
import {minimatch} from 'minimatch'
import {WorkOS} from '@workos-inc/node'
import type {User} from '@workos-inc/node'
import {createRemoteJWKSet, jwtVerify} from 'jose'
import {sealData, unsealData} from 'iron-session'

interface Session {
	accessToken: string
	refreshToken: string
	user: User
}

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

		const cookie = context.cookies.get('wos-session')

		if (!cookie) {
			return context.redirect('/sign-in')
		}

		const session: Session = await unsealData(cookie.value, {
			password: import.meta.env.WORKOS_COOKIE_PASSWORD,
		})

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
				const encryptedRefreshedSession = await sealData(
					{...session.user, ...refreshedSession},
					{
						password: import.meta.env.WORKOS_COOKIE_PASSWORD,
					}
				)
				context.cookies.set(
					'wos-session',
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
