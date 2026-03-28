import 'dotenv/config'
import process from 'node:process'
import {readFile} from 'node:fs/promises'

const sha = process.argv[2]?.trim()
const projectArg = process.argv[3]?.trim()

if (!sha) {
	console.error('Usage: node scripts/cloudflare-deploy-url.mjs <git-sha> [project-name]')
	process.exit(1)
}

const accountId =
	process.env.CLOUDFLARE_ACCOUNT_ID ??
	process.env.CF_ACCOUNT_ID ??
	process.env.CLOUDFLARE_ACCOUNT
const apiToken =
	process.env.CLOUDFLARE_API_TOKEN ??
	process.env.CF_API_TOKEN

if (!accountId) {
	console.error('Missing CLOUDFLARE_ACCOUNT_ID')
	process.exit(1)
}

if (!apiToken) {
	console.error('Missing CLOUDFLARE_API_TOKEN')
	process.exit(1)
}

async function readProjectNameFromWrangler() {
	const wrangler = await readFile(new URL('../wrangler.toml', import.meta.url), 'utf8')
	const match = wrangler.match(/^name\s*=\s*"([^"]+)"/m)
	return match?.[1] ?? null
}

function getCommitSha(deployment) {
	return (
		deployment?.deployment_trigger?.metadata?.commit_hash ??
		deployment?.deployment_trigger?.metadata?.commit_sha ??
		deployment?.latest_stage?.metadata?.commit_hash ??
		deployment?.short_id ??
		null
	)
}

function getDeploymentUrl(deployment) {
	return (
		deployment?.url ??
		deployment?.aliases?.find((value) =>
			typeof value === 'string' && value.includes('.pages.dev')
		) ??
		deployment?.canonical_deployment?.url ??
		null
	)
}

const projectName = projectArg ?? (await readProjectNameFromWrangler())

if (!projectName) {
	console.error('Could not determine Pages project name')
	process.exit(1)
}

const target = sha.toLowerCase()
let page = 1
const perPage = 100
let found = null

while (page <= 10 && !found) {
	const url = new URL(
		`https://api.cloudflare.com/client/v4/accounts/${accountId}/pages/projects/${projectName}/deployments`
	)
	url.searchParams.set('page', String(page))
	url.searchParams.set('per_page', String(perPage))

	const response = await fetch(url, {
		headers: {
			Authorization: `Bearer ${apiToken}`,
			'Content-Type': 'application/json',
		},
	})

	if (!response.ok) {
		console.error(`Cloudflare API error: ${response.status} ${response.statusText}`)
		const body = await response.text()
		if (body) console.error(body)
		process.exit(1)
	}

	const payload = await response.json()
	const deployments = Array.isArray(payload?.result) ? payload.result : []

	if (deployments.length === 0) break

	found = deployments.find((deployment) => {
		const commitSha = String(getCommitSha(deployment) ?? '').toLowerCase()
		return commitSha === target || commitSha.startsWith(target)
	})

	page += 1
}

if (!found) {
	console.error(`No Pages deployment found for commit ${sha} in project ${projectName}`)
	process.exit(2)
}

const output = {
	project: projectName,
	commit: getCommitSha(found),
	deploymentId: found.id ?? null,
	shortId: found.short_id ?? null,
	url: getDeploymentUrl(found),
	environment: found.environment ?? null,
	status: found.latest_stage?.status ?? found.stage ?? null,
}

if (!output.url) {
	console.error(JSON.stringify(output, null, 2))
	console.error('Deployment found, but no preview URL was present in the API response')
	process.exit(3)
}

console.log(output.url)
