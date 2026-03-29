import {handle} from '@astrojs/cloudflare/handler'
import type {ExportedHandler} from '@cloudflare/workers-types'

type WorkerEnv = {
	STATIC_ASSETS: Fetcher
	ASSETS?: Fetcher
	SESSION?: KVNamespace
	IMAGES?: unknown
	WORKOS_REDIRECT_URI?: string
	WORKOS_CLIENT_ID?: string
}

const worker: ExportedHandler<WorkerEnv> = {
	async fetch(request, env, ctx) {
		return handle(
			request,
			{
				...env,
				ASSETS: env.STATIC_ASSETS,
			},
			ctx
		)
	},
}

export default worker
