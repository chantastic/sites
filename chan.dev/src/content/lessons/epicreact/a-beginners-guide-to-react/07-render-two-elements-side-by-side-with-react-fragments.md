---
title: 'Render two elements side-by-side with React Fragments'
date: 2023-11-01
status: draft
source: https://egghead.io/lessons/react-render-two-elements-side-by-side-with-react-fragments
---

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
