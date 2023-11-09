---
title: 'Create a User Interface with Vanilla JavaScript and DOM'
date: 2023-11-01
status: draft
source: https://egghead.io/lessons/react-create-a-user-interface-with-vanilla-javascript-and-dom
---

We're starting this adventure with a blank HTML file.
So you know that I've got tricks up my sleave.

- Add a `<body>`,
  - and inside, a `div` with an `id` of `root`
- Then add a `script`,
  - with `type="module"`

That's all the markup that we need.
Let's jump into the script.

- Get a reference to the `div#root` with `document.getElementById('root')`
  - and assign it to a variable (`rootElement`)
- To the `rootElement`, append a new element
  - We don't have one. So let's create one.
- Create a new `div` with `document.createElement('div')`
  - and assign it to a variable (`element`)
  - Finally, define the `textContent` of `element` to be `Hello, JavaScript!`
  - …and as an extra, define the `className` "greeting".

That's all for the script.
Let's see what that did in the browser.

- In our browser, we see the text "Hello, JavaScript!".
- When we open the concsole
  - our `div#root`,
  - our `script`,
  - and when we zoom into root,
    - the `div` we created,
      - with `textContent` and `className` defined

We now have:

- A JavaScript module
- That creates a DOM element (that defines a few properties)
- And appends it to the DOM (that we created with HTML)

```html
<body>
	<div id="root"></div>
	<script type="module">
		const rootElement = document.getElementById('root')
		const element = document.createElement('div')
		element.textContent = 'Hello JavaScript'
		element.className = 'greeting'
		rootElement.appendChild(element)
	</script>
</body>
```
