import {WorkOS} from '@workos-inc/node'
import {sealData /*, unsealData*/} from 'iron-session'

export const prerender = false

const workos = new WorkOS(import.meta.env.WORKOS_API_KEY)
const clientId = import.meta.env.WORKOS_CLIENT_ID

export async function GET({request, redirect, cookies}) {
	const code = new URL(request.url).searchParams
		.get('code')
		?.toString()

	const {user, accessToken, refreshToken, impersonator} =
		await workos.userManagement.authenticateWithCode({
			code,
			clientId,
		})

	return new Response(
		JSON.stringify({
			user,
			accessToken,
			refreshToken,
			impersonator,
		}),
		{
			status: 200,
		}
	)

	// const encryptedSession = await sealData(
	// 	{accessToken, refreshToken, user, impersonator},
	// 	{password: import.meta.env.WORKOS_COOKIE_PASSWORD}
	// )

	// cookies.set('wos-session', encryptedSession, {
	// 	path: '/',
	// 	httpOnly: true,
	// 	secure: true,
	// 	sameSite: 'lax',
	// })

	// return redirect('/user')
}
