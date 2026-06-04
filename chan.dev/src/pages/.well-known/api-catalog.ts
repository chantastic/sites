import {
	SITE_ORIGIN,
	absoluteUrl,
	jsonResponse,
} from '#modules/agent-discovery'

export async function GET() {
	return jsonResponse(
		{
			linkset: [
				{
					anchor: `${SITE_ORIGIN}/api/`,
					'service-desc': [
						{
							href: absoluteUrl('/openapi.json'),
							type: 'application/vnd.oai.openapi+json',
						},
					],
					'service-doc': [
						{
							href: absoluteUrl('/api/docs.md'),
							type: 'text/markdown',
						},
					],
					status: [
						{
							href: absoluteUrl('/api/status.json'),
							type: 'application/json',
						},
					],
				},
			],
		},
		{},
		'application/linkset+json; charset=utf-8'
	)
}
