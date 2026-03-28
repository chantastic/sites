import * as ASTRO_CONTENT from 'astro:content'
import {z, defineCollection} from 'astro:content'
import {entrySlug} from '#lib/content-entry'

export const COLLECTION_NAME = 'guides'

export type CollectionEntry = ASTRO_CONTENT.CollectionEntry<
	typeof COLLECTION_NAME
>

export const collectionSchema = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		status: z.string().optional(),
	}),
})

export async function getCollection(
	filter = (entry: CollectionEntry) => true,
	sort = (a: CollectionEntry, b: CollectionEntry) =>
		entrySlug(a).localeCompare(entrySlug(b), undefined, {
			numeric: true,
		})
) {
	const entries = await ASTRO_CONTENT.getCollection(
		COLLECTION_NAME,
		filter
	)

	return entries.toSorted(sort)
}

export function guideSlug(entry: CollectionEntry) {
	return entrySlug(entry)
}

export function guidePath(entryOrSlug: CollectionEntry | string) {
	const slug =
		typeof entryOrSlug === 'string'
			? entryOrSlug
			: guideSlug(entryOrSlug)

	return `/guides/${slug}`
}
