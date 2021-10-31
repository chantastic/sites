<script context="module">
	// export const prerender = true;

	export async function load({ page, fetch }) {
		const PODCAST_ID = 'bdb43d4d-bd1d-4fbc-bd60-40f1e3299aa3';
		const url = `https://api.simplecast.com/podcasts/${PODCAST_ID}/episodes?limit=1000&offset=0`;
		const res = await fetch(url, {
			method: 'GET',
			headers: {
				authorization: `Bearer ${import.meta.env.VITE_SIMPLECAST_TOKEN}`
			}
		});

		if (res.ok) {
			let episodes = await res.json();
			let episode = episodes?.collection?.find((episode) => episode.slug === page.params.slug);

			if (!episode) {
				return;
			}
			return {
				redirect: `/episodes/${episode.title.replace(/[^a-zA-Z0-9]/g, '-')}_${episode.id}`,
				status: 302
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>
