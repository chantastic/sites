import {jsonResponse} from '#modules/agent-discovery'

export async function GET() {
	return jsonResponse({
		status: 'ok',
		service: 'chan.dev',
		public: true,
		authenticated: false,
	})
}
