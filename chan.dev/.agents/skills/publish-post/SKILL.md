---
name: publish-post
description: Prepare a chan.dev post for publication. Interview the author to harden the draft, generate description and tags, set publishDate, and validate frontmatter. Use when a draft is ready to go live.
---

# Publish Post

Prepare a draft post for publication on chan.dev.

## When to use

- A post has `date` but no `publishDate` and is ready to go live
- A new post was just written and needs metadata before publishing
- A seed post has grown into something publishable

## Inputs

1. **A post file** — path to a markdown file in `src/content/posts/`

## Site conventions

Posts live in `src/content/posts/`. Two date fields with distinct semantics:
- `publishDate` — published to feeds, sitemap, listings
- `date` — tracks when the note was written, NOT syndicated (intentional)

When promoting a `date`-only post, keep both fields. They serve different purposes.

### Tag discovery

Query the live vocabulary from existing posts:

```bash
rg -oP '(?<=tags: \[)[^\]]+' src/content/posts/ --glob "*.md" --no-filename | tr ',' '\n' | sed 's/^ *//' | sort | uniq -c | sort -rn
```

Tags use bracket format: `tags: [life, family, faith]`

### Frontmatter template

```yaml
---
title: Post Title
date: 2026-03-27        # when written (keep if exists)
publishDate: 2026-03-27 # when published (set during this skill)
description: "150 chars max. Extracted from the post, not about the post."
tags: [topic, subtopic]
references:              # optional — external URLs cited in the post
  - https://example.com
cover: ./post-slug/image.png  # optional
coverAlt: Alt text             # required if cover exists
---
```

## Process

### Step 1: Read and assess

Read the full post. Determine:
- **Readiness**: seed (< 5 sentences), draft (incomplete), or publication-ready?
- **Voice**: does it sound like Chan? (Reference `chan-dev-writing` skill if uncertain.)
- **Existing metadata**: what's present, what's missing?

If the post is a seed or clearly incomplete, say so and ask whether to proceed or defer.

### Step 2: Interview to harden (operator step)

Surface what the post is really about and whether it says it clearly enough. Ask 3-5 questions using the questionnaire tool.

**For personal essays:**
- What's the one thing you want someone to walk away with?
- Is there a story or moment that's missing?
- Does the ending land?

**For technical posts:**
- What search query should land someone here?
- Is there a step or concept you haven't addressed?
- Would you link to this from another post? Which one?

**For seed posts being promoted:**
- What made you come back to this?
- Is this its own post or a section of something bigger?
- What's the minimum version worth publishing?

If the interview reveals changes, propose them. Do not rewrite without approval. Reference `make-it-personal` skill if the post needs deeper personal work.

### Step 3: Generate description

Use the `generate-content-description` skill technique:
1. Classify as searchable or shareable
2. Extract description from the post (not about the post)
3. Validate: 150-155 chars, accurate, self-contained

Present the description for operator review. This is publication-sensitive.

### Step 4: Apply tags

Query the live vocabulary (command above). Apply 1-3 tags following `generate-content-description` tagging rules. Tags are low-risk — apply without asking.

### Step 5: Validate frontmatter

```
✓ title
✓ publishDate
✓ description (from step 3)
✓ tags (from step 4)
○ cover / coverAlt (note if missing)
○ references (note if post cites external sources without listing them)
○ og (only if custom OG title/image needed)
```

### Step 6: Set publishDate (operator step)

Ask: **publish now or schedule?**
- Now: set `publishDate` to today
- Scheduled: set to specified date

### Step 7: Summary

Present all changes:
- Content changes (if any)
- Description added/updated
- Tags applied
- publishDate set
- Warnings (missing cover, uncited references, etc.)

## Decision boundaries

| Decision | Who | Why |
|----------|-----|-----|
| Content changes | Operator | Taste-sensitive (P1) |
| Description | Operator reviews | Publication-sensitive (P3) |
| Tags | Agent | Low-risk, reversible (P3) |
| publishDate | Operator | Publication decision (P1) |
| Frontmatter validation | Agent | Mechanical check |

## Composition

**Calls (generic skills):**
- `generate-content-description` — description extraction and tagging technique
- `chan-dev-writing` — voice reference during interview
- `make-it-personal` — optionally, if interview reveals the post needs deeper work

**Called by:**
- Operator directly: `publish-post for src/content/posts/sticky.md`
- `shutdown-ritual` when promoting seeds
- `video-publish` when generating companion blog posts
