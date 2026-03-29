import redirectsFile from '#data/legacy-guide-redirects.txt?raw'

export interface LegacyGuideRedirect {
	from: string
	to: string
	status: number
}

export function getLegacyGuideRedirects(): LegacyGuideRedirect[] {
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
