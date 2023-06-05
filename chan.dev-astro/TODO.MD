## 2023-06-04

### SHIPIT

- [ ] alternative feeds
  - [ ] Atom
  - [ ] JSON
- [-] Add open graph image
- [-] Add images to posts
- [ ] remaining data types
  - [ ] /reactpodcast
  - [ ] /events
  - [-] /decisions

## SKIPIT

- [ ] add [callout style](https://help.obsidian.md/Editing+and+formatting/Callouts)
- [ ] callout
- [ ] add favicon
- [ ] cleanup names and structures
  - [ ] use the prop name to make files easily searchable
  - [ ] make sure that i'm not over accepting props — `...prop` vs `prop`
- [ ] backfill created, modified, published dates for all posts
- [ ] add `criteria` for things i'm looking for
- [ ] /index (what do i want on this page?)
- [ ] Additions, maybe a "top posts" query that uses usefathom data? to show on my 404 page?
- [ ] Add related posts data type to posts
- [ ] Hide sections by fragment. Use them for todos. Let others find them
- [ ] Add better descriptions to main pages
- [ ] Configure decisions template direction. This will allow me to use a template without screwing up Astro's special collection directories. https://github.com/npryce/adr-tools/blob/master/src/adr-new

# 2023-03-17

[-] add OG images to pages
[ ] add default description
[-] clear up OG type based on content
[ ] sort out article options [https://ogp.me/#type_article]
[ ] og:title - i have some alternate titles that look better in the card.
[ ] remove hard-coded data (like my url, twitter config, etc)
[ ] find way to access shared site data AND custom environment variables

# 2023-04-20

### New

[ ] /instructions

## Individual pages

## Questions

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
- should i call posts entries?

## Decisions

- add `#nerd` fragment to posts to quickly get to git history
- For now, I'm puting statig pages directly in pages
- Without a publish date, posts are still available at the corresponding URL BUT don't show up in the feed
- i decided that plural plural routes for both resources and resource collections is the better user experience (when editing the url manurally or 'guessing')
- all posts are flat right now
  - `dateCreated` pushes it into the feed

## Possible architecture

### Content collections

- posts
- reactpodcast
- _vim_
- _reactholiday_, or
  - _next13_
- esmodules
- os
