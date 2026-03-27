---
name: prepare-post
description: Prepare a chan.dev post for publication. Interview the author to harden the draft, generate description and tags, set publishDate, and validate frontmatter. Use when a draft is ready to go live, or when enriching metadata on existing posts.
---

# Prepare Post

Prepare a post for publication on chan.dev. Handles the full editorial pass: harden the draft, write the description, apply tags, validate frontmatter, and set publishDate.

## When to use

- A post has `date` but no `publishDate` and is ready to go live
- A new post needs metadata before publishing
- A seed post has grown into something publishable
- Batch enrichment: adding descriptions/tags to posts that lack them

## Inputs

1. **One or more post files** — paths to markdown files in `src/content/posts/`
2. **Mode:**
   - `publish` (full workflow: interview → description → tags → publishDate)
   - `enrich` (description + tags only, no interview, no publishDate change)
   - `audit` (evaluate existing descriptions and tags, flag problems)

## Site conventions

Posts live in `src/content/posts/`. Two date fields with distinct semantics:
- `publishDate` — published to feeds, sitemap, listings
- `date` — tracks when the note was written, NOT syndicated (intentional)

When promoting a `date`-only post, keep both fields.

### Frontmatter template

```yaml
---
title: Post Title
date: 2026-03-27        # when written (keep if exists)
publishDate: 2026-03-27 # when published
description: "150 chars max. Extracted from the post, not about the post."
tags: [topic, subtopic]
references:              # optional — external URLs cited
  - https://example.com
cover: ./post-slug/image.png  # optional
coverAlt: Alt text             # required if cover exists
---
```

---

## Process

### Step 1: Read and assess

Read the full post. Determine:
- **Readiness**: seed (< 5 sentences), draft (incomplete), or publication-ready?
- **Voice**: does it sound like Chan? (Reference `chan-dev-writing` skill if uncertain.)
- **Existing metadata**: what's present, what's missing?

If mode is `enrich` or `audit`, skip to Step 3.
If the post is a seed or clearly incomplete, say so and ask whether to proceed or defer.

### Step 2: Interview to harden (publish mode only)

Surface what the post is really about. Ask 3-5 questions using the questionnaire tool.

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

#### Classify search intent

**Searchable** — Someone would Google a problem and this post answers it.
- Signal: code blocks, step-by-step structure, tool/API names, "how to" framing

**Shareable** — Someone encounters this through a link or social share.
- Signal: first-person narrative, no code, aphoristic title, confessional tone

#### Extract the description

**For searchable posts:**
1. Identify the primary search query
2. Lead with the topic keyword or problem statement
3. Include specific terms: API names, tool names, the exact problem
4. Close with what the reader gets

Pattern: `[Topic/problem]. [What the post covers]. [What the reader gets].`

**For shareable posts:**
1. Find the most compelling line from the post itself
2. Pull it verbatim or near-verbatim
3. Do not genericize. Do not add moral framing the author didn't write.

Pattern: Pull the hook. Use the author's words.

#### Validate

- **Length:** 150-155 characters for Google snippets. Shorter is fine.
- **Accuracy:** Must match what the post actually says.
- **Self-contained:** Should make sense without the title.

#### Anti-patterns

Reject descriptions that:
- **Open with imperative verbs**: "Discover", "Explore", "Learn", "Master", "Unlock", "Embrace", "Dive into"
- **Moralize**: "turning pain into valuable lessons"
- **Genericize**: replacing a specific story with a universal platitude
- **Inflate**: "Unlock the power of..." when the post just shows a setup
- **Add framing the author didn't write**: "Can making the bed be an act of defiance?" when the author states it directly

The test: **could this description have been written by someone who only read the title?** If yes, it's bad.

In `publish` mode, present description for operator review (publication-sensitive).
In `enrich` mode, apply directly for substantial posts. Present for review only when uncertain.

### Step 4: Apply tags

Query the live vocabulary:

```bash
rg -oP '(?<=tags: \[)[^\]]+' src/content/posts/ --glob "*.md" --no-filename | tr ',' '\n' | sed 's/^ *//' | sort | uniq -c | sort -rn
```

Rules:
1. Apply 1-3 tags from the existing vocabulary
2. Prefer specific over general (`react` over `web`)
3. `life` as base for personal essays; add a second for the angle (`family`, `career`, `faith`)
4. Content-type tags (`reference`, `tutorial`, `seed`) go alongside topic tags
5. Do not invent new tags unless 3+ posts would use it
6. Tags use bracket format: `tags: [life, family]`

Tags are low-risk and reversible. Apply without asking.

### Step 5: Validate frontmatter

```
✓ title
✓ description (from step 3)
✓ tags (from step 4)
○ publishDate (set in step 6 if publish mode)
○ cover / coverAlt (note if missing)
○ references (note if post cites sources without listing them)
```

### Step 6: Set publishDate (publish mode only)

Ask: **publish now or schedule?**
- Now: set `publishDate` to today
- Scheduled: set to specified date

### Step 7: Summary

Present all changes:
- Content changes (if any)
- Description added/updated
- Tags applied
- publishDate set (if publish mode)
- Warnings (missing cover, uncited references, etc.)

### Step 8: Audit existing (audit mode)

Read existing `description` against post content. Flag:
1. **Content mismatch** — describes a different topic
2. **AI-isms** — Discover, Explore, Embrace, Unlock openers
3. **Generic self-help** — could describe any post
4. **Too long** — over 160 characters
5. **Empty or broken** — empty string, multiline YAML accident
6. **Typos**

For tags, flag:
- Missing tags on substantial posts
- Singleton tags that should be consolidated
- Quoted or capitalized tags that need normalizing

---

## Decision boundaries

| Decision | Who | Why |
|----------|-----|-----|
| Content changes | Operator | Taste-sensitive |
| Description (publish) | Operator reviews | Publication-sensitive |
| Description (enrich) | Agent for substantial posts | Low-risk on unpublished |
| Tags | Agent | Low-risk, reversible |
| publishDate | Operator | Publication decision |

## Composition

**References:**
- `chan-dev-writing` — voice reference
- `make-it-personal` — when interview reveals deeper work needed

**Called by:**
- Operator: `prepare-post for src/content/posts/sticky.md`
- Operator: `prepare-post --mode enrich for posts missing descriptions`
- `shutdown-ritual` when promoting seeds
- `video-publish` when generating companion posts
