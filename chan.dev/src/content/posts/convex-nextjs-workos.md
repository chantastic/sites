---
title: Integrate Convex Next.js and WorkOS
date: 2025-09-11
references:
  - https://docs.convex.dev/auth/authkit
  - https://labs.convex.dev/auth/setup
  - https://docs.convex.dev/quickstart/nextjs
---

## Order of operations

1. Use `Authenticated`/`Unauthenticated` components to visually assert when everything works
1. Replace default Convex Provider (copy-paste) -> point to docs
1. CORS?
1. Add Auth Config (run convex)
1. Add WorkOS client id to convex env (hosted)
1. Add `aud` claim to JWT template
