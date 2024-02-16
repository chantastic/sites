import type {CollectionEntry} from '#pages/guides/[topic]/[scope]/guide_steps'

export function getCollection(collection: CollectionEntry[]) {
	let result = []

	for (let entry of collection) {
		let [topic, scope] = entry.slug.split('/').slice(0, 2)

		if (
			result.filter(
				(set) => set.topic === topic && set.scope === scope
			).length === 0
		) {
			result.push({
				topic,
				scope,
			})
		}
	}

	return result
}
