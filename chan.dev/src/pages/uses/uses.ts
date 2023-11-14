import * as ASTRO_CONTENT from 'astro:content'
import * as COLLECTION from '#modules/collection'
import {z, defineCollection} from 'astro:content'

export const COLLECTION_NAME = 'uses'

export function path(...segments: string[]) {
	return COLLECTION.constructPathFromSegments(
		COLLECTION_NAME,
		...segments
	)
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
		manufacturer: z.string(),
		model: z.string(),
		size: z.string().optional(),
		status: z.enum([
			'active',
			'inactive',
			'replaced',
			'lost',
			'returned',
			'for-sale',
			'sold',
			'gifted',
		]),
		frequency: z.enum([
			'regular',
			'occasional',
			'rare',
			'never',
		]),
		acquisition: z
			.enum(['purchase', 'review', 'gift'])
			.default('purchase'),
		replaced_by: z.string().optional(), // overload: string to slug, object with optional name, deets, etc.
		links: z.string().url().array().optional(),
		// replaced_by <> replaces
	}),
})
