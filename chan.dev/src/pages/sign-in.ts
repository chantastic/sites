import type {APIRoute} from 'astro'
import {getSignInURL} from '#lib/authkit'

export const GET: APIRoute = async ({redirect}) => {
	return redirect(getSignInURL())
}

export const prerender = false
