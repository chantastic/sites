---
title: "12. Prefer range to clipboard"
status: "Accepted"
date: 2023-08-24
---

## Context

I've attempted several times to get a clean clipboard item that will paste well into blogging platforms (Medium, dev.to, Hackernoon, Hashnode, etc.).

While manual copy and paste worked, programatic copy and paste inserted additional whitespace.

## Decision

To ensure clean copy and paste, prefered `createRange` over `Clipboard`. Ranges allow one click selection of elements, allowing the user to easily grab a range and use system copy/paste.

```js
function selectElementContents(el) {
  var range = document.createRange();
  range.selectNodeContents(el);
  var sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}
```

## Consequences

This will require two steps. But the output is more reliable.
