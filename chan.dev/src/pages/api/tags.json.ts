import * as POSTS from '#content/posts/_posts'

export async function GET() {
	const entries = await POSTS.getCollection(
		() => true,
		(a, b) => POSTS.entrySlug(a).localeCompare(POSTS.entrySlug(b))
	)

	const publishedEntries = entries.filter(
		(entry) => entry.data.publishDate
	)
	const unpublishedEntries = entries.filter(
		(entry) => !entry.data.publishDate
	)

	return new Response(
		JSON.stringify({
			all: {
				count: entries.length,
				tags: POSTS.extractTagCounts(entries),
				entries: POSTS.entriesWithTagMetadata(entries),
			},
			published: {
				count: publishedEntries.length,
				tags: POSTS.extractTagCounts(publishedEntries),
				entries: POSTS.entriesWithTagMetadata(publishedEntries),
			},
			unpublished: {
				count: unpublishedEntries.length,
				tags: POSTS.extractTagCounts(unpublishedEntries),
				entries: POSTS.entriesWithTagMetadata(
					unpublishedEntries
				),
			},
		}),
		{
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
			},
		}
	)
}
