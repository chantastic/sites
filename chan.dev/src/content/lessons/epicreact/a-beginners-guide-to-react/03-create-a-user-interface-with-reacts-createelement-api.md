---
title: 'Create a User Interface with React’s createElement API'
date: 2023-11-01
status: draft
source: https://egghead.io/lessons/react-create-a-user-interface-with-react-s-createelement-api
---

Let's add `React` to our script.

To do this, we'll use the CDN esm.sh.
This lets us import the React, right from the internet, without having to pre-install it, or bundle our code.

- `import React from 'https://esm.sh/react@18.2.0'`
- Change `document.createElement` to `React.createElement`
- React allows us to define these attributes when we create an element, using the props option object.
  - Move the attributes into the object
  - Then reformat them into object syntax,
    - Changing `textContent` to `children`
- Finally, let's change the tex to `Hello React` so we can observe the change.

Our element doesn't render yet because we're still using the DOM to append it to the `rootElement`.
We need React's companion library that `ReactDOM` to communicate between React and the DOM.

- `import ReactDOM from 'https://esm.sh/react-dom@18.2.0/client'`
- Call `ReactDOM.createRoot` and pass it the `rootElement`
  - This prepares the `rootElement` to be managed by React.
- Then call `render` on the React Root and pass it the React `element`.

Save, refresh, and we'll see the text "Hello React" in the browser.
Check it to make sure the className is still applied — it is.

Congrats, we are now have a React app:

- using React to create an element
- and ReactDOM to render our React Element to the DOM.

```html
<body>
	<div id="root"></div>
	<script type="module">
		import React from 'https://esm.sh/react@18.2.0'
		import ReactDOM from 'https://esm.sh/react-dom@18.2.0/client'

		const rootElement = document.getElementById('root')
		const element = React.createElement('div', {
			children: 'Hello React',
			className: 'greeting',
		})

		ReactDOM.createRoot(rootElement).render(element)
	</script>
</body>
```
