<script context="module">
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
			return {
				props: {
					episode: await res.json()
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
	};
</script>

<svelte:head>
	<title>{episode.title} on React Podcast with chantastic</title>
	<link
		rel="canonical"
		href="https://reactpodcast.com/episodes/{episode.title.replace(
			/[^a-zA-Z0-9]/g,
			'-'
		)}_{episode.id}"
	/>
</svelte:head>
<a href="/">Home</a>
{#await episode}
	<p>waiting for the promise to resolve...</p>
{:then episode}
	<main>
		<h1>{episode.title}</h1>
		<p>{episode.description}</p>
		<datetime>{episode.published_at}</datetime>
	</main>
{:catch error}
	<p>Something went wrong: {error.message}</p>
{/await}
