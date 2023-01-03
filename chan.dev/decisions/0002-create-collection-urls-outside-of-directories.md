# 2. Create collection urls outside of directories

Date: 2023-01-03

## Status

Accepted

## Context

In any file-system based site builder, you can autor subdirectory index pages two ways:

- `/collection/index.ext`
- `/collection.ext`

Which is preferrable depends a lot on the features of the site builder.

[11ty's data files feature](https://www.11ty.dev/docs/data-template-dir/) gives authors a way to provide shared data to an entire directory.

When index files are placed in the directory, they also get the data in that data file.

## Decision

Create collection urls outside of directors.

Prefer `/collection.ext` to `/collection/indeex.ext`.

This ensures that index don't get the tags and layouts of the resources in directories with data files.

## Consequences

- collection pages don't show up next to resource directories, as most visual file system explorers hoist directories
