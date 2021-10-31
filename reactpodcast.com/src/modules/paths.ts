type Episode = {
	id: string;
	title: string;
};

export function episodeSlug(episode: Episode): string {
	return `${episode.id}_${episode.title.replace(/[^a-zA-Z0-9]/g, '-')}`;
}
