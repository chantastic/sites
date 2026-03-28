import * as ASTRO_CONTENT from 'astro:content'
import {z, defineCollection, reference} from 'astro:content'
import {entrySlug} from '#lib/content-entry'

export const COLLECTION_NAME = 'guide_steps'

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

export function guideStepSlug(entry: CollectionEntry) {
	return entrySlug(entry)
}

export function guideSegments(entry: CollectionEntry) {
	return guideStepSlug(entry).split('/')
}

export function legacyGuideSlug(entry: CollectionEntry) {
	return guideSegments(entry)[0]
}

export function guideSlug(entry: CollectionEntry) {
	if (typeof entry.data.guide === 'string') {
		return entry.data.guide
	}

	return legacyGuideSlug(entry)
}

export function stepSlug(entry: CollectionEntry) {
	return guideSegments(entry).slice(1).join('/') || null
}

export function isGuideIndex(entry: CollectionEntry) {
	return entry.id.endsWith('/index.md')
}

export function legacyGuidePath(entryOrSlug: CollectionEntry | string) {
	const slug =
		typeof entryOrSlug === 'string'
			? entryOrSlug
			: legacyGuideSlug(entryOrSlug)

	return `/${slug}`
}

export function guidePath(entryOrSlug: CollectionEntry | string) {
	const slug =
		typeof entryOrSlug === 'string'
			? entryOrSlug
			: guideSlug(entryOrSlug)

	return `/guides/${slug}`
}

export function legacyGuideStepPath(entry: CollectionEntry) {
	return `/${guideStepSlug(entry)}`
}

export function guideStepPath(entry: CollectionEntry) {
	const step = stepSlug(entry)
	return step ? `${guidePath(entry)}/${step}` : guidePath(entry)
}

export function isCurrentGuideStep(
	entry: CollectionEntry,
	paramsStepSlug: string | undefined
) {
	const slug = stepSlug(entry)
	if (!paramsStepSlug) return isGuideIndex(entry)
	return slug === paramsStepSlug
}

export function hoistGuideIndex(entries: CollectionEntry[]) {
	const indexEntry = entries.find((entry) => isGuideIndex(entry))
	const remainder = entries.filter((entry) => !isGuideIndex(entry))
	return indexEntry ? [indexEntry, ...remainder] : remainder
}

export function compareGuideEntries(
	a: CollectionEntry,
	b: CollectionEntry
) {
	return guideStepSlug(a).localeCompare(guideStepSlug(b), undefined, {
		numeric: true,
	})
}

export async function getEntriesForGuide(guide: string) {
	const entries = await getCollection(
		(entry) => guideSlug(entry) === guide,
		compareGuideEntries
	)

	return hoistGuideIndex(entries)
}

export const guideStepSchema = z.object({
	title: z.string().optional(),
	description: z.string().optional(),
	status: z.string().optional(),
	order: z.number().optional(),
	guide: reference('guides').optional(),
})

export const collectionSchema = defineCollection({
	schema: guideStepSchema,
})
