import * as AUTHKIT from '#lib/authkit'
import type {APIRoute} from 'astro'

export const GET: APIRoute = async ({redirect}) => {
	return redirect(AUTHKIT.getAuthorizationUrl())
}

export const prerender = false
