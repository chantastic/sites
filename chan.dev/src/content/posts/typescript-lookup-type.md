---
title: TypeScript Lookup Types
references:
  - https://stackoverflow.com/a/56779425/754775
  - https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html
---

```ts
type Post = {
  title: string;
  publishDate: Date;
  tags: string[];
};
```

```ts
let tags = ["Barbie", "Ken", "Alan"]: Post["tags"];
let tag = "test": Post["tags"][0];
tags; // string[]
tag;  // string
```
