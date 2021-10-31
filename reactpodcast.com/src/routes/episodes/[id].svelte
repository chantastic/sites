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
