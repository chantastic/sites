import 'dotenv/config'
import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const apiKey = process.env.YOUTUBE_API_KEY
const playlistId = 'PLnc_NxpmOxaPBbn1PysP30GB0_8aQGnAa'
const outputPath = path.resolve('src/data/talks.json')

if (!apiKey) {
	console.error('YOUTUBE_API_KEY is required to refresh talks data')
	process.exit(1)
}

const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=${playlistId}&key=${apiKey}`

const response = await fetch(url)

if (!response.ok) {
	console.error(`Failed to fetch talks: ${response.status} ${response.statusText}`)
	process.exit(1)
}

const data = await response.json()
const items = Array.isArray(data?.items) ? data.items : []

await fs.mkdir(path.dirname(outputPath), {recursive: true})
await fs.writeFile(
	outputPath,
	`${JSON.stringify(
		{
			playlistId,
			refreshedAt: new Date().toISOString(),
			items,
		},
		null,
		2
	)}\n`
)

console.log(`Saved ${items.length} talks to ${outputPath}`)
