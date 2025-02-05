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

	return result.toSorted(sort)
}

const frequency = z.enum([
	'regular',
	'occasional',
	'rare',
	'never',
])

const status = z.enum(['active', 'inactive', 'replaced'])

const links = z.string().url().array().optional()

export const collectionSchema = defineCollection({
	schema: z.discriminatedUnion('kind', [
		// default `kind` because of historical context
		z.object({
			kind: z.undefined(),
			manufacturer: z.string(),
			model: z.string(),
			size: z.string().optional(),
			status: z.union([
				status,
				z.enum([
					'lost',
					'returned',
					'for-sale',
					'sold',
					'gifted',
				]),
			]),
			frequency,
			acquisition: z
				.enum(['purchase', 'review', 'gift'])
				.default('purchase'),
			replaced_by: z.string().optional(), // overload: string to slug, object with optional name, deets, etc.
			links,
			// replaced_by <> replaces
		}),
		z.object({
			kind: z.literal('service'),
			organization: z.string(),
			product: z.string().optional(),
			frequency,
			status,
			links,
		}),
	]),
})
