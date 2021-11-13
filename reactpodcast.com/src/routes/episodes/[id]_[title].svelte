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
	import { episodeSlug } from '../../modules/paths';
	export let episode: Promise<Episode>;

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

<svelte:head>
	<title>{episode.title} on React Podcast with chantastic</title>
	<link rel="canonical" href="https://reactpodcast.com/episodes/{episodeSlug(episode)}" />
</svelte:head>
<a href="/">Home</a>
{#await episode}
	<p>waiting for the promise to resolve...</p>
{:then episode}
	<main>
		<h1>{episode.title}</h1>
		<p>{episode.description}</p>
		<audio controls>
			<source src={episode.audio_file_url} type={episode.audio_content_type} />
			Your browser does not support the <code>audio</code> element.
		</audio>
		<datetime>{episode.published_at}</datetime>
		<div>{@html episode.long_description}</div>
		<div>{@html episode.transcription}</div>
		<!-- https://svelte.dev/tutorial/html-tags -->
		<div id="log">
			<pre>{JSON.stringify(episode, null, 2)}</pre>
		</div>
	</main>
{:catch error}
	<p>Something went wrong: {error.message}</p>
{/await}
