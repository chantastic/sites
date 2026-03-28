import {entrySlug, renderEntry} from '#lib/content-entry'
import type * as GUIDES from '#content/guides/_guides'
import * as GUIDE_STEPS from '#content/guide_steps/_guide_steps'
import * as LESSONS from '#content/lessons/_lessons'

export type GuidePackage = GUIDES.CollectionEntry
export type InstructionalEntry =
	| {kind: 'lesson'; entry: LESSONS.CollectionEntry}
	| {kind: 'guide_step'; entry: GUIDE_STEPS.CollectionEntry}

export function instructionalTitle(item: InstructionalEntry) {
	return item.entry.data.title ?? instructionalSlug(item)
}

export function instructionalSlug(item: InstructionalEntry) {
	if (item.kind === 'lesson') {
		return LESSONS.lessonSlug(item.entry)
	}

	return GUIDE_STEPS.guideStepSlug(item.entry)
}

export function instructionalGuide(item: InstructionalEntry) {
	if (item.kind === 'lesson') {
		return LESSONS.guideName(item.entry)
	}

	return GUIDE_STEPS.guideSlug(item.entry)
}

export function instructionalGuidePath(item: InstructionalEntry) {
	return `/guides/${instructionalGuide(item)}`
}

export function instructionalPath(item: InstructionalEntry) {
	if (item.kind === 'lesson') {
		const guide = LESSONS.guideName(item.entry)
		if (guide) {
			return `/guides/${guide}/${LESSONS.guideStepName(item.entry)}`
		}

		return `/${LESSONS.lessonPath(item.entry)}`
	}

	return GUIDE_STEPS.guideStepPath(item.entry)
}

export async function renderInstructionalEntry(item: InstructionalEntry) {
	return await renderEntry(item.entry)
}

export async function getGuideInstructionalEntries(guide: string) {
	const [lessons, guideSteps] = await Promise.all([
		LESSONS.getCollection(
			(entry) => LESSONS.guideName(entry) === guide
		),
		GUIDE_STEPS.getEntriesForGuide(guide),
	])

	if (lessons.length > 0) {
		return lessons.map((entry) => ({
			kind: 'lesson' as const,
			entry,
		}))
	}

	return guideSteps
		.filter((entry) => !GUIDE_STEPS.isGuideIndex(entry))
		.map((entry) => ({
			kind: 'guide_step' as const,
			entry,
		}))
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

	if (lessons[0]) {
		return {kind: 'lesson' as const, entry: lessons[0]}
	}

	const guideSteps = await GUIDE_STEPS.getCollection(
		(entry) =>
			GUIDE_STEPS.guideSlug(entry) === guide &&
			GUIDE_STEPS.stepSlug(entry) === step
	)

	if (guideSteps[0]) {
		return {kind: 'guide_step' as const, entry: guideSteps[0]}
	}

	return null
}

export function isCurrentInstructionalEntry(
	item: InstructionalEntry,
	paramsStepSlug: string | undefined
) {
	if (!paramsStepSlug) {
		return false
	}

	if (item.kind === 'lesson') {
		return LESSONS.guideStepName(item.entry) === paramsStepSlug
	}

	return GUIDE_STEPS.stepSlug(item.entry) === paramsStepSlug
}
