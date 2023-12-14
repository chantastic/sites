import type {Config, Context} from '@netlify/functions'

export default async (req: Request, context: Context) => {
	const {site} = context.params

	return new Response(`Deals for: ${site}!`)
}

export const config: Config = {
	path: '/data/deals/:site',
}
