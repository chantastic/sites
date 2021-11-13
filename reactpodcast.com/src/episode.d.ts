type Episode = {
	id: string;
	status: 'published' | 'draft';
	title: string;
	slug: string;
	published_at: string;
	image_path: string;
	duration: number;
	description: string;
	long_description: string;
	transcription: string;
	audio_file_url: string;
	audio_content_type: string;
};

type EpisodeCollection = {
	collection: Episode[];
};
