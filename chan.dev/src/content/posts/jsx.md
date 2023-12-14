---
title: React JSX
date: 2023-08-08
---

JSX is weird.

It's _kinda_ like HTML but mostly not.
And like most abstractions that are _kinda_ like something else, it's easy to accidentally do things the wrong way.

This page is a collection of JSX truths to keep in mind when debugging React.

## What is JSX?

JSX is a syntax extension for JavaScript.
It gives React that doughy familiar feeling of HTML.
But it is not valid JavaScript.
Which means that it can't run in a browser without first transforming that JSX into JavaScript.

_Reference: [JSX introduction and specification](http://facebook.github.io/jsx/), facebook.github.io/jsx._

## How does JSX work?

Using a superset language (like [TypeScript](https://www.typescriptlang.org/)) or a JavaScript compiler (like [Babel](https://babeljs.io/)), JSX syntax is transformed into `React.createElement` calls.

```diff lang="jsx" /div/
<div>Hello common component!</div>

/* 👇👇👇 TypeScript or Babel Transformation 👇👇👇 */

React.createElement("div", null, "Hello common component!");
```

Here's another with few props.

```diff lang="jsx"
<div
  id="user_greeting"
  className="greeting"
>
  Hello common component!
</div>

/* 👇👇👇 TypeScript or Babel Transformation 👇👇👇 */

React.createElement(
  "div",
  {
    id: "user_greeting",
    class: "greeting"
  },
  "Hello common component!"
);
```

### Custom component example

```diff lang="jsx" /MyComponent/
-React.createElement(MyComponent, "Hello common component!");
+<MyComponent>Hello common component!</MyComponent>;
```

**Component with props**

**With JSX**

```js {3,6}
// jsx-to-js.js
let reactElement = (
	<MyComponent
		className="my-css-class-selector"
		name="React Rally"
	/>
)
function MyComponent({name, ...restProps}) {
	return <h1 {...restProps}>Hello {name}</h1>
}
```

Unlike everything we covered in [React Basics](/react-basics), JSX requires some form of build step.
JSX must be transformed into `React.createElement` calls befor the browser can run it.

## Why does JSX exist?

The line is that it gives designers and developers a familiar HTMl-like syntax.

---

### Use curly braces to interpolate values

### This is also true for attributes

### Every JSX element can be self-closing

### Can't copy paste HTML without transformation

React components are just functions that return React elements.
Declare a new component and use it to create our React element.

```diff lang="js"
let domNode = document.getElementById("root");
// 2. Create a React element from a the new component
-let reactElement = React.createElement("h1", {}, "Hello React");
+let reactElement = React.createElement(MyComponent);
// 1. Declare a new component
+function MyComponent() {
+  return React.createElement("h1", {}, "Hello React Component");
+}
ReactDOM.createRoot(domNode).render(reactElement);
```

_Reference: [Your first component](https://react.dev/learn/your-first-component), react.dev._
