---
title: 'Rendering children with CreateElement'
date: 2023-11-01
status: draft
source: https://egghead.io/lessons/react-create-a-user-interface-with-react-s-createelement-api
---

`children` is a special property in React.
Let's make sure we know how they work.

- Log the `element` to the console (so we can see what a React Element is made of)
  - `$$typeof: Symbol(react.element)`
  - `type: "div"`
  - A few special props like `key` and `ref`
  - And our `props` object with `children` and `className` — as we wrote them

Now we can add children in many different ways.

- Remove the `children` property,
  - And add the "Hello React" string asa third argument
  - This is functionally identical

But we can also children with different types and get the same result!

- Overload the function by splitting up the string into two: `Hello`, and ` React`
  - The output to the DOM remains the same but `children` is now an array of two strings
  - And we can add as many items as we want to this array

Now this behavior isn't limited to function overloading.
We can pass an array to the `children` property for the same result.

Finally, any of these elements can be another React element.

- Let's empaphize "React" by wrapping it in a `React.element` with:
  - The element type `em`
  - and no additional props (`null`)

Looking at the logged React element, we see:

- Our `react.element`, with
  - a two element `children` array
    - the first: a string "Hello"
    - and the second:
      - another `react.element`,
      - with the type `em`,
      - and children: the string ` React`

We learned that:

- `createElement` recieves children in multiple ways,
  - as additional function arguments
  - or a single array,
  - and that children can also accept arrays with additional React elements

```html
<body>
	<div id="root"></div>
	<script type="module">
		import React from 'https://esm.sh/react@18.2.0'
		import ReactDOM from 'https://esm.sh/react-dom@18.2.0/client'

		const rootElement = document.getElementById('root')
		const element = React.createElement(
			'div',
			{
				// children: "Hello React",
				// children: ["Hello", " React"],
				children: [
					'Hello',
					React.createElement('em', null, ' React'),
				],
				className: 'greeting',
			}
			// "Hello",
			// " React"
			// ["Hello", " React"]
		)

		ReactDOM.createRoot(rootElement).render(element)
	</script>
</body>
```
