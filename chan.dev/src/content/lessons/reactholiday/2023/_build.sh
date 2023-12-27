#!/bin/bash
pandoc \
    is-react-still-a-library.md \
    react-has-trust-issues.md \
    ./_metadata.txt -s -o \
    ../../../../../ebooks/reactholiday-2023.epub
