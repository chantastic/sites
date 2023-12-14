export function getPathSegment(path: string, position = 0) {
	return path.split('/').slice(position, 1)[0]
}
