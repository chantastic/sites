export async function GET() {
	return new Response(
		`# chan.dev API docs

chan.dev exposes a small set of public, read-only content endpoints. These endpoints do not require authentication.

## Endpoints

- \`GET /api/tags.json\`: returns post tag counts and post metadata grouped by all, published, and unpublished posts.
- \`GET /feeds/feed.json\`: returns the public JSON Feed.
- \`GET /feeds/rss.xml\`: returns the public RSS feed.
- \`GET /api/status.json\`: returns service status metadata for automated discovery.
- \`GET /openapi.json\`: returns an OpenAPI description for these public endpoints.

Use \`Accept: text/markdown\` on HTML pages when you want a markdown representation of a page.
`,
		{
			headers: {
				'Content-Type': 'text/markdown; charset=utf-8',
			},
		}
	)
}
