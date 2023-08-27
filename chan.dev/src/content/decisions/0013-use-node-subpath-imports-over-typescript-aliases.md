---
title: "13. Use Node subpath imports over TypeScript aliases"
status: "Accepted"
date: 2023-08-27
---

## Context

I saw [this tweet](https://twitter.com/kentcdodds/status/1695447127533797437?s=20).

Kent's great decision log for [Epic Stack](https://github.com/epicweb-dev/epic-stack/blob/main/docs/decisions/031-imports.md).

I don't have to be convinced much to prefer node-native solutions here.

## Decision

Replace all TypeScript path aliases (`@comoponents`) with Node subpath imports (`#components`) with node subpath imports.

## Consequences

Duplicated configuration until Typescript fully supports the node config.
