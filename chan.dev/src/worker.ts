import {handle} from '@astrojs/cloudflare/handler'

const AGENT_DISCOVERY_LINKS = [
	'</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',
	'</openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json"',
	'</api/docs.md>; rel="service-doc"; type="text/markdown"',
	'</auth.md>; rel="describedby"; type="text/markdown"',
	'</.well-known/agent-skills/index.json>; rel="describedby"; type="application/json"',
	'</.well-known/mcp/server-card.json>; rel="describedby"; type="application/json"',
]

const worker: ExportedHandler<Cloudflare.Env> = {
	async fetch(request, env, ctx) {
		const response = await handle(
			request,
			{
				...env,
				ASSETS: env.STATIC_ASSETS,
			},
			ctx
		)

		if (shouldReturnMarkdown(request, response)) {
			return toMarkdownResponse(request, response)
		}

		return withAgentDiscoveryHeaders(request, response)
	},
}

function shouldReturnMarkdown(request: Request, response: Response) {
	if (!request.headers.get('Accept')?.includes('text/markdown')) {
		return false
	}

	if (!response.headers.get('Content-Type')?.includes('text/html')) {
		return false
	}

	return response.status >= 200 && response.status < 300
}

async function toMarkdownResponse(
	request: Request,
	response: Response
) {
	const html = await response.text()
	const markdown = htmlToMarkdown(html, request.url)
	const headers = agentDiscoveryHeaders(request, response.headers)

	headers.set('Content-Type', 'text/markdown; charset=utf-8')
	headers.set(
		'x-markdown-tokens',
		String(estimateTokenCount(markdown))
	)
	headers.delete('Content-Length')

	return new Response(markdown, {
		status: response.status,
		statusText: response.statusText,
		headers,
	})
}

function withAgentDiscoveryHeaders(
	request: Request,
	response: Response
) {
	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers: agentDiscoveryHeaders(request, response.headers),
	})
}

function agentDiscoveryHeaders(
	request: Request,
	responseHeaders: Headers
) {
	const headers = new Headers(responseHeaders)
	const url = new URL(request.url)

	if (url.pathname === '/') {
		headers.set('Link', AGENT_DISCOVERY_LINKS.join(', '))
	}

	if (isHtmlResponse(headers) || isMarkdownResponse(headers)) {
		appendVary(headers, 'Accept')
	}

	return headers
}

function isHtmlResponse(headers: Headers) {
	return headers.get('Content-Type')?.includes('text/html') ?? false
}

function isMarkdownResponse(headers: Headers) {
	return (
		headers.get('Content-Type')?.includes('text/markdown') ?? false
	)
}

function appendVary(headers: Headers, value: string) {
	const vary = headers.get('Vary')

	if (!vary) {
		headers.set('Vary', value)
		return
	}

	const values = vary.split(',').map((item) => item.trim())

	if (!values.some((item) => item.toLowerCase() === value.toLowerCase())) {
		headers.set('Vary', [...values, value].join(', '))
	}
}

function htmlToMarkdown(html: string, requestUrl: string): string {
	const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]
	const body =
		html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? html

	let markdown = body
		.replace(/<script\b[\s\S]*?<\/script>/gi, '')
		.replace(/<style\b[\s\S]*?<\/style>/gi, '')
		.replace(/<template\b[\s\S]*?<\/template>/gi, '')
		.replace(/<svg\b[\s\S]*?<\/svg>/gi, '')
		.replace(/<!--[\s\S]*?-->/g, '')
		.replace(
			/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi,
			(_, level: string, content: string) =>
				`\n\n${'#'.repeat(Number(level))} ${inlineMarkdown(
					content,
					requestUrl
				)}\n`
		)
		.replace(
			/<li\b[^>]*>([\s\S]*?)<\/li>/gi,
			(_, content: string) => {
				const item = inlineMarkdown(content, requestUrl)

				if (!item) {
					return '\n'
				}

				return `\n- ${item}`
			}
		)
		.replace(/<br\s*\/?>/gi, '\n')
		.replace(
			/<p\b[^>]*>([\s\S]*?)<\/p>/gi,
			(_, content: string) =>
				`\n\n${inlineMarkdown(content, requestUrl)}\n`
		)
		.replace(
			/<(?:div|section|article|main|header|footer|nav|ul|ol)\b[^>]*>/gi,
			'\n'
		)
		.replace(
			/<\/(?:div|section|article|main|header|footer|nav|ul|ol)>/gi,
			'\n'
		)

	markdown = blockMarkdown(markdown, requestUrl)
		.replace(/[ \t]+\n/g, '\n')
		.replace(/\n[ \t]+/g, '\n')
		.replace(/\n{3,}/g, '\n\n')
		.trim()

	const decodedTitle = title
		? inlineMarkdown(title, requestUrl).trim()
		: undefined

	if (
		decodedTitle &&
		!markdown.startsWith('# ') &&
		!markdown.startsWith(`## ${decodedTitle}`)
	) {
		return `# ${decodedTitle}\n\n${markdown}\n`
	}

	return `${markdown}\n`
}

function blockMarkdown(html: string, requestUrl: string): string {
	return decodeHtmlEntities(
		convertLinksToMarkdown(html, requestUrl)
			.replace(/<[^>]+>/g, '')
			.replace(/[ \t]{2,}/g, ' ')
	)
}

function inlineMarkdown(html: string, requestUrl: string): string {
	return decodeHtmlEntities(
		convertLinksToMarkdown(html, requestUrl)
			.replace(/<[^>]+>/g, '')
			.replace(/\s+/g, ' ')
	).trim()
}

function convertLinksToMarkdown(html: string, requestUrl: string) {
	return html.replace(
		/<a\b[^>]*href=(["'])(.*?)\1[^>]*>([\s\S]*?)<\/a>/gi,
		(
			_: string,
			_quote: string,
			href: string,
			content: string
		): string => {
			const text = inlineMarkdown(content, requestUrl).trim()
			const url = new URL(href, requestUrl).toString()

			if (!text) {
				return url
			}

			return `[${text}](${url})`
		}
	)
}

function decodeHtmlEntities(value: string): string {
	const entities: Record<string, string> = {
		amp: '&',
		apos: "'",
		copy: '(c)',
		gt: '>',
		lt: '<',
		nbsp: ' ',
		quot: '"',
	}

	return value.replace(/&(#\d+|#x[\da-f]+|[a-z]+);/gi, (entity, key) => {
		if (key.startsWith('#x')) {
			return String.fromCodePoint(Number.parseInt(key.slice(2), 16))
		}

		if (key.startsWith('#')) {
			return String.fromCodePoint(Number.parseInt(key.slice(1), 10))
		}

		return entities[key.toLowerCase()] ?? entity
	})
}

function estimateTokenCount(markdown: string) {
	return Math.ceil(markdown.length / 4)
}

export default worker
