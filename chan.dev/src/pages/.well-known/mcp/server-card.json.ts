import {
	SITE_INDEX,
	SITE_ORIGIN,
	absoluteUrl,
	jsonResponse,
} from '#modules/agent-discovery'

export async function GET() {
	return jsonResponse({
		$schema:
			'https://modelcontextprotocol.io/schemas/server-card.json',
		serverInfo: {
			name: 'chan.dev',
			version: '2026.06.02',
		},
		transport: {
			type: 'streamable-http',
			endpoint: absoluteUrl('/mcp'),
		},
		transports: [
			{
				type: 'streamable-http',
				endpoint: absoluteUrl('/mcp'),
			},
		],
		capabilities: {
			tools: {
				listChanged: false,
			},
			resources: {},
			prompts: {},
		},
		description:
			'Stateless MCP endpoint exposing public chan.dev site index information.',
		links: {
			homepage: SITE_ORIGIN,
			apiCatalog: SITE_INDEX.discovery.apiCatalog,
		},
	})
}
