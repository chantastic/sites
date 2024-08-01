import * as AUTHKIT from '#lib/authkit'
import type {APIRoute} from 'astro'

export const GET: APIRoute = async ({redirect}) => {
	const authorizationUrl = AUTHKIT.getAuthorizationUrl()

	console.log(authorizationUrl)
	return redirect(authorizationUrl)
}

export const prerender = false
