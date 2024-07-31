import {WorkOS} from '@workos-inc/node'
import type {APIRoute} from 'astro'

const workos = new WorkOS(import.meta.env.WORKOS_API_KEY)

export const GET: APIRoute = async ({redirect}) => {
	const authorizationUrl =
		workos.userManagement.getAuthorizationUrl({
			provider: 'authkit',
			redirectUri: import.meta.env.WORKOS_REDIRECT_URI,
			clientId: import.meta.env.WORKOS_CLIENT_ID,
		})

	return redirect(authorizationUrl)
}

export const prerender = false
