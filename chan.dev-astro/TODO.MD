## todo

- [-] update anything with a relative path to `@`-prefixed path
- [x] fix line highlighting
- [ ] add [callout style](https://help.obsidian.md/Editing+and+formatting/Callouts)
- [ ] add lunchdev cta
- [x] figure out why `post.url` getter isn't working (i think because i'm using content collections and not the filesystem)

---

- [ ] add alternate feeds
  - [ ] Atom
  - [ ] JSON
- [ ] add sitemap (plugin doesn't work with 2.0)
- [ ] add favicon
- [ ] Use rest params to

# 2023-03-17

[ ] add OG images to pages
[ ] add default description
[ ] clear up OG type based on content
[ ] sort out article options [https://ogp.me/#type_article]
[ ] og:title - i have some alternate titles that look better in the card.
[ ] feed (atom/json)
[ ] lunch-dev-cta
[ ] remove hard-coded data (like my url, twitter config, etc)
[ ] find way to access shared site data AND custom environment variables

- Default environment variables (includes `SITE` and `BASE_URL`) https://docs.astro.build/en/guides/environment-variables/#default-environment-variables
- Setting environment variables https://docs.astro.build/en/guides/environment-variables/#setting-environment-variables

# 2023-04-20

## Data

### Existing

[-] /tags/_
[-] /mode/_
[-] /meta/_
[-] /food/_
[-] /coding/_
[ ] /event/_
[ ] /feed/_
[ ] /os/_
[ ] /notes/_
[ ] /decisions/_
[ ] /reactpodcast/_
[-] /posts/_
[-] /play/_

### New

[ ] images
[ ] /criteria/_
[ ] /overlays/_

## Individual pages

[ ] /food (how to i make this scale? tags?)
[ ] /index (what do i want on this page?)
[ ] /modes (how do i make this scale? tags?)
[ ] /sitemap.xml

[ ] Additions, maybe a "top posts" query that uses usefathom data? to show on my 404 page?
[ ] Hide sections by fragment. Use them for todos. Let others find them
[ ] Set up icons

## Double check

## Questions

- Where should I put the static pages long-term? (e.g., /davinci-resolve)
- Can I get `prose` styles for definition lists? (e.g., /davinci-reslove)
  - https://twitter.com/chantastic/status/1664660347490570240?s=20
- What's the best way to integrate with [blog schema](https://schema.org/Blog)? Update dates vs publish dates?
  - `dateCreated`
  - `dateModified`
  - `datePublished`
  - if it's ever been modified, show history
- Should now be a page or some type of object?
- Could I statically analize the commits for files that change regularly (/now, /resume, etc.) and point to previous versions on GH?
  - Easier may be a `#nerds` fragment that shows links. I can easily link out to history on GH using a url schema: `https://github.com/chantastic/{repo}/commits/main/{path-to}/{file}`
- Resume from LinkedIn data?
- Should I make a drafts page?

## Decisions

- add `#nerd` fragment to posts to quickly get to git history
- For now, I'm puting statig pages directly in pages
- Without a publish date, posts are still available at the corresponding URL BUT don't show up in the feed
