<script>
	import { episodeSlug } from '$lib/paths';
	import { getContext } from 'svelte';
	let episode = getContext('episode');
</script>

<svelte:head>
	<title>{episode.title} on React Podcast with chantastic</title>
	<link
		rel="canonical"
		href="https://reactpodcast.com/episodes/{episodeSlug(episode)}/transcript"
	/>
</svelte:head>

<section id="transcript" data-transcript>
	<div class="mt-4 prose">
		<h2>Transcript</h2>
		{@html episode.transcription || 'No Transcript available for this episode'}
	</div>
</section>
