---
title: 'AuthKit Preview Deploys: Step-by-Step Guide'
publishDate: 2024-08-22
---

I love preview deploys for quick collaboration.

But integrating preview deploys with services that require a deploy-specific redirect URI requires extra effort.

This guide integrates AuthKit and [Cloudflare Pages](https://pages.cloudflare.com/) preview deploys.

<div data-responsive-youtube-container>

<iframe width="560" height="315" src="https://www.youtube.com/embed/vXhyOyA__Zs?si=mBgedbswcFFOcDPL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Add your preview deploy URL to WorkOS, using a wildcard

WorkOS only allows redirect to known URIs.

In the WorkOS dashboard, navigate to the **Redirects** page to add a new redirect URI.

For this field, use your preview deploy URL — replacing the build id with an asterisk `*`.

```
https://*.my-CF-site.pages.dev/*
```

Now WorkOS accepts any preview deploy URL as a redirect URI.

![WorkOS Redirects page. Adding a new Redirect URI for a Cloudflaer Pages subdomain, using an asterisk wildcard in place of build id.](./authkit-preview-deploys/authkit-preview-deploys.png)

## Use Cloudflare's `CF_PAGES_URL` environment variable

Cloudflare Pages injects a `CF_PAGES_URL` environment variable into Cloudflare functions.

Use this value to construct a redirect URI for preview deploys.

```ts title="Cloudflare Pages Function in a using Vite"
function getRedirectUri() {
	if (import.meta.env.WORKOS_REDIRECT_URI) {
		return import.meta.env.WORKOS_REDIRECT_URI
	}

	if (import.meta.env.CF_PAGES_URL) {
		return `${import.meta.env.CF_PAGES_URL}/auth/callback`
	}

	throw new Error('WORKOS_REDIRECT_URI or CF_PAGES_URL not set')
}
```

_Note: that I leave `WORKOS_REDIRECT_URI` undefined in for preview deploys. This makes it easy to check against._

## Learn more…

This is part of my series on [AuthKit in Any JS Framework (playlist)](https://youtube.com/playlist?list=PLB4m9iWZsJzh0uSwmw0f5aOqQByvi25_5&feature=shared).  
We cover fullstack authentication with AuthKit, the Astro web framework, and Cloudflare Pages.  
Check out the series here:

<div data-responsive-youtube-container>

<iframe width="560" height="315" src="https://www.youtube.com/embed/237vaK_nYRg?si=gcQb-4uGXUx5occn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

</div>

Prefer step-by-step X threads?

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Secure AuthKit for every preview deploy.<br><br>Whether previewing a `staging` branch, or every commit, integration is easy with AuthKit Redirect Wildcards<br><br>Here&#39;s how… <a href="https://t.co/xAIjS4KC2c">pic.twitter.com/xAIjS4KC2c</a></p>&mdash; AuthKit (@authkit) <a href="https://twitter.com/authkit/status/1827000806249226478?ref_src=twsrc%5Etfw">August 23, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
