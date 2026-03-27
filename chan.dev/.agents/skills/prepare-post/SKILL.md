---
name: prepare-post
description: "Prepare a chan.dev post for publication or metadata enrichment. For a single post, harden the draft, generate description and tags, validate frontmatter, and optionally set publishDate. For batches, do metadata-only work: generate or audit descriptions and tags across many posts."
---

# Prepare Post

Prepare chan.dev posts for publication.

This skill has **two operating contexts**, not multiple modes:

1. **Single post** — full editorial workflow
2. **Batch** — metadata-only workflow

The skill should infer which context to use from the input:
- **one post path** → single-post workflow
- **many post paths or a filter request** → batch workflow

## When to use

- A post has `date` but no `publishDate` and is ready to go live
- A new post needs metadata before publishing
- A seed post has grown into something publishable
- Many posts need descriptions, tags, or metadata cleanup
- You want to audit existing descriptions and tags for quality

## Inputs

1. **Either:**
   - one post file in `src/content/posts/`
   - multiple post files in `src/content/posts/`
   - a natural-language filter like: `posts missing descriptions`, `all unpublished posts`, `all posts tagged react without descriptions`

## Site conventions

Posts live in `src/content/posts/`.

Two date fields have distinct semantics:
- `publishDate` — published to feeds, sitemap, listings
- `date` — tracks when the note was written, not syndicated

When promoting a `date`-only post, keep both fields.

### Frontmatter template

```yaml
---
title: Post Title
date: 2026-03-27        # when written (keep if exists)
publishDate: 2026-03-27 # when published
description: "150 chars max. Extracted from the post, not about the post."
tags: [topic, subtopic]
references:
  - https://example.com
cover: ./post-slug/image.png
coverAlt: Alt text
---
```

## Execution profile

### Single post

Use the full editorial workflow:
- assess readiness
- interview to harden if appropriate
- generate description
- apply tags
- validate frontmatter
- ask before setting `publishDate`

### Batch

Use the metadata-only workflow:
- do not interview
- do not rewrite content
- generate or audit descriptions
- apply or normalize tags
- summarize uncertain cases in a review table
- never set `publishDate` unless explicitly asked

## Process

### Step 1: Read and assess

Read the full post or posts.

For a **single post**, determine:
- **Readiness**: seed (< 5 sentences), draft (incomplete), or publication-ready?
- **Voice**: does it sound like Chan? (Reference `chan-dev-writing` if uncertain.)
- **Metadata state**: what exists, what is missing, what looks wrong?

If the post is a seed or clearly incomplete, say so and ask whether to proceed.

For a **batch**, identify only:
- which files match the request
- which files are substantial enough to deserve descriptions/tags
- which files are found notes or empty stubs and should be skipped

### Step 2: Interview to harden (single post only)

Only do this for a single post.

Ask 3-5 questions using the questionnaire tool.

**For personal essays:**
- What's the one thing you want someone to walk away with?
- Is there a story or moment that's missing?
- Does the ending land?

**For technical posts:**
- What search query should land someone here?
- Is there a step or concept you haven't addressed?
- Would you link to this from another post? Which one?

**For promoted seeds:**
- What made you come back to this?
- Is this its own post or a section of something bigger?
- What's the minimum version worth publishing?

If the interview reveals content changes, propose them.
Do not rewrite without approval.
Reference `make-it-personal` if the draft needs deeper personal work.

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
3. Include specific terms: API names, tool names, exact problem
4. Close with what the reader gets

Pattern: `[Topic/problem]. [What the post covers]. [What the reader gets].`

**For shareable posts:**
1. Find the most compelling line from the post itself
2. Pull it verbatim or near-verbatim
3. Do not genericize
4. Do not add moral framing the author didn't write

Pattern: Pull the hook. Use the author's words.

#### Validate

- **Length:** ~150-155 characters for Google snippets. Shorter is fine.
- **Accuracy:** Must match what the post actually says.
- **Self-contained:** Should make sense without the title.

#### Anti-patterns

Reject descriptions that:
- open with imperative verbs like `Discover`, `Explore`, `Learn`, `Master`, `Unlock`, `Embrace`, `Dive into`
- moralize generic lessons the author didn't write
- replace a specific story with a universal platitude
- inflate the importance of a straightforward setup or note
- add framing the author already stated more directly in the post

The test:

**Could this description have been written by someone who only read the title?**

If yes, it's bad.

#### Review boundary

- For a **single post being prepared for publication**, present the description for operator review.
- For a **batch**, apply descriptions directly to substantial posts. Surface uncertain cases in the summary table instead of asking one-by-one.

### Step 4: Apply tags

Query the live vocabulary from the site's Astro-backed tags endpoint.

Canonical source:
- `/api/tags.json`

This endpoint is backed by Astro content collections and already sees both supported frontmatter styles. Do **not** regex-parse frontmatter for vocabulary discovery unless the endpoint is unavailable.

Use:
- `all.tags` for the complete normalized vocabulary with counts
- `published.tags` when you want the public vocabulary only
- `unpublished.tags` when comparing unpublished drafts against private/internal tag usage
- `entries` payloads when you need examples of how a tag is actually used in the corpus

Selection guidance:
- prefer tags with multiple existing examples over one-off curiosities
- inspect representative entries before applying sparse tags like `seed`, `from:pi`, or niche topic labels
- treat counts as guidance, not law; choose for fit, not popularity

Fallback behavior if the endpoint cannot be queried:
- use Astro collection-backed project helpers if available
- otherwise stop and report that canonical tag vocabulary could not be loaded
- do not fall back to brittle regex scraping as the default path

Rules:
1. Apply 1-3 tags from the existing vocabulary
2. Prefer specific over general (`react` over `web`)
3. Use `life` as the base tag for personal essays; add a second for the angle (`family`, `career`, `faith`)
4. Content-type tags (`reference`, `tutorial`, `seed`) go alongside topic tags
5. Do not invent new tags unless 3+ posts would use them
6. Normalize tags to the site's current standard when editing (`lowercase`, bracket format preferred when touching frontmatter)

Tags are low-risk and reversible. Apply without asking.

### Step 5: Validate frontmatter

Check for:

```
✓ title
✓ description
✓ tags
○ publishDate (single-post publication flow only)
○ cover / coverAlt
○ references
```

Also flag:
- quoted or inconsistent tag formatting
- empty `description` strings
- multiline `description` accidents
- cited links in the body that are missing from `references` when that field is already in use for similar posts

### Step 6: Set publishDate (single post only, explicit)

Only set `publishDate` when explicitly requested or when working interactively on a single post and the operator confirms publication.

Ask:
- publish now?
- or schedule for a specific date?

For batches, **never set `publishDate` unless explicitly requested**.

### Step 7: Summary

For a **single post**, present:
- content changes proposed or made
- description added/updated
- tags applied
- `publishDate` set or deferred
- warnings (missing cover, uncited references, etc.)

For a **batch**, present a table:
- file
- action taken (`description added`, `description rewritten`, `tags added`, `tags normalized`, `skipped`)
- why skipped (found note, empty stub, uncertain)
- any cases needing human review

## Audit behavior

When the request is clearly audit-oriented, read existing metadata and flag:

### Description issues
- content mismatch
- AI-isms (`Discover`, `Explore`, `Embrace`, `Unlock`)
- generic self-help language
- too long (>160 chars)
- empty or broken values
- typos

### Tag issues
- missing tags on substantial posts
- singleton tags that should be consolidated
- quoted, capitalized, or inconsistent formatting
- tags that are too vague compared to the site's current vocabulary

## Decision boundaries

| Decision | Who | Why |
|----------|-----|-----|
| Content changes | Operator | Taste-sensitive |
| Description on a single post headed to publication | Operator reviews | Publication-sensitive |
| Description in batch enrichment | Agent | Low-risk on unpublished or maintenance work |
| Tags | Agent | Low-risk, reversible |
| `publishDate` | Operator | Publication decision |

## Composition

**References:**
- `chan-dev-writing` — voice reference
- `make-it-personal` — use when the interview reveals the post needs deeper personal work

**Typical calls:**
- `prepare-post for src/content/posts/sticky.md`
- `prepare-post for all unpublished posts missing descriptions`
- `prepare-post for posts tagged react without tags`
- `prepare-post for all posts with AI-ish descriptions`
- `prepare-post for uncommitted posts`
