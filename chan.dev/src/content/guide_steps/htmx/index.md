---
title: HTMX in Astro
---

```astro
---
import Layout from '#layouts/Layout.astro'
import Prose from '#components/prose.astro'
import Button from '#components/button.astro'
import Result from './result.astro'
---

<Layout>
	<Prose as="main">
		<main>
			<Button
				hx-post={`/flip/result`}
				hx-trigger="click"
				hx-swap="innerHTML"
				hx-target="#d"
				class="relative"
			>
				Flip
			</Button>
			<div class="text-9xl font-black font-mono" id="d">
				<Result />
			</div>
		</main>
	</Prose>
	<script
		src="https://unpkg.com/htmx.org@1.9.10"
		integrity="sha384-D1Kt99CQMDuVetoL1lrYwg5t+9QdHe7NLX/SoJYkXDFfX37iInKRy5xLSi8nO7UC"
		crossorigin="anonymous"></script>
</Layout>
```

```astro
---
export const partial = true
export const prerender = false

const params = Astro.params
---

{Math.round(Math.random()) ? 'heads' : 'tails'}
```
