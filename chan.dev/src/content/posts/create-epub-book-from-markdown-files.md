---
title: Create an epub Book from Markdown Files
date: 2023-12-21
references:
  - https://pandoc.org/epub.html
  - https://pandoc.org/MANUAL.html#epub-metadata
---

- Put all your markdown files in a in single directory.
  - Not required but it makes everything a lot easier.
- Run the pandoc command over all the files, and use `-o` to set output path with preferred file extension:
  - `pandoc file1.md file2.md file3.md -o my-book.epub`
- Metadata is effectively ignored by virtue of being completely overridden by the metadata in the last file. So,
  - Create a single file with metadata, defined with `yaml`.
  - Know that you need to use a `.txt` extension, as `yaml` is not supported.
- Include metadata as last file.
  - `pandoc file1.md file2.md metadata.txt -o my-book.epub`.
- This command can be added to a bash script:
  - `build.sh`.
  - prefix with shebang `#!/bin/bash`.
  - set [execution permissions](https://askubuntu.com/questions/229589/how-to-make-a-file-e-g-a-sh-script-executable-so-it-can-be-run-from-a-termi) `chmod +x build.sh`.
