import {WorkOS} from '@workos-inc/node'
// import type {APIRoute} from 'astro'
export const prerender = false

const workos = new WorkOS(import.meta.env.WORKOS_API_KEY)
const clientId = import.meta.env.WORKOS_CLIENT_ID

export async function GET({redirect}) {
	const authorizationUrl =
		workos.userManagement.getAuthorizationUrl({
			provider: 'authkit',
			redirectUri: import.meta.env.WORKOS_REDIRECT_URI,
			clientId,
		})

	return redirect(authorizationUrl, 302)
}
