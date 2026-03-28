import fs from 'node:fs'
import path from 'node:path'

export interface LegacyGuideRedirect {
	from: string
	to: string
	status: number
}

export function getLegacyGuideRedirects(): LegacyGuideRedirect[] {
	const redirectsPath = path.join(process.cwd(), 'public/_redirects')
	const redirectsFile = fs.readFileSync(redirectsPath, 'utf8')
	const marker = '# guides namespace'
	const markerIndex = redirectsFile.indexOf(marker)

	if (markerIndex === -1) {
		return []
	}

	return redirectsFile
		.slice(markerIndex + marker.length)
		.split('\n')
		.map((line) => line.trim())
		.filter(Boolean)
		.map((line) => {
			const [from, to, status] = line.split(/\s+/)
			return {from, to, status: Number(status)}
		})
		.filter(
			(entry) =>
				entry.from?.startsWith('/') &&
				!entry.from.startsWith('/guides/') &&
				entry.to?.startsWith('/guides/') &&
				Number.isFinite(entry.status)
		)
}

export function getLegacyGuideStepRedirects() {
	return getLegacyGuideRedirects().filter(
		(entry) => entry.from.split('/').filter(Boolean).length >= 2
	)
}
