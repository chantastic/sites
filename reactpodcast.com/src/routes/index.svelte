<script context="module">
	import * as datefn from 'date-fns';

	export const prerender = true;

	export async function load({ fetch }) {
		const PODCAST_ID = 'bdb43d4d-bd1d-4fbc-bd60-40f1e3299aa3';
		const url = `https://api.simplecast.com/podcasts/${PODCAST_ID}/episodes?limit=10&offset=0`;
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
				},
				maxage: 3600
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script lang="ts">
	import { episodeSlug } from '$lib/paths';

	export let episodes: Promise<EpisodeCollection>;
</script>

<svelte:head>
	<title>React Podcast with chantastic</title>
</svelte:head>

<header data-window-content class="my-4">
	<a href="/" class="">React Podcast</a>
</header>

{#await episodes}
	<p>waiting for the promise to resolve...</p>
{:then episodes}
	<div data-window-content>
		<main class="border-t-2 border-gray-100 pt-6">
			<ul data-unlist data-episode-list>
				{#each episodes.collection as episode}
					{#if episode.status === 'published'}
						<li class="relative">
							<p class="text-sm leading-5 text-gray-500">
								<time data-episode-item--time datetime={episode.published_at}>
									{datefn.format(new Date(episode.published_at), 'MMM d, yyyy')}
								</time>
							</p>
							<div>
								<h2 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
									{episode.title}
								</h2>
								<p class="mt-3 text-base leading-6 text-gray-500">
									{episode.description}
								</p>
							</div>
							<div class="mt-3">
								<a
									class="text-base leading-6 font-semibold text-teal-600 hover:text-teal-700 focus:outline-none focus:underline"
									href="episodes/{episodeSlug(episode)}"
									><span class="sr-only">{episode.title} </span>Show notes<span
										class="absolute inset-0"
									/></a
								>
							</div>
						</li>
					{/if}
				{/each}
			</ul>

			<div class="border-t-2 border-gray-100 py-6 mt-6">
				<a href="/all">See all episodes →</a>
			</div>
		</main>
	</div>
	<div id="log">
		<pre>{JSON.stringify(episodes, null, 2)}</pre>
	</div>
{:catch error}
	<p>Something went wrong: {error.message}</p>
{/await}

<style>
	[data-unlist] {
		list-style-type: none;
		padding: unset;
	}
	[data-episode-list] > * + * {
		margin-block-start: clamp(2rem, 10vw, 5rem);
	}
</style>
