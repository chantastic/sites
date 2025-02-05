import * as ASTRO_CONTENT from 'astro:content'
import * as COLLECTION from '#modules/collection'
import {z, defineCollection} from 'astro:content'

export const COLLECTION_NAME = 'dailies'

export type CollectionEntry = ASTRO_CONTENT.CollectionEntry<
	typeof COLLECTION_NAME
>

export async function getCollection(
	filter = (entry: CollectionEntry) => {
		return true
	},
	sort = (a: CollectionEntry, b: CollectionEntry) => {
		return COLLECTION.compareByDate(
			new Date(a.slug),
			new Date(b.slug)
		)
	}
) {
	const result = await ASTRO_CONTENT.getCollection(
		COLLECTION_NAME,
		filter
	)

	return result.toSorted(sort)
}

export const collectionSchema = defineCollection({
	schema: () => z.object({}),
})
