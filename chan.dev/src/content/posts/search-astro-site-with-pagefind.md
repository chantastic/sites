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

