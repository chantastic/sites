import {renderEntry} from '#lib/content-entry'
import type * as GUIDES from '#content/guides/_guides'
import * as LESSONS from '#content/lessons/_lessons'

export type GuidePackage = GUIDES.CollectionEntry
export type InstructionalEntry = LESSONS.CollectionEntry

export function instructionalTitle(entry: InstructionalEntry) {
	return entry.data.title ?? LESSONS.guideStepName(entry)
}

export function instructionalGuide(entry: InstructionalEntry) {
	return LESSONS.guideName(entry)
}

export function instructionalGuidePath(entry: InstructionalEntry) {
	return `/guides/${instructionalGuide(entry)}`
}

export function instructionalPath(entry: InstructionalEntry) {
	const guide = LESSONS.guideName(entry)
	if (guide) {
		return `/guides/${guide}/${LESSONS.guideStepName(entry)}`
	}

	return `/${LESSONS.lessonPath(entry)}`
}

export async function renderInstructionalEntry(entry: InstructionalEntry) {
	return await renderEntry(entry)
}

export async function getGuideInstructionalEntries(guide: string) {
	return await LESSONS.getCollection(
		(entry) => LESSONS.guideName(entry) === guide,
		(a, b) =>
			(a.data.order ?? Number.MAX_SAFE_INTEGER) -
				(b.data.order ?? Number.MAX_SAFE_INTEGER) ||
			(a.data.sequence ?? LESSONS.guideStepName(a)).localeCompare(
				b.data.sequence ?? LESSONS.guideStepName(b),
				undefined,
				{numeric: true}
			) ||
			LESSONS.guideStepName(a).localeCompare(
				LESSONS.guideStepName(b),
				undefined,
				{numeric: true}
			)
	)
}

export async function getGuideInstructionalEntry(
	guide: string,
	step: string
) {
	const lessons = await LESSONS.getCollection(
		(entry) =>
			LESSONS.guideName(entry) === guide &&
			LESSONS.guideStepName(entry) === step
	)

	return lessons[0] ?? null
}

export function isCurrentInstructionalEntry(
	entry: InstructionalEntry,
	paramsStepSlug: string | undefined
) {
	if (!paramsStepSlug) {
		return false
	}

	return LESSONS.guideStepName(entry) === paramsStepSlug
}
