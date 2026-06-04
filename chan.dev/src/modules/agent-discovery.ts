export const SITE_ORIGIN = 'https://chan.dev'
export const AGENT_SKILL_PATH =
	'/.well-known/agent-skills/chan-dev-content/SKILL.md'

export const SITE_INDEX = {
	name: 'chan.dev',
	description:
		'Personal site for Michael Chan with posts, lessons, talks, uses, personal operating-system notes, and structured research.',
	sections: [
		{
			name: 'Posts',
			url: `${SITE_ORIGIN}/posts`,
			description: 'Published and unpublished writing.',
		},
		{
			name: 'Lessons',
			url: `${SITE_ORIGIN}/lessons`,
			description: 'Short technical lessons and learning notes.',
		},
		{
			name: 'Talks',
			url: `${SITE_ORIGIN}/talks`,
			description: 'Public recorded conference and meetup talks.',
		},
		{
			name: 'Uses',
			url: `${SITE_ORIGIN}/uses`,
			description: 'Tools and gear Michael uses.',
		},
		{
			name: 'OS',
			url: `${SITE_ORIGIN}/os`,
			description: 'Personal operating-system notes.',
		},
		{
			name: 'Research',
			url: `${SITE_ORIGIN}/research`,
			description: 'Structured research, audits, and reports.',
		},
	],
	feeds: {
		rss: `${SITE_ORIGIN}/feeds/rss.xml`,
		json: `${SITE_ORIGIN}/feeds/feed.json`,
	},
	apis: {
		tags: `${SITE_ORIGIN}/api/tags.json`,
		status: `${SITE_ORIGIN}/api/status.json`,
		openapi: `${SITE_ORIGIN}/openapi.json`,
		docs: `${SITE_ORIGIN}/api/docs.md`,
	},
	discovery: {
		apiCatalog: `${SITE_ORIGIN}/.well-known/api-catalog`,
		agentSkills: `${SITE_ORIGIN}/.well-known/agent-skills/index.json`,
		mcpServerCard: `${SITE_ORIGIN}/.well-known/mcp/server-card.json`,
		auth: `${SITE_ORIGIN}/auth.md`,
	},
}

export const CHAN_DEV_CONTENT_SKILL = `---
name: chan-dev-content
description: Explore public chan.dev writing, lessons, talks, uses, research, and feeds.
---

# chan.dev content discovery

Use this skill when an agent needs to understand, summarize, search, cite, or navigate public content on chan.dev.

## Entry points

- Homepage: https://chan.dev/
- Posts: https://chan.dev/posts
- Lessons: https://chan.dev/lessons
- Talks: https://chan.dev/talks
- Uses: https://chan.dev/uses
- Personal OS: https://chan.dev/os
- Research: https://chan.dev/research
- Tags API: https://chan.dev/api/tags.json
- JSON feed: https://chan.dev/feeds/feed.json
- RSS feed: https://chan.dev/feeds/rss.xml

## Guidance

Prefer machine-readable feeds and APIs when building indexes or summaries. Request text/markdown when fetching HTML pages so the response is easier to parse. Public content does not require authentication.
`

export function absoluteUrl(path: string) {
	return new URL(path, SITE_ORIGIN).toString()
}

export function jsonResponse(
	data: unknown,
	init: ResponseInit = {},
	contentType = 'application/json; charset=utf-8'
) {
	const headers = new Headers(init.headers)
	headers.set('Content-Type', contentType)

	return new Response(JSON.stringify(data, null, 2), {
		...init,
		headers,
	})
}

export async function sha256Digest(value: string) {
	const encoded = new TextEncoder().encode(value)
	const digest = await crypto.subtle.digest('SHA-256', encoded)

	return `sha256:${[...new Uint8Array(digest)]
		.map((byte) => byte.toString(16).padStart(2, '0'))
		.join('')}`
}
