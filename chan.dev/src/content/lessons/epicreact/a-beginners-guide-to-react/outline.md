---
title: "A Beginner's Guide to React: Outline"
date: 2023-11-01
---

## Contents

## A Beginners Guide to React Introduction

## Create a User Interface with Vanilla JavaScript and DOM

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

## Create a User Interface with React’s createElement API

Let's add `React` to our script.

To do this, we'll use the CDN esm.sh.
This lets us import the React, right from the internet, without having to pre-install it, or bundle our code.

- `import React from 'https://esm.sh/react@18.2.0'`
- Change `document.createElement` to `React.createElement`
- React allows us to define these attributes when we create an element, using an option object.
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

## Rendering children with CreateElement

`children` is a special property in React.
Let's make sure we know how they work.

- Log the `element` to the console (so we can see what a React Element is made of)
  - `$$typeof: Symbol(react.element)`
  - `type: "div"`
  - A few special props like `key` and `ref`
  - And our `props` object with `children` and `className` — as we wrote them

Now we can add children in many different ways.

- Remove the `chidren` property,
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

---

## NOTE: At this point, jumped to capturing all of the examples instead of transcripting…

## Create a User Interface with React’s JSX syntax

Draft

- React community uses JSX (XML syntox for writing React elements)
- Convert the demo to JSX
- This doesn't work because this is non-standard syntax.
  - We need to convert it
- Babel is a tool that converts JSX to JavaScript
  - Check out the playground to see what it does for our JSX
  - with the exception of a few annotations, this definition is the same as what we wrote by hand.

Let's get babel processing this script

- Add a `script` tag to include `@babel/standalone` from `esm.sh`
  - and make sure it's `type=module`
- Change the `type="module"` to `data-type="module"`
  - (Telling babel that this is should be processed like a module)
  - Then make the type `text/babel`
    - Ensuring that everything gets processed as Babel
- Now change the children to `Hello <em>React with JSX</em>` (so we can see the change)

When we save this and refresh, we see:

- The updated text,
- (When we inspect) A script tag that was dynamically created, with our babel-compiled code,
- And a warning…

> You are using the in-browser Babel transformer. Be sure to precompile your scripts for production - https://babeljs.io/docs/setup/

Which is a good reminder.
What we're doing here is just learning how React works.
We're not building a production grade app.

To do that, I recommend the [_Start a New React Project_ page on the React docs](https://react.dev/learn/start-a-new-react-project#production-grade-react-frameworks).
This will lay out all of the recommended options and trade-offs for starting a new project with a production-grade framework.

```html
<body>
	<div id="root"></div>
	<script
		type="module"
		src="https://esm.sh/@babel/standalone@7.23.2"
	></script>
	<script type="text/babel" data-type="module">
		import React from 'https://esm.sh/react@18.2.0'
		import ReactDOM from 'https://esm.sh/react-dom@18.2.0/client'

		const rootElement = document.getElementById('root')
		const element = (
			<div className="greeting">
				Hello <em>React with JSX</em>
			</div>
		)

		ReactDOM.createRoot(rootElement).render(element)
	</script>
</body>
```

## Use JSX effectively with React

Notes:

- Use variables with curly braces for dynamic variables
  - as attributes/props
  - and in children

```jsx
const myClassNames = 'greeting'
const myChildren = ['Hello ', <em>React with JSX</em>]
const element = <div className={myClassNames}>{myChildren}</div>
```

- `children` can be composed of variables and strings

```jsx
const myClassNames = 'greeting'
const myChildren = <em>React with JSX</em>
const element = (
	<div className={myClassNames}>Hello {myChildren}</div>
)
```

- Unlike HTML, `children` can be passed as a prop

```jsx
const myClassNames = 'greeting'
const myChildren = <em>React with JSX</em>
const element = (
	<div
		className={myClassNames}
		children={['Hello ', myChildren]}
	></div>
)
```

- And there are no nested in an element, we can use self-closing tags

```jsx
const myClassNames = 'greeting'
const myChildren = <em>React with JSX</em>
const element = (
	<div
		className={myClassNames}
		children={['Hello ', myChildren]}
	/>
)
```

- If we have an object full of props, we can use JSX Spread to pass them all a React element all at once

```jsx
const myClassNames = 'greeting'
const myChildren = <em>React with JSX</em>
const props = {
	className: myClassNames,
	children: ['Hello ', myChildren],
}
const element = <div {...props} />
```

- Values can still be applied before and after JSX spread.
  - When applied before, they will be applied first and merged with other props

```jsx
const element = <div id="foo" {...props} />
```

- But they will lose out to props that are spread

```jsx
const props = {
	id: 'bar',
	className: myClassNames,
	children: ['Hello ', myChildren],
}
const element = <div id="foo" {...props} />
```

- However, anything applied _after_ JSX spread will "win out"
  - So we can ensure that the `foo` id is applied by adding it after the spread

```jsx
const props = {
	id: 'bar',
	className: myClassNames,
	children: ['Hello ', myChildren],
}
const element = <div {...props} id="foo" />
```

## Render two elements side-by-side with React Fragments

Reset the to clear up all the previous examples and just get back to "Hello React".

```jsx
const element = <div>Hello React</div>

ReactDOM.createRoot(rootElement).render(element)
```

What happens if we break `<div>Hello React</div>` into two elements?
How do I `render` both of them? They can't both be the first argument.
And `render` doesn't support overloading like `createElement`.

```jsx
const helloElement = <span>Hello</span>
const reactElement = <span>React</span>

ReactDOM.createRoot(rootElement).render(/* what goes here? */)
```

We _could_ create another `div` and wrap the two together.

```jsx
const helloElement = <span>Hello</span>
const reactElement = <span>React</span>
const element = (
	<div>
		{helloElement} {reactElement}
	</div>
)

ReactDOM.createRoot(rootElement).render(element)
```

But this isn't always ideal because it inserts an extra DOM node.

Well, React gives us a solution for this.
We can use a React Fragment, which is a special React element that doesn't render to the DOM.

```jsx
const helloElement = <span>Hello</span>
const reactElement = <span>React</span>
const element = (
	<React.Fragment>
		{helloElement} {reactElement}
	</React.Fragment>
)

ReactDOM.createRoot(rootElement).render(element)
```

This is so common that JSX has a special, and memorable syntax for it: empty tags.

```jsx
const helloElement = <span>Hello</span>
const reactElement = <span>React</span>
const element = (
	<>
		{helloElement} {reactElement}
	</>
)

ReactDOM.createRoot(rootElement).render(element)
```

This is very useful for elements like tables and definition lists that have a very specific dom structure.
