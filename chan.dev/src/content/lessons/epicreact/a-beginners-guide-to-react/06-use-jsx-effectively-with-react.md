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

---

GPT4 take

# Create a User Interface with React’s JSX syntax

_In this lesson, we'll see how JSX transforms our development experience with React by allowing us to write our components in a syntax similar to HTML._

## Steps:

1. Add the Babel script to your HTML to enable in-browser JSX processing.

   ```html
   <!-- Include Babel to process JSX -->
   <script
   	type="module"
   	src="https://esm.sh/@babel/standalone"
   ></script>
   ```

2. Modify the script type for your React component to be processed by Babel.

   ```html
   <!-- This script will now be processed by Babel -->
   <script type="text/babel">
   ```

3. Replace the `React.createElement` call with JSX syntax.

   ```jsx
   <!-- JSX makes your component declaration much cleaner -->
   const element = <div className="greeting">Hello <em>React with JSX</em></div>;
   ```

4. Refresh your browser to see the updated UI.

_By following these steps, you've just leveled up your React game by integrating JSX into your project!_

> **Note:** This setup is ideal for learning and development. For production, ensure to precompile your JSX for performance and reliability.

## Final Code:

```html
<body>
	<div id="root"></div>
	<script
		type="module"
		src="https://esm.sh/@babel/standalone"
	></script>
	<script type="text/babel">
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
