import {render} from 'astro:content'

export function entrySlug(entry: {slug?: string; id: string}) {
	return String(entry.slug ?? entry.id)
}

export async function renderEntry(entry: unknown) {
	return await render(entry)
}
