import redirectsFile from '#data/legacy-lesson-redirects.txt?raw'

export interface LegacyLessonRedirect {
	from: string
	to: string
	status: number
}

export function getLegacyLessonRedirects(): LegacyLessonRedirect[] {
	return redirectsFile
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
