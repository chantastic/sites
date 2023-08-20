## 2023-08-17
- Add monthly wellness to ramp
- Call about Cox bill increase
- Why did panoramic wifi gateway price increase? 001 3410 083023806
- Register Flex Angle Grinder
- Write Script for work
- Fix ahrefs errors for chan.dev
- do stuff to fix my personal computer setup
- Pull Podia email list
- Close capital one account?
- write [ikigai](https://en.wikipedia.org/wiki/Ikigai)
- write [blueshelled]
- write [push, pull, poll, promise] (useEffect)
- write a doc on my criteria for taking on workshops
- pay credit card
- fix calendar
- extract a Prose component

- What are we fucking doing about posts?
  - I really need to figure out sanitization and images across cross-post and RSS
## 2023-08-09

PUBLISH NOTES:

- links can't include code blocks
- hackernoon doesn't like greater than 2:1 image crop (it's adding extra frame, cover image)
- description isn't showing up in metadata
- add copy/paste to each section
- medium, drag to top to make it cover image
- hackernoon doesn't support diffs

Share page

- get images back
- Discrete (tabs)
  - images only
  - prose only
  - code only
  - script only
  - metadata only

## 2023-08-08

- JSON-LD. There are so many tasks around the site to add this.
  - main web page
  - link entities
  - /uses as `#Thing`
  - implement images for posts
- `card.json` idea. but how does CORS work on static sites. try it?
- ***

TODO:

Notes: - can sub `astro` for `javascript` (or `js`) - easy CTA's
for - personal site - social media - YouTube - links -
prioritize home office

- make a markdown component
- add pre-hand-off section
- add shoutout metadata (it'd be nice if these were referenced as objects)
- truble shooting
  - generate TL;DR and description from chatgpt

## 2023-07-25 TODO

- [ ] what features need to be added
- [ ] what publishing guidelines need to be clarified
- [ ] what additional content needs to be generated (thumbnails and such)
- [ ] what metadata should be required (description, etc)
- [ ] what to publish where

### Features

- develop link style
- add copy links
- globalize images in markdown output
- translate youtube embed for dev.to tag
- dev.to allows copy/paste
- add description
- (M: check how posts unfurl)

why can't we have HTML? #invisible-tech-things

- posting shorts
  - twitter: accepts SRT
  - no videos on blsky
  - hachyderm accepts plain text only

## Things I'd like to flesh out next time we post:

- what tags have large audiences on each network?
- are there any parts of the publish process that are still difficult or failing

## 2023-07-21

- add `Copy as rich text` button
- add `Copy as plain text` button
- add `Copy as markdown` button
- add social content to post frontmatter
  - post body
  - post image
    - alt
  - post link
- add ability to grab image alt somehow?
- add copy buttons to all metadata?
- fix all bad callouts
  - copy as png?

## 2023-07-20

- collect tags from code snippets? (i could parse the markdown source)
- replace bad links to newsletter
- add tags to each post
- add tag count to tag pages

## 2023-07-12

- add features
  - add social callouts and newsletter callouts
    - do these in-content so they can be easily tailored AND copied into cross-posts
- unify all publishing profiles
- Write post on "ghost astro files" ones with no template but just styles and scripts
  - example 'main-hidden-social.astro'
- Unify "hidden" layout styles
- Custom OG for lessons
- Codify `#social` data into `lesson` schema
- Create view for lessons without corresponding videos
- Use JavaSript to augment fragment-hidden content
  - This is probably best encapsulated in in an astro component for each
  - e.g., `#social` should present the alt-tag that's currently in the social image. though, this could also be solved with the OG schema, mentioned above.
- Add prettier styling
  - I think prettier makes more sense VS Code workspace only because I can selectively ignore wierd markdown stuff. And that can move aronud with me.
- app: file system ascii generator. inspiration: https://ascii-tree-generator.com/
- add some type of CTA at the end of every post. likely segmented newsletter signup

## 2023-06-04

### QoL

- detail directive
- [automate posting to dev.to](https://developers.forem.com/api/v1)
- check links that aren't properly redirecting (`mode` and `play` seem to be offenders)
- rework layout
  - implement breadcrumbs better
  - possibly with slots
  - now that `prose` application is split from `main`, it may make sense to take `class` as a Layout prop

### SHIPIT

- [ ] Can I make my current content-collection process more automated or do types dictate that I do it by hand?
- [ ] Add links to home and page structures

  - [ ] post template

- [-] remaining data types
  - [-] /reactpodcast
  - [-] /events
- [ ] reduce filter duplication
- [ ] get `dateCreated`, `dateModified`, and `datePublished` for all posts
- [ ] move `publishDate` to `datePublished` for blog schema consistency

## SKIPIT

- [ ] make a courses json collection and link with lessons
- [ ] rename `header-post-meta` now that it's no longer just `Post`s
- [ ] Tighten up ADRs
  - [ ] Customize template directory
  - [ ] Add new decisions
- [ ] add full url helper
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

## Decisions.txt from events/novimber/2022

```
# Project decisions

## url
- `event/2022/novimber`
- short url `/novimber`

## plural or not
I had naturally decided to use `event/` (singular) but but looks like i have `/talks` (plural) already.
I'm gonna go with singular but it kinda sucks.

## Dynamic of static
I'm feeling the tension to "set this up write."
Right now that means something like having a big bucket of `vim`-marked cnotent that I then collect into this event.
However, that's assuming a lot of things.
So I'm going to start with a very 1:1 file:page setup.
This will mean that I have to create relationships between next/prev content manually.
But that's fine, given how predictable the urls will be.

## Content

I'm going to split lowercase and uppercase visually so that I can split lessons where uppercase and lowercase versions of keys do something completely different.
```
