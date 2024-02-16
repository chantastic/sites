import * as ASTRO_CONTENT from 'astro:content'
import {z, defineCollection} from 'astro:content'

export const COLLECTION_NAME = 'guide_steps'

// A Chantastic Guide to Git Foundations
// %brand% %product% %topic% %scope%

// guide_step collection: single progressive step in complete a guide

export type CollectionEntry = ASTRO_CONTENT.CollectionEntry<
	typeof COLLECTION_NAME
>

export async function getCollection(
	filter = (entry: CollectionEntry) => true,
	sort = (a: CollectionEntry, b: CollectionEntry) => 0
) {
	const collection = await ASTRO_CONTENT.getCollection(
		COLLECTION_NAME,
		filter
	)

	return collection.toSorted(sort)
}

export const collectionSchema = defineCollection({
	schema: z.object({
		title: z.string(),
	}),
})
