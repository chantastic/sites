<script context="module">
	export const prerender = true;

	export async function load({ fetch }) {
		const PODCAST_ID = 'bdb43d4d-bd1d-4fbc-bd60-40f1e3299aa3';
		const url = `https://api.simplecast.com/podcasts/${PODCAST_ID}/episodes?limit=1000&offset=0`;
		const res = await fetch(url, {
			method: 'GET',
			headers: {
				authorization: `Bearer ${import.meta.env.VITE_SIMPLECAST_TOKEN}`
			}
		});

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
	import { episodeSlug } from '../modules/paths';

	export let episodes: Promise<EpisodeCollection>;

	type Episode = {
		id: string;
		status: 'published' | 'draft';
		title: string;
		slug: string;
		published_at: string;
		image_path: string;
		duration: number;
		description: string;
	};

	type EpisodeCollection = {
		collection: Episode[];
	};
</script>

<svelte:head>
	<title>React Podcast with chantastic</title>
</svelte:head>
{#await episodes}
	<p>waiting for the promise to resolve...</p>
{:then episodes}
	<ul>
		{#each episodes.collection as episode}
			{#if episode.status === 'published'}
				<li>
					<strong>
						<a href="episodes/{episodeSlug(episode)}">{episode.title}</a>
					</strong>
					{episode.description}
				</li>
			{/if}
		{/each}
	</ul>
{:catch error}
	<p>Something went wrong: {error.message}</p>
{/await}
