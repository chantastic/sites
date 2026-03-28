import fs from 'node:fs'
import path from 'node:path'

export interface LegacyLessonRedirect {
	from: string
	to: string
	status: number
}

export function getLegacyLessonRedirects(): LegacyLessonRedirect[] {
	const redirectsPath = path.join(process.cwd(), 'public/_redirects')
	const redirectsFile = fs.readFileSync(redirectsPath, 'utf8')
	const marker = '# lessons flatten'
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
				entry.from?.startsWith('/lessons/') &&
				entry.to?.startsWith('/lessons/') &&
				Number.isFinite(entry.status)
		)
}
