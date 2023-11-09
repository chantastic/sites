---
title: 'Use JSX effectively with React'
date: 2023-11-01
status: draft
source: https://egghead.io/lessons/react-use-jsx-effectively-with-react
---

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
