---
title: "15. Eliminate Atomic Lessons in Favor of Courses"
status: "Accepted"
date: 2023-12-18
---

## Context

The part of my site with the greatest amount of friction is lessons.
- It is hard to reach them via the url
- I am constantly changing the filenames to make sense
- I can't decide between numbered and un-numbered filenames
- I don't have a good index solution (with course metadata)

I've been lazy, trying to infer courses from lessons. And the experience is  terrible.

## Decision

I'm moving to a course-scoped model.
And eliminating the Lesson model, in favor of posts.

## Consequences

There may be a little bit of duplication from time to time.
But that's ok.

I really don't care to have lessons on the feed anyway.
So I think this is a good model.
