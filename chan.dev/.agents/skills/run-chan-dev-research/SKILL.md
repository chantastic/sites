---
name: run-chan-dev-research
description: Coordinate raw analysis and publish a normalized research entry into chan.dev's `src/content/research/`. Use when research should become a durable chan.dev report.
role: coordinator
---

# Run Chan.dev Research

This is a coordinator skill. It owns chan.dev's research conventions:

- filename
- frontmatter
- priority list
- section order
- final output path in `src/content/research/`
- final voice calibration for chan.dev

It may coordinate with global transformation skills for the raw research when those skills exist. Example: use `analyze-youtube-channel` to do the YouTube-specific analysis, then map the findings into chan.dev's local research format.

## Inputs

- subject
- source or platform
- report kind
- snapshot date
- business context or goals
- optional source file paths containing existing research or draft findings

Examples:

- subject: `chantastic`
- source: `youtube`
- report kind: `audit`
- snapshot date: `2026-03-09`
- source file paths: `/absolute/path/to/notes.md`

## Local Contract

Before writing, read:

- `src/content/research/_research.ts`
- `src/content/research/_new_template.md`

Also inspect one or two existing reports in `src/content/research/` when you need a concrete example of tone or structure.

## Voice References

Before drafting final prose, consult reference skills that capture Chan's general writing tone when they are available.

Default reference:

- `~/.agents/skills/consult-chan-writing-style/SKILL.md`

Optional deeper reference:

- `~/.agents/skills/consult-chan-writing-style/REFERENCE.md`

Use these as an editing lens, not as a license to make the report ornamental. Research should stay:

- evidence-first
- concise
- direct
- conversational without turning poetic

Do not force found-note roughness, essay cadence, or confessional framing onto a report that should remain analytical.

## Coordination Model

Prefer a matching global `analyze-*` transformation skill when one exists.

Examples:

- `analyze-youtube-channel` for YouTube channel audits or repackaging analysis

The transformation skill owns:

- source-specific data gathering
- source-specific heuristics
- raw findings
- missing-data notes
- candidate priorities

This local coordinator owns:

- chan.dev filename pattern
- normalized `research` frontmatter
- ranking and phrasing of the priority list
- final body structure
- tone calibration against Chan's writing references
- writing the durable markdown file

If no matching global skill exists, do the raw research directly and continue with the same local output contract.

Do not depend on another skill's private files, caches, or manifests. Use only the explicit findings it produces.

If the operator provides explicit source file paths, treat those files as the raw research input and skip the matching `analyze-*` transformation skill unless asked otherwise.

## Filename Pattern

Write to:

```text
src/content/research/{source}--{subject-slug}--{report-slug}--{YYYY-MM-DD}.md
```

Examples:

```text
src/content/research/youtube--chantastic--channel-audit--2026-03-09.md
src/content/research/youtube--chantastic--repackaging-strategy--2026-03-09.md
```

## Frontmatter Rules

Use the generic `research` schema.

Required fields:

- `title`
- `snapshotDate`
- `kind`
- `subject`

Expected fields:

- `description`
- `tags`
- `tldr`
- `status`
- `priorities`

Keep frontmatter generic. Do not create source-specific frontmatter like `channel`, `platform_id`, or `videos_analyzed`. Put that material in the body instead.

## Priority List

Every report must include 3-5 `priorities` in frontmatter.

Rules:

- rank highest leverage first
- phrase each item as an action
- include a short summary
- use coarse `impact` and `effort`: `low`, `medium`, `high`

These render near the top of the report and should work as an executive summary.

## Body Structure

Default shape:

- `## Context`
- `## Snapshot`
- evidence sections appropriate to the report
- `## Findings`
- `## Recommendations`
- `## Methodology` and/or `## Limitations` when useful

The report should be self-contained and durable. Do not include scratch directories, raw file inventories, or temp-path references in the final document.

## Process

### Step 1: Read the local schema

Open the collection schema and template before writing.

### Step 2: Load tone references

Consult the available writing-style reference skill before drafting the final report.

At minimum, read:

- `~/.agents/skills/consult-chan-writing-style/SKILL.md`

Read the deeper reference file only if you need more calibration.

### Step 3: Select the raw research path

If explicit source file paths are provided:

- read those files first
- treat them as the source material
- skip `analyze-*` skill calls by default

This is the escape hatch for:

- old research notes
- draft analyses
- scratch markdown written elsewhere
- existing report files that need to be normalized or rewritten

If no source files are provided, then:

If a matching global `analyze-*` skill exists, use it first.

If not, research directly.

### Step 4: Normalize the findings

Turn the raw findings into chan.dev's house style:

- generic frontmatter
- ranked priorities
- durable section headings
- concise but evidence-backed prose

Apply the writing references during this step, especially for:

- title phrasing
- `tldr`
- priority summaries
- transitions and paragraph rhythm

### Step 5: Write the report

Create or update exactly one file in `src/content/research/`.

If the subject, report slug, and date already exist, update that file instead of creating a duplicate.

### Step 6: Voice-check and verify locally

Do one final pass with the writing reference in mind.

Check for:

- corporate phrasing
- generic consultant language
- padded transitions
- over-polished conclusions that flatten the evidence

Run whatever lightweight repo validation is appropriate for content changes.

## Guidance

- Local schema wins over global defaults.
- Reuse global domain expertise instead of duplicating it.
- Reuse global reference skills for voice calibration instead of re-describing Chan's tone locally.
- Keep the coordinator thin; push source-specific logic down into the matching `analyze-*` skill whenever possible.
- Favor durable reports over preserving intermediate artifacts.
