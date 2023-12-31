---
title: VS Code
date: 2023-12-31
---

**I'd like this to be a guide.**

## Nested VS Code workspace files

When working in monorepos and content sites, there are times when I'll open VSCode at different paths.

In these cases, it's important to ensure that any `.vscode` directories be placed at the level path you intend to open.

Unfortunately, VS Code doesn't observe directories recursively. So it will only observe directory in the path opened.

This could be solved with symlinks.

```sh
ln -s file_or_dir sym_location
```
