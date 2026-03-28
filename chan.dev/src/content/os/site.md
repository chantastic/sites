---
title: 'Site'
date: 2022-06-24
---

## Service verification checklist

When deploys fail, features rot, or secrets feel suspicious, verify which external services are still in active use by the site before deleting variables or dependencies.

### Verify in code

Search for direct environment variable usage:

```bash
rg -n "ASTRO_STUDIO_APP_TOKEN|ANTHROPIC_API_KEY|WORKOS_API_KEY|WORKOS_CLIENT_ID|WORKOS_COOKIE_PASSWORD|WORKOS_REDIRECT_URI|YOUTUBE_API_KEY|NODE_VERSION|import\.meta\.env|process\.env" . -g '!node_modules' -g '!dist'
```

### Current known usage

- `ANTHROPIC_API_KEY` → `src/pages/api/generate-youtube-content.ts`
- `YOUTUBE_API_KEY` → `src/pages/talks.astro`
- `WORKOS_API_KEY` → `src/lib/authkit.ts`
- `WORKOS_CLIENT_ID` → `src/lib/authkit.ts`
- `WORKOS_REDIRECT_URI` → `src/lib/authkit.ts`
- `WORKOS_COOKIE_PASSWORD` → `src/lib/authkit.ts`
- `NODE_VERSION` → build environment setting, not app code
- `ASTRO_STUDIO_APP_TOKEN` → no current app code references after Astro DB removal

### Deletion rule

- If a variable has no code references and no build-pipeline role, remove it.
- If a variable is only needed by the build command, document that before deleting it.
- Rotate any secret that has been exposed in logs, screenshots, or dashboards.

## URL Debugging

| url option | result                                   |
| :--------- | :--------------------------------------- |
| `#share`   | Shows package for social sharing.        |
| `#body`    | Enables visual debugging on entire body. |
