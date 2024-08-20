import * as AUTHKIT from '#lib/authkit'
import type {APIRoute} from 'astro'

export const GET: APIRoute = async () => {
	const authorizationUrl = AUTHKIT.getAuthorizationUrl()

	return new Response(
		JSON.stringify({
			authorizationUrl,
			CF_PAGES_URL: import.meta.env.CF_PAGES_URL,
			env: import.meta.env,
		}),
		{
			headers: {
				'Content-Type': 'application/json',
			},
		}
	)
}

export const prerender = false
