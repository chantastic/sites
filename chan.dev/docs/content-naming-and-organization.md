# Content naming and organization

## Purpose

This guide defines how chan.dev should name, organize, and package atomic content.

It exists to prevent a recurring failure mode: encoding container context into the identity of a piece of content too early, then having routing, filenames, and packaging become tightly coupled.

The goal is to preserve two values at the same time:

1. **Atomic, durable content** — individually useful, portable, and stable.
2. **Package-oriented creation** — courses, events, ebooks, and other bundles are still first-class ways of making and shipping work.

## Core model

There are three layers:

### 1. Atomic content

Atomic content is independently addressable and independently useful.

Current atomic content types:

- `posts` — publication-first, read-first
- `lessons` — instruction-first, sequence-friendly

Atomic content should be:

- individually routable
- searchable
- reusable across contexts
- packageable

### 2. Packages

A package is a composition of atomic content.

Examples:

- a course
- an event archive
- an ebook
- a themed bundle
- a workshop packet

A package can contain:

- lessons only
- posts only
- posts and lessons together

Packaging is a layer **above** atomic content, not a property that differentiates posts from lessons.

### 3. Outputs

Outputs are renderings of a package or atomic content:

- web pages
- package landing pages
- ebooks
- pdfs
- downloadable bundles

## What differentiates posts from lessons?

Not packaging.

Both posts and lessons can belong to packages.

The distinction is editorial intent:

### Posts

Posts are:

- publication-first
- optimized for discovery, feeds, tags, sharing, and standalone reading

### Lessons

Lessons are:

- instruction-first
- optimized for teaching, sequencing, and inclusion in structured learning experiences

A short version:

- **Post**: “Read this.”
- **Lesson**: “Learn this.”
- **Package**: “Experience these together.”

## Naming philosophy

### Default rule

Name a piece of content for **what it is**, not for **where it first appeared**.

Prefer names that can survive extraction from their original context.

Good atomic names:

- `console-api`
- `react-has-trust-issues`
- `using-react-error-boundaries`
- `rendering-children-with-createelement`

These are durable because they describe the content itself.

### What to avoid

Avoid pure container/position naming when possible:

- `7`
- `a`
- `intro`
- `outline`
- `welcome`

These are only meaningful inside a specific sequence.

## Contextual naming is allowed when necessary

Some content is not yet atomic enough to stand alone.

For that content, contextual naming is acceptable.

Examples:

- `react-fundamentals-welcome`
- `reactholiday-2021-7`
- `novimber-a`

This is not considered a failure. It is an honest signal that the content still depends on context for identity.

However, contextual naming should be treated as:

- pragmatic
- transitional when possible
- not the default for everything

## Naming rubric

When naming content, ask:

### 1. Would this name still make sense outside the package?

If yes, use the atomic name.

### 2. Would this collide or become vague outside the package?

If yes, add just enough context to disambiguate it.

### 3. Is this really just a positional artifact of a sequence?

If yes, either:

- rename it editorially into an atomic name, or
- accept contextual naming for now

## Naming tiers

### Best

Atomic, standalone, descriptive:

- `console-api`
- `using-react-error-boundaries`
- `react-has-trust-issues`

### Good

Atomic with light contextual disambiguation:

- `react-fundamentals-welcome`
- `reactholiday-2023-react-has-trust-issues`

### Acceptable transitional

Context-dependent names that are still more stable than folder-derived slugs:

- `novimber-a`
- `reactholiday-2021-7`

### Worst

Names that only make sense because of a folder or sequence position:

- `7`
- `a`
- `intro`

These should not be public flat slugs if they can be avoided.

## Organization principles

### Filesystem organization should not be the primary source of meaning

Folders are useful for drafting and local thinking, but they are too rigid to model all of the valid ways content can be grouped.

A piece of content can validly belong to multiple structures:

- by topic
- by course
- by event
- by exportable package
- by sequence
- by standalone usefulness

Because of that, public identity and package membership should not depend entirely on directory nesting.

### Preferred long-term direction

- atomic content should have stable, durable identities
- package membership should be declared in metadata and/or package definitions
- routing should favor simplicity over deep folder inference

## Packaging model

A piece of content becomes package content when it gains:

1. membership
2. sequence
3. framing
4. readiness for inclusion in that package

This is a compositional change, not a type change.

A post does not stop being a post because it belongs to an ebook.
A lesson does not stop being a lesson because it belongs to a workshop packet.

## Working guideline for lessons

Lessons should be treated as atomic instructional units.

They may belong to:

- a collection
- a course
- an event
- one or more packages

But their identity should be based on the lesson itself whenever possible.

## Working guideline for posts

Posts should be treated as atomic publication units.

They may also belong to packages.

Posts can be assembled into:

- an ebook
- a thematic bundle
- a course reader
- an event companion

## Decision for current migration work

For the current lessons migration:

1. Favor atomic naming where the lesson is independently legible.
2. Allow contextual naming where the lesson is not yet atomic enough.
3. Do not let folder nesting define the permanent public identity.
4. Treat package membership as a separate concern from lesson/post identity.
5. Avoid building routing that assumes one directory shape equals one permanent content model.

## Practical implementation guidance

Before renaming or flattening content:

1. classify a piece of content as:
   - atomic
   - needs disambiguation
   - container-dependent
2. choose the least contextual stable name possible
3. preserve package/course/event relationships separately
4. add redirects for any changed public URLs

## Summary

The guiding principle is:

> Keep content atomic whenever possible. Let packages provide context, sequence, and exportability. Only encode package context into a content name when the content cannot yet stand on its own.
