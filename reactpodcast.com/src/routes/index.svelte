<script lang="ts">
	import type * as Episodes from './episodes.json';
	let data: Promise<Episodes.EpisodeCollection> = fetch(`/episodes.json`).then((res) => res.json());
</script>

{#await data}
	<p>waiting for the promise to resolve...</p>
{:then data}
	<ul>
		{#each data.episodes.collection as episode}
			{#if episode.status === 'published'}
				<li>{episode.title}</li>
			{/if}
		{/each}
	</ul>
{:catch error}
	<p>Something went wrong: {error.message}</p>
{/await}
