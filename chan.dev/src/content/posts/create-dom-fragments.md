---
title: Create DOM fragments
references:
  - https://stackoverflow.com/questions/14910196/how-to-add-multiple-divs-with-appendchild/14910308#14910308
---

```js
// typescript DOM manipulation: https://www.typescriptlang.org/docs/handbook/dom-manipulation.html
const target_container = document.getElementById('share')
const page_links = document.querySelectorAll(
	'a[href^="https://"]'
)

// filtering elements in NodeList: https://stackoverflow.com/a/6791385
const list_fragment = document.createDocumentFragment()

// can i use forof
for (let i = 0; i < page_links.length; i++) {
	const list_item = document.createElement('li')
	list_item.appendChild(page_links[i])
	list_fragment.appendChild(list_item)
}

const container = document.createElement('ul')
container.appendChild(list_fragment)

target_container?.appendChild(container)
```
