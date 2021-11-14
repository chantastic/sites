<script>
	import { getContext } from 'svelte';
	let episode = getContext('episode');
</script>

<section>
    <div class="mt-4 prose">
        <h2>Notes</h2>
		{@html episode.long_description}
	</div>
</section>
