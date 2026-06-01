import {handle} from '@astrojs/cloudflare/handler'

const worker: ExportedHandler<Cloudflare.Env> = {
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
