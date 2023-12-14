---
title: '6. Only publish post collection'
status: 'Accepted'
date: 2023-01-07
---

## Context

I've never wanted a site with a blog.
I want a site of markdown files, some of which can be published.

This is much closer to the "digital garden" mindset.

To do this, I needed move from the 11ty blog's template of an implicit `posts` collection to an explicit one.

## Decision

Publish only everything in the `post` collection.

## Consequences

- Using 11ty collections, anything with a `post` tag will be published as a `/post` and in the main `feed/feed.xml`.
