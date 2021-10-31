<script context="module">
	export const prerender = true;

	export async function load({ fetch }) {
		const url = `/episodes.json`;
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: {
					episodes: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script lang="ts">
	import type * as Episodes from './episodes.json';
	export let episodes: Promise<Episodes.EpisodeCollection>;
</script>

{#await episodes}
	<p>waiting for the promise to resolve...</p>
{:then episodes}
	<ul>
		{#each episodes.episodes.collection as episode}
			{#if episode.status === 'published'}
				<li>{episode.title}</li>
			{/if}
		{/each}
	</ul>
{:catch error}
	<p>Something went wrong: {error.message}</p>
{/await}
