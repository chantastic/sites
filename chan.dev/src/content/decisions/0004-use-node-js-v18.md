---
title: '4. Use node.js v18'
status: 'Superceded by [5. Use Node.js v16](0005-use-node-js-v16.md)'
date: 2023-01-07
---

## Context

11ty and the latest `node-fetch` use incompatable module formats.
I'd like to not pin to outdated versions of a package.

## Decision

[Node.js 18 now supports `fetch`](https://nodejs.org/de/blog/announcements/v18-release-announce/#fetch-experimental). Use v18 LTS and built-in (experimental) `fetch`.

## Consequences

- Need to specify [`NODE_VERSION` in Netlify environment variables.](https://www.elian.codes/blog/21-12-03-set-your-node-version-in-netlify/)
- Pin local environment to use v18
  - [Volta pin](https://docs.volta.sh/reference/pin) in current dev environment
