---
title: "9. Use collections for courses"
status: "Accepted"
date: 2023-01-10
---

## Context

This is related to [0006 only publish post collection](0006-only-publish-post-collection.md).
But it clarifies where curses should go.

Courses have different attributes.

- They may have a branded name
- They may be scoped by year
- They may repeat year over year
- They may have an order (likely controlled via metadata)

## Decision

`/content` can have many content colections but only for dedicated courses and possible exceptions for things like my personal operating system (p.o.s.) — because it has no brad relevance.

## Consequences

- Remove some of the content collectios that crept in while I was trying to hide from the world.
- Add redirect for CSS post that was cross-posted
