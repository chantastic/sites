import * as ASTRO_CONTENT from 'astro:content'
import * as COLLECTION from '#modules/collection'
import {z, reference, defineCollection} from 'astro:content'

export const COLLECTION_NAME = 'posts'

export function path(...segments: string[]) {
	return COLLECTION.constructPathFromSegments(
		COLLECTION_NAME,
		...segments
	)
}

export type CollectionEntry = ASTRO_CONTENT.CollectionEntry<
	typeof COLLECTION_NAME
>

type ViteGlobItem = Record<string, Frontmatter>
type Frontmatter = {
	frontmatter: {publishDate: COLLECTION.maybeDate}
}

export function processFeedEntries(
	viteGlob: ViteGlobItem,
	formatter
) {
	return Object.entries(viteGlob)
		.filter(([, post]) => post.frontmatter.publishDate)
		.toSorted(([, a], [, b]) =>
			COLLECTION.compareByDate(
				a.frontmatter.publishDate,
				b.frontmatter.publishDate
			)
		)
		.map(formatter)
}

export async function getCollection(
	filter = (entry: CollectionEntry) => {
		if (entry.data.publishDate) {
			return true
		}
		return false
	},
	sort = (a: CollectionEntry, b: CollectionEntry) =>
		COLLECTION.compareByDate(
			a.data.publishDate,
			b.data.publishDate
		)
) {
	const result = await ASTRO_CONTENT.getCollection(
		COLLECTION_NAME,
		filter
	)

	return result.toSorted(sort)
}

export const collectionSchema = defineCollection({
	schema: ({image}) =>
		z.object({
			title: z.string(),
			publishDate: z.date().optional(),
			description: z.string().optional(),
			tags: z.array(z.string()).optional(),
			tldr: z.string().optional(),
			references: z.array(z.string().url()).optional(),
			shoutouts: z.array(reference('entities')).optional(),
			cover: image().optional(),
			coverAlt: z.string().optional(),
			og: z
				.object({
					title: z.string().optional(),
					audio: z.string().url().optional(),
					image: z.string().url().optional(),
				})
				.optional(),
			mermaid: z.boolean().optional(),
		}),
})

export function entryHasTags(entry: CollectionEntry) {
	if (entry.data.tags) {
		return true
	}
	return false
}

export function extractTags(entries: CollectionEntry[]) {
	return [
		...new Set(
			entries
				.map(({data}) => data.tags)
				.filter(Boolean)
				.flat()
		),
	]
}
