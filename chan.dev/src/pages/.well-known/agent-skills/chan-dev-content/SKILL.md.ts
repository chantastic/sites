import {CHAN_DEV_CONTENT_SKILL} from '#modules/agent-discovery'

export async function GET() {
	return new Response(CHAN_DEV_CONTENT_SKILL, {
		headers: {
			'Content-Type': 'text/markdown; charset=utf-8',
		},
	})
}
