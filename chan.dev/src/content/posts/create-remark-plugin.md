---
title: Create remark plugin
tags: web, markdown
references:
  - https://unifiedjs.com/learn/guide/create-a-plugin/
---

```js
function exchange_relative_links_with_absolute() {
  return (tree) => {
    visit(tree, (node) => {
      if (
        ["link", "definition"].includes(node?.type) &&
        node.url.startsWith("/")
      ) {
        node.url = new URL(node.url, site).toString();
      }
    });
  };
}
```
