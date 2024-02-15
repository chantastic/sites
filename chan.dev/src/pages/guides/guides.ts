import type {CollectionEntry} from '#pages/guides/[topic]/[scope]/guide_steps'

export function getCollection(collection: CollectionEntry[]) {
	let result = []

	for (let entry of collection) {
		let [topic, scope] = entry.slug.split('/').slice(0, 2)

		if (
			result.filter((guide) => guide.topic === topic).length ===
			0
		) {
			result.push({
				topic,
				scope,
			})
		}
	}

	return result
}
