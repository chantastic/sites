<script context="module">
	import * as datefn from 'date-fns';

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
	import { episodeSlug } from '../modules/paths';

	export let episodes: Promise<EpisodeCollection>;
</script>

<svelte:head>
	<title>React Podcast with chantastic</title>
</svelte:head>
{#await episodes}
	<p>waiting for the promise to resolve...</p>
{:then episodes}
	<header>React Podcast</header>
	<div data-window-content>
		<main>
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
						<!-- <li>
							<a href="episodes/{episodeSlug(episode)}" data-episode-item>
							</a>
						</li> -->
					{/if}
				{/each}
			</ul>
		</main>
	</div>
	<div id="log">
		<pre>{JSON.stringify(episodes, null, 2)}</pre>
	</div>
{:catch error}
	<p>Something went wrong: {error.message}</p>
{/await}

<style>
	[data-window-content] {
		--window-content--max-width: 80ch;
		--window-content--padding-inline: clamp(
			1rem,
			calc((100vw - var(--window-content--max-width)) / 2),
			100vw
		);
		padding-inline-start: var(--window-content--padding-inline);
		padding-inline-end: var(--window-content--padding-inline);
	}
	[data-unlist] {
		list-style-type: none;
		padding: unset;
	}
	[data-episode-list] * + * {
		padding-top: clamp(2rem, 10vw, 5rem);
	}
</style>
