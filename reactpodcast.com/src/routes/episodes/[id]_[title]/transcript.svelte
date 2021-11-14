<script>
	import { getContext } from 'svelte';
	let episode = getContext('episode');
</script>

<section id="transcript" data-transcript>
	<div class="mt-4 prose">
		<h2>Transcript</h2>
		{@html episode.transcription || 'No Transcript available for this episode'}
	</div>
</section>
