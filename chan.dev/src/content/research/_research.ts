import * as ASTRO_CONTENT from 'astro:content'
import * as COLLECTION from '#modules/collection'
import {entrySlug as contentEntrySlug} from '#lib/content-entry'
import {z, defineCollection} from 'astro:content'

export const COLLECTION_NAME = 'research'

export function path(...segments: string[]) {
	return COLLECTION.constructPathFromSegments(
		COLLECTION_NAME,
		...segments
	)
}

export function title(specific?: string) {
	return specific
		? specific
		: COLLECTION.prefixCollectionTitle(COLLECTION_NAME)
}

export type CollectionEntry = ASTRO_CONTENT.CollectionEntry<
	typeof COLLECTION_NAME
>

function sortableDate(entry: CollectionEntry) {
	return entry.data.publishDate ?? entry.data.snapshotDate
}

export async function getCollection(
	filter = (entry: CollectionEntry) => true,
	sort = (a: CollectionEntry, b: CollectionEntry) =>
		COLLECTION.compareByDate(sortableDate(a), sortableDate(b))
) {
	const entries = await ASTRO_CONTENT.getCollection(
		COLLECTION_NAME,
		filter
	)

	return entries.toSorted(sort)
}

export const collectionSchema = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		publishDate: z.date().optional(),
		snapshotDate: z.date(),
		kind: z.string(),
		subject: z.object({
			name: z.string(),
			type: z.string().optional(),
			url: z.string().url().optional(),
		}),
		tags: z.array(z.string()).optional(),
		tldr: z.string().optional(),
		status: z.string().optional(),
		priorities: z
			.array(
				z.object({
					title: z.string(),
					summary: z.string().optional(),
					impact: z.string().optional(),
					effort: z.string().optional(),
				})
			)
			.optional(),
	}),
})

export function entrySlug(entry: {slug?: string; id: string}) {
	return contentEntrySlug(entry)
}
