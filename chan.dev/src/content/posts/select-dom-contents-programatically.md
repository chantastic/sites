---
title: 'Select DOM contents programatically'
references:
  - https://developer.mozilla.org/en-US/docs/Web/API/Document/createRange
---

```js
function selectContents(domNode) {
	let range = document.createRange()
	let sel = window.getSelection()

	range.selectNodeContents(domNode)

	sel.removeAllRanges()
	sel.addRange(range)
}
```
