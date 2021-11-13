export function episodeSlug(episode: Pick<Episode, 'id' | 'title'>): string {
	return `${episode.id}_${episode.title.replace(/[^a-zA-Z0-9]/g, '-')}`;
}
