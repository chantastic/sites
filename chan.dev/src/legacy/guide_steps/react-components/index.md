---
title: A chantastic guide to components
---

## This is a component

```tsx
function AComponent() {
	return <>Hello components</>
}
```

## A component can compose other components

```tsx
function AComponent() {
	return <h1>Hello components</h1>
}
```

## A component can me bade composeable via the `children` prop

```tsx
function AComponent({children = 'Hello components'}) {
	return <h1>{children}</h1>
}
```

## This is another component

```tsx
function App() {
	return <main>Hello app</main>
}
```

## One component can render another

```tsx
function App() {
	return (
		<main>
			<AComponent>Hello app</AComponent>
		</main>
	)
}
```

## Options can be passed to components (these are called props)

```tsx
function App() {
	return (
		<main>
			<AComponent style={color: "red"}>Hello app!</AComponent>
		</main>
	)
}
```

## But props must be accepted and implemented

```tsx
function AComponent({
	style = null,
	children = 'Hello components',
}) {
	return <h1 style={style}>{children}</h1>
}
```

## props can have default values

```tsx
function AComponent({
	style = {textDecoration: 'underline'},
	children = 'Hello components',
}) {
	return <h1 style={style}>{children}</h1>
}
```

## but these values are not automatically merged with incoming values

## merging values must be done manually as well

```tsx
let defaultStyles = {textDecoration: 'underline'}

function AComponent({
	style = null,
	children = 'Hello components',
}) {
	let mergedStyles = {...defaultStyles, ...style}

	return <h1 style={mergedStyles}>{children}</h1>
}
```

## Control of merging can be delegated via prop callback functions — allowing component consumers to modify defaults

```tsx
let defaultStyles = {textDecoration: 'underline'}

function AComponent({
	style = null,
	children = 'Hello components',
}) {
	let mergedStyles =
		typeof style === 'function'
			? style(defaultStyles)
			: {...defaultStyles, ...style}

	return <h1 style={mergedStyles}>{children}</h1>
}
```

```tsx
function App() {
	return (
		<main>
			<AComponent
				style={(defaultStyles) => ({
					...defaultStyles,
					...{color: 'red'},
				})}
			>
				Hello app!
			</AComponent>
		</main>
	)
}
```

## Default resolvers, and formatters can be exported for use by component consumers

<!-- TODO (haven't introduced that "consumer" yet) -->

```tsx
let defaultStyles = {textDecoration: 'underline'}

export function resolveDefaultStyles(incomingStyle) {
	return typeof incomingStyle === 'function'
		? incomingStyle(defaultStyles)
		: {...defaultStyles, ...incomingStyle}
}

export function AComponent({
	style = null,
	children = 'Hello components',
}) {
	let mergedStyles = resolveDefaultStyles(style)

	return <h1 style={mergedStyles}>{children}</h1>
}
```

## to avoid manually clearlisting all valid HTML attributes, use rest and spread syntax for props

```tsx
export function AComponent({
	style = null,
	children = 'Hello components',
	...restProps
}) {
	let mergedStyles = resolveDefaultStyles(style)

	return (
		<h1 style={mergedStyles} {...restProps}>
			{children}
		</h1>
	)
}
```

## This implementation makes it simple to opt out of defaults (where necessary)

```tsx
function App() {
	return (
		<main>
			<AComponent
				style={
					(/* ignore defaults */) => {
						color: 'red'
					}
				}
			>
				Hello app!
			</AComponent>
		</main>
	)
}
```

## `children` can be an array

```tsx
function AComponent({
	chant = false,
	children = 'Hello components',
}) {
	return <h1>{[children, children, children].join(' ')}</h1>
}
```

## `children` can be many types.

```tsx
<AComponent>A string</AComponent>
<AComponent>{123}</AComponent>
<AComponent>{boolean}</AComponent>
<AComponent>[1, 2, 3]</AComponent>
<AComponent>[1, <>2</>, 3]</AComponent>
<AComponent><>stuff</></AComponent>
<AComponent><h1>stuff</h1></AComponent>
```

## So treat `children` as opaque

React.children
