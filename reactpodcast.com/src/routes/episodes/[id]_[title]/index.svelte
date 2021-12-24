<script>
	import { episodeSlug } from '$lib/paths';
	import { getContext } from 'svelte';
	let episode = getContext('episode');
</script>

<svelte:head>
	<title>{episode.title} on React Podcast with chantastic</title>
	<link rel="canonical" href="https://reactpodcast.com/episodes/{episodeSlug(episode)}" />
</svelte:head>

<section>
	<div class="mt-4 prose">
		<h2>Notes</h2>
		{@html episode.long_description}
	</div>
</section>
