import * as ASTRO_CONTENT from 'astro:content'
import * as COLLECTION from '#modules/collection'
import {z, defineCollection, reference} from 'astro:content'

export const COLLECTION_NAME = 'lessons'

export type CollectionEntry = ASTRO_CONTENT.CollectionEntry<
	typeof COLLECTION_NAME
>

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

export function lessonSlug(entry: Pick<CollectionEntry, 'slug' | 'id'>) {
	return String(entry.slug ?? entry.id)
}

export function lessonPath(entry: Pick<CollectionEntry, 'slug' | 'id'>) {
	return path(lessonSlug(entry))
}

export function collectionName(
	entry: Pick<CollectionEntry, 'data'> & {data: {collection?: string}}
) {
	return entry.data.collection ?? 'lessons'
}

export function courseName(
	entry: Pick<CollectionEntry, 'data'> & {data: {course?: string}}
) {
	return entry.data.course ?? null
}

export function guideName(
	entry: Pick<CollectionEntry, 'data'> & {data: {guide?: string}}
) {
	return entry.data.guide ?? null
}

export function guideStepName(
	entry: Pick<CollectionEntry, 'data'> & {
		data: {guide_step?: string; sequence?: string}
	}
) {
	return entry.data.guide_step ?? entry.data.sequence ?? lessonSlug(entry)
}

export function courseKey(entry: CollectionEntry) {
	const course = courseName(entry)

	if (!course) {
		return null
	}

	return [collectionName(entry), course].join('/')
}

export function collectionPath(name: string) {
	return path('collections', name)
}

export function coursePath(key: string) {
	return path('courses', key.replaceAll('/', '--'))
}

export function guidePath(name: string) {
	return `/guides/${name}`
}

function compareSequence(a: string, b: string) {
	return a.localeCompare(b, undefined, {numeric: true})
}

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

export function getUniqueCollectionNames(entries: CollectionEntry[]) {
	return [...new Set(entries.map((entry) => collectionName(entry)))].sort()
}

export function getUniqueCourseKeys(entries: CollectionEntry[]) {
	return [
		...new Set(
			entries
				.map((entry) => courseKey(entry))
				.filter((entry): entry is string => Boolean(entry))
		),
	].sort()
}

export function getLessonsForCollection(
	entries: CollectionEntry[],
	name: string
) {
	return entries
		.filter((entry) => collectionName(entry) === name)
		.toSorted(
			(a, b) =>
				(a.data.order ?? Number.MAX_SAFE_INTEGER) -
				(b.data.order ?? Number.MAX_SAFE_INTEGER) ||
				compareSequence(
					a.data.sequence ?? lessonSlug(a),
					b.data.sequence ?? lessonSlug(b)
				) || lessonSlug(a).localeCompare(lessonSlug(b))
		)
}

export function getLooseLessonsForCollection(
	entries: CollectionEntry[],
	name: string
) {
	return getLessonsForCollection(entries, name).filter(
		(entry) => !courseName(entry)
	)
}

export function getLessonsForCourse(
	entries: CollectionEntry[],
	key: string
) {
	const [collection, course] = key.split('/')

	return entries
		.filter(
			(entry) =>
				collectionName(entry) === collection &&
				courseName(entry) === course
		)
		.toSorted(
			(a, b) =>
				(a.data.order ?? Number.MAX_SAFE_INTEGER) -
				(b.data.order ?? Number.MAX_SAFE_INTEGER) ||
				compareSequence(
					a.data.sequence ?? lessonSlug(a),
					b.data.sequence ?? lessonSlug(b)
				) || lessonSlug(a).localeCompare(lessonSlug(b))
		)
}

export async function getEntryByRelativeOrder(
	entry: CollectionEntry,
	relative_order = 1
) {
	const key = courseKey(entry)

	if (!key) {
		return null
	}

	const siblings = getLessonsForCourse(await getCollection(), key)
	const currentIndex = siblings.findIndex(
		(searchEntry) => lessonSlug(searchEntry) === lessonSlug(entry)
	)

	if (currentIndex === -1) {
		return null
	}

	return siblings[currentIndex + relative_order] ?? null
}

export const collectionSchema = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		date: z.date(),
		keys: z.array(z.string()).optional(),
		order: z.number().optional(),
		sequence: z.string().optional(),
		collection: z.string(),
		course: z.string().optional(),
		guide: reference('guides').optional(),
		guide_step: z.string().optional(),
		status: z
			.enum([
				'draft',
				'not-started',
				'cursed',
				'unknown',
				'post-production',
				'complete',
				'cancelled',
			])
			.default('unknown'),
	}),
})
