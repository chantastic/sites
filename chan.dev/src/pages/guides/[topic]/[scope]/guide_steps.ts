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
	filter?: (entry: CollectionEntry) => unknown,
	sort = (a: CollectionEntry, b: CollectionEntry) =>
		Number(b.id.slice(0, 4)) - Number(a.id.slice(0, 4))
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
	}),
})
