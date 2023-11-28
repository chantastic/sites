import * as ASTRO_CONTENT from 'astro:content'
import * as COLLECTION from '#modules/collection'
import {z, defineCollection} from 'astro:content'
import {getPathSegment} from '#modules/utilities'

export const COLLECTION_NAME = 'lessons'

export function path(...segments: string[]) {
	return COLLECTION.constructPathFromSegments(
		COLLECTION_NAME,
		...segments
	)
}

export async function getEntryByRelativeOrder(
	entry: CollectionEntry,
	relative_order = 1
) {
	const result = await ASTRO_CONTENT.getCollection(
		COLLECTION_NAME,
		(search_entry: CollectionEntry) => {
			return search_entry.slug.includes(
				entry.slug.split('/')[1]
			)
		}
	)

	if (relative_order === 0) {
		return entry
	}
	if (relative_order < 0) {
		return (
			result.filter(
				(search_entry: CollectionEntry) =>
					search_entry.data.order ===
					entry.data.order - Math.abs(relative_order)
			)[0] || null
		)
	}
	if (relative_order > 0) {
		return (
			result.filter(
				(search_entry: CollectionEntry) =>
					search_entry.data.order ===
					entry.data.order + Math.abs(relative_order)
			)[0] || null
		)
	}
}

export function getUniqueSegmentValuesFromCollection(
	collection: CollectionEntry[],
	position = 0
) {
	return [
		...new Set(
			collection.map((entry: CollectionEntry) =>
				getPathSegment(entry.slug)
			)
		),
	]
}

export function title(specific?: string) {
	return specific
		? specific
		: COLLECTION.prefixCollectionTitle(COLLECTION_NAME)
}

export type CollectionEntry = ASTRO_CONTENT.CollectionEntry<
	typeof COLLECTION_NAME
>

export async function getCollection(
	filter?: (entry: CollectionEntry) => unknown,
	sort = (a: CollectionEntry, b: CollectionEntry) => 0
) {
	const result = await ASTRO_CONTENT.getCollection(
		COLLECTION_NAME,
		filter
	)

	return result.sort(sort)
}

export const collectionSchema = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		date: z.date(),
		keys: z.array(z.string()).optional(),
		order: z.number().optional(), // unique?
		status: z
			.enum([
				'draft',
				'not-started',
				'cursed',
				'unknown',
				'post-production',
				'complete',
			])
			.default('unknown'),
	}),
})
