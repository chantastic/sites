---
title: Search Astro Site with Pagefind
date: 2023-12-19
references:
  - https://pagefind.app/
  - https://trost.codes/posts/adding-simple-search-to-an-astro-blog/
  - https://blog.otterlord.dev/posts/astro-search/
  - https://chan.dev/fix-prebuild-and-postbuild-scripts-in-pnpm
---

## Install Pagefind

```zsh
pnpm install pagefind
```

## Run on local build

```zsh
pnpm build && pnpm exec pagefind --site dist
```

## Add `postbuild` script to build search records

```json
{
	"scripts": {
		"postbuild": "pagefind --site dist"
	}
}
```

## Add /search route

_Note: I can't currently run this locally because I'm using hybrid rendering. `preview` is not supported, meaning I can't locally serve a `postbuild` preview._

```astro
<html>
	<link href="/pagefind/pagefind-ui.css" rel="stylesheet" />
	<script src="/pagefind/pagefind-ui.js" is:inline></script>

	<main>
		<h1>Search</h1>
		<div id="search"></div>
	</main>

	<script is:inline>
		window.addEventListener('DOMContentLoaded', (event) => {
			new PagefindUI({element: '#search', showSubResults: true})
		})
	</script>

</html>
```
