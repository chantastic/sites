# chan.dev

Personal site of Michael Chan (@chantastic). Astro, Cloudflare, markdown content collections.

## Content structure

```
src/content/
  posts/       — 464 posts (essays, tutorials, notes, references, seeds)
  guide_steps/ — step-by-step guides (git, vim, storybook, etc.)
  lessons/     — course content (Epic React, React Holiday, SQL)
  os/          — operating procedures and checklists
  uses/        — gear and services
  entities/    — people and orgs (YAML)
  projects/    — project tracking
  dailies/     — daily notes
  recipes/     — food recipes
```

## Frontmatter conventions

Posts use two date fields with distinct semantics:
- `publishDate` — published to feeds, sitemap, listings
- `date` — tracks when the note was written, NOT in feeds (intentional)

Posts with `publishDate` are public. Posts with only `date` get pages but aren't syndicated.

## When editing or creating posts

- **Always add a `description`** — SEO meta description, 150-155 chars. See `generate-description` skill.
- **Always add `tags`** from existing tags in the collection. Query live vocabulary with `rg -oP '(?<=tags: \[)[^\]]+' src/content/posts/ --glob "*.md" --no-filename | tr ',' '\n' | sed 's/^ *//' | sort | uniq -c | sort -rn`. 1-3 tags per post. Do not invent new tags unless 3+ posts would use it. Do not ask — just apply.
- **Voice** — see `chan-dev-writing` skill for style guide.

## Search

`rg` is the query engine. No index needed. 857 files search in <40ms.

```bash
# Find posts about a topic
rg -l "imposter" src/content/posts/ --glob "*.md"

# Search descriptions (fast metadata scan)
rg "^description:.*imposter" src/content/ --glob "*.md"

# Find posts by tag
rg 'tags:.*career' src/content/posts/ --glob "*.md"

# Find published posts
rg -l "^publishDate:" src/content/posts/ --glob "*.md"
```

## Current context

- `src/content/posts/2026.md` — running weekly log, current priorities and links
- `src/content/os/` — SOPs for publishing, video editing, content distribution

## Key files

- `src/content/posts/_posts.ts` — collection schema, query helpers, and `extractTags()` for deriving vocabulary
- `src/components/header-post-meta.astro` — meta tags (description, OG, Twitter, JSON-LD)
- `src/metadata.json` — site metadata and author links
- `astro.config.mjs` — remark/rehype plugins, site config
