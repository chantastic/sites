export async function GET() {
	return new Response(
		`# auth.md for chan.dev

chan.dev is primarily a public content site. Public pages, feeds, and content APIs do not require authentication.

## Agent audience

Agents may read public content, request markdown responses with \`Accept: text/markdown\`, use the API catalog at \`/.well-known/api-catalog\`, inspect the OpenAPI document at \`/openapi.json\`, and use the public MCP endpoint at \`/mcp\`.

## Registration

chan.dev does not currently offer self-service agent registration, token issuance, or delegated agent credentials.

## Credentials

No bearer token is required for public content endpoints. Do not send secrets or user credentials to public content endpoints.

## Human dashboard

\`/dashboard\` is a private human dashboard protected by WorkOS AuthKit through \`/sign-in\` and \`/auth/callback\`. It is not an agent API.

## Contact

For access questions, contact Michael Chan through the public links on https://chan.dev/about/.
`,
		{
			headers: {
				'Content-Type': 'text/markdown; charset=utf-8',
			},
		}
	)
}
