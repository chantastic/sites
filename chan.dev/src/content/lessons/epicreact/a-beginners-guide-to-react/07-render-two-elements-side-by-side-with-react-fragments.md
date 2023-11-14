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

---

GPT4 take:

# Render two elements side-by-side with React Fragments

_In this lesson, we will explore how to render sibling elements without adding extra nodes to the DOM by using React Fragments._

## Reset the Example:

1. Clear previous examples and set up a simple "Hello React" element.
   ```jsx
   const element = <div>Hello React</div>
   ReactDOM.createRoot(rootElement).render(element)
   ```

## Rendering Siblings:

1. Break the `div` into two separate `span` elements.

   ```jsx
   const helloElement = <span>Hello</span>
   const reactElement = <span>React</span>
   ```

2. Discuss the problem with rendering two elements without an enclosing tag.

## Using a Wrapper `div`:

1. Wrap both elements in a `div` to render them together.

   ```jsx
   const element = (
   	<div>
   		{helloElement} {reactElement}
   	</div>
   )
   ReactDOM.createRoot(rootElement).render(element)
   ```

2. Point out the downside: an extra DOM node that might be unnecessary.

## Introducing React Fragments:

1. Replace the `div` with a `React.Fragment` to avoid adding extra nodes.
   ```jsx
   const element = (
   	<React.Fragment>
   		{helloElement} {reactElement}
   	</React.Fragment>
   )
   ReactDOM.createRoot(rootElement).render(element)
   ```

## The Short Syntax for Fragments:

1. Use the empty tag syntax `<>...</>` as a shorthand for `React.Fragment`.
   ```jsx
   const element = (
   	<>
   		{helloElement} {reactElement}
   	</>
   )
   ReactDOM.createRoot(rootElement).render(element)
   ```

_React Fragments are particularly useful for components that require a specific DOM structure, like tables or definition lists, where extra divs can break the desired layout._

_By using React Fragments, we keep our DOM clean and semantic, exactly how we want it._
