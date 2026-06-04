import {
	AGENT_SKILL_PATH,
	CHAN_DEV_CONTENT_SKILL,
	absoluteUrl,
	jsonResponse,
	sha256Digest,
} from '#modules/agent-discovery'

export async function GET() {
	return jsonResponse({
		$schema:
			'https://schemas.agentskills.io/discovery/0.2.0/schema.json',
		skills: [
			{
				name: 'chan-dev-content',
				type: 'skill-md',
				description:
					'Explore public chan.dev writing, lessons, talks, uses, research, and feeds.',
				url: absoluteUrl(AGENT_SKILL_PATH),
				digest: await sha256Digest(CHAN_DEV_CONTENT_SKILL),
			},
		],
	})
}
