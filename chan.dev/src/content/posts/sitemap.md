---
title: Sitemap
description: "Generate sitemaps for optimal website indexing. Learn techniques to aid search engines in discovering and indexing your public (and hidden) pages."
publishDate: 2023-06-15
---

I use a sitemap to index pages of this site that aren't linked from the home page.

A sitemap is an XML list of pages I'd like indexed (even if they can't be crawled from other pgaes).
You can [find my sitemap here](https://chan.dev/sitemap-0.xml).

Search engines know to look for `sitemap.xml` or `sitemap-index.xml` (a list of sitemaps) at the root of a site.

If you want to be explicit, you can tell Google where to find yours by uploading it to [Search Console](https://search.google.com/search-console/sitemaps).

I used [`@astrojs/sitemap`](https://docs.astro.build/en/guides/integrations-guide/sitemap/) to generate mine but it's a pretty simple XML document structure if you want to generate your own.
It looks like this:

```
<!-- chan.dev/feeds/sitemap-0.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>https://chan.dev/</loc>
  </url>
  <url>
    <loc>https://chan.dev/sitemap/</loc>
  </url>
</urlset>
```

Sitemaps are nice to have but not critical.
The work great if you have content you'd like indexed even if not directly linked on your home page.
