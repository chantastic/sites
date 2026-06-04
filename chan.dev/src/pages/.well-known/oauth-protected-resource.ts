import {SITE_ORIGIN, absoluteUrl, jsonResponse} from '#modules/agent-discovery'

export async function GET() {
	return jsonResponse({
		resource: `${SITE_ORIGIN}/`,
		authorization_servers: [],
		scopes_supported: [],
		bearer_methods_supported: ['header'],
		resource_documentation: absoluteUrl('/auth.md'),
	})
}
