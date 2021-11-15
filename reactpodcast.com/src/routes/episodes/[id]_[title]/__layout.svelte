<script context="module">
	import * as datefn from 'date-fns';

	export const prerender = true;

	export async function load({ page, fetch }) {
		const url = `https://api.simplecast.com/episodes/${page.params.id}`;
		const res = await fetch(url, {
			method: 'GET',
			headers: {
				authorization: `Bearer ${import.meta.env.VITE_SIMPLECAST_TOKEN}`
			}
		});

		if (res.ok) {
			let episode = await res.json();

			return {
				props: {
					episode
				},
				maxage:
					datefn.differenceInDays(new Date(Date.now()), new Date(episode.published_at)) >= 7
						? 3600
						: 0
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
	import { setContext } from 'svelte';

	export let episode: Promise<Episode>;

	setContext('episode', episode);

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
</script>

<a href="/">Home</a>
{#await episode}
	<p>waiting for the promise to resolve...</p>
{:then episode}
	<main>
		<div data-window-content>
			<div class="border-t-2 border-gray-100 pt-8">
				<div>
					<p class="text-sm leading-5 text-gray-500">
						<time datetime={episode.published_at}>
							{datefn.format(new Date(episode.published_at), 'MMM d, yyyy')}
						</time>
					</p>
					<div>
						<h1 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
							<a href="episodes/{episodeSlug(episode)}">{episode.title}</a>
						</h1>
						<noscript class="my-8">
							<audio src={episode.audio_file_url} class="w-full" controls>
								Your browser does not support the <code>audio</code> element.
							</audio>
						</noscript>
						<iframe
							title="Media player for episode {episode.title}"
							class="my-4"
							height="200px"
							width="100%"
							frameborder="no"
							scrolling="no"
							seamless
							src="https://player.simplecast.com/{episode.id}?dark=true"
						/>

						<p class="mt-3 text-base leading-6 text-gray-600">
							{episode.description}
						</p>

						<a href="/episodes/{episodeSlug(episode)}">Notes</a>
						<a href="/episodes/{episodeSlug(episode)}/transcript">Transcript</a>
						<slot {episode} />
					</div>
				</div>
			</div>
		</div>

		<div id="log">
			<pre>{JSON.stringify(episode, null, 2)}</pre>
		</div>
	</main>
{:catch error}
	<p>Something went wrong: {error.message}</p>
{/await}
