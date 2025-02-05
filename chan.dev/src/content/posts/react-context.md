---
title: React Context
date: 2023-08-10
# TODOS
# - [ ] add links to docs pages and resources
---

## Contents

<!-- ## How to Read This

This page is a supplement to the React doc on Context—found [here](https://reactjs.org/docs/context.html).

It's a collection of my motions that helped me understand Context.
Your mileage may vary. -->

### Thanks

<!-- This thing was much worse (read "wrong") before [Dan Abramov](https://twitter.com/dan_abramov/)'s review.
Thanks Dan for your patience, empathy, and clarity. -->

### Learn other React stuff

## A "Shit" Example

This is a shit example of Context.
Shit because it uses "shit" as an illustration and because it's simplistic.

We'll get to **the why** after we cover **the how**.

### "Shit" is a fine word

"Shit" is fine word in my house.
But my mom hates it.  
I tell my kids: "when your at grandma's house, use a different word."  
Let's implement this scenario using React Context.

```jsx {1, 4, 11, 20, 29}
// 1. It's ok to say "shit" as a default.
const ExpletiveContext = React.createContext('shit')

// 2. But use a word that's contextually appropriate.
function ContextualExclamation() {
	let word = React.useContext(ExpletiveContext)

	return <>Oh {word}!</>
}

// 3. At grandma's house, use the word "snap" instead
function GrandmasHouse(props) {
	return (
		<ExpletiveContext.Provider value="snap">
			{props.children}
		</ExpletiveContext.Provider>
	)
}

// 4. Something exciting happened. What do you say?
function VisitToGrandmasHouse() {
	return (
		<GrandmasHouse>
			<ContextualExclamation />
		</GrandmasHouse>
	)
}

// => Oh snap!
```

<details>
  <summary>Prefer video?</summary>

<div data-responsive-youtube-container>
<iframe width="560" height="315" src="https://www.youtube.com/embed/4kb-zw96pLY?si=nJktI2oIy5TO7LMx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</details>

## Create, Consume, and Provide Context

Context is a 3-part system:
[create](#create), [use](#use), [provide](#provide).

### Create

Context must first be defined.
Create context using `React.createContext`.

```jsx
let NameContext = React.createContext()
```

### Create (with default value)

React.createContext takes take an optional.
Define it using a sensible fallback

```jsx ins=/"Guest"/
let NameContext = React.createContext('Guest')
```

<details>
  <summary>Prefer video?</summary>

<div data-responsive-youtube-container>
<iframe width="560" height="315" src="https://www.youtube.com/embed/4kb-zw96pLY?si=nJktI2oIy5TO7LMx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</details>

### Use

Context is accessed with the `React.useContext` hook.

Consumer

Provided functions get the Context's `value` as their first argument.

```diff lang="jsx" {9} /Guest/ ins=/value/
let NameContext = React.createContext("Guest");

+ function ContextGreeting() {
+   let value = React.useContext(NameContext);
+
+   return <h1>👋 {value}!</h1>}
+ }

// => <h1>👋 Guest!</h1>
```

In this example, `value` is the default value used to create `NameContext`.

So, how do we provide Context?
I'm always glad you ask...

Prefer video? [Watch along at learnreact.com.](https://learnreact.com/lessons/2018-the-context-api-create-context)

### Provide

`Provider` is a component that takes a `value` prop and makes it available to every component in the component tree below it.

```jsx
let NameContext = React.createContext('Guest')

let ContextGreeting = () => (
	<NameContext.Provider value="Michael">
		<NameContext.Consumer>
			{(name) => <h1>👋 {name}!</h1>}
		</NameContext.Consumer>
	</NameContext.Provider>
)

// => <h1>👋 Michael!</h1>
```

`Providers` work where components are deeply nested.

```jsx
let NameContext = React.createContext('Guest')

let ContextAwareName = () => (
	<NameContext.Consumer>
		{(name) => <h1>👋 {name}!</h1>}
	</NameContext.Consumer>
)

let NestedContextAwareName = () => <ContextAwareName />

let DeeplyNestedContextAwareName = () => (
	<NestedContextAwareName />
)

let ContextGreeting = () => (
	<NameContext.Provider value="No Prop Drills">
		<DeeplyNestedContextAwareName />
	</NameContext.Provider>
)

// => <h1> Welcome No Prop Drills!</h1>
```

Prop Drills not required for assembly.

Prefer video? [Watch along at learnreact.com.](https://learnreact.com/lessons/2018-the-context-api-consume-context)

## Provide `value`

A Context's `value` can take any shape.
Here are examples of valid Contexts values, using a default `value`:

```jsx
let StringContext = React.createContext('string')

let NumberContext = React.createContext(42)

let FunctionContext = React.createContext(() =>
	alert('Context function')
)

let ArrayContext = React.createContext([
	'some',
	'array',
	'elements',
])

let ObjectContext = React.createContext({
	aString: 'string',
	aNumber: 42,
	aFunction: () => alert('Context function'),
	anArray: ['some', 'array', 'elements'],
})
```

`value` can be complex structures like React Elements, class components, and function components.

```jsx
let ReactElementContext = React.createContext(
	<span>React Element</span>
)

let FunctionalComponentContext = React.createContext(
	(props) => <span>Function Component</span>
)

let ClassComponentContext = React.createContext(
	class extends React.Component {
		render() {
			return <span>Class Component</span>
		}
	}
)
```

### `value` is required on Context Providers

Where a Context `Provider` is used, the `value` prop is required.

```jsx
// NOPE
<SomeContext.Provider>
</SomeContext.Provider>

// YEP!
<SomeContext.Provider value="value is a required prop">
</SomeContext.Provider>
```

### What about the default `value` given to `createContext`?

The default value given to `createContext` is used for `Consumer` components without a `Provider`.

Where `Provider`s wrap their `Consumer`s, all bets are off.
You must explicitly provide a `value`.

```jsx
let UserContext = React.createContext('Guest')

let ContextGreeting = () => (
	<UserContext.Consumer>
		{(word) => <span>Hi {word}!</span>}
	</UserContext.Consumer>
)

let App = (props) => (
	<div>
		<ContextGreeting /> {/* => Hi Guest! */}
		<UserContext.Provider>
			<ContextGreeting /> {/* => Hi ! */}
		</UserContext.Provider>
		<UserContext.Provider value="Bulbasaur">
			<ContextGreeting /> {/* => Hi Bulbasaur! */}
		</UserContext.Provider>
	</div>
)
```

Prefer video? [Watch along at learnreact.com.](https://learnreact.com/lessons/2018-the-context-api-provide-context)

## Authoring and Modules

A Context's `Consumer` and `Provider` components can be accessed in 2 ways.

The Examples above use JSX' property access syntax.
This is the style used in official documentation.

```jsx
<SomeContext.Provider value="some value">
	<Context.Consumer>
		{(value) => <span>{value}</span>}
	</Context.Consumer>
</SomeContext.Provider>
```

Above, you access the `Provider` and `Consumer` components through the Context object.

You may prefer to use [object destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring) to assign `Provider` and `Consumer` components to local variables.

```jsx
// Destructure your Context's Consumer and Provider
let {Consumer, Provider} = SomeContext

;<Provider value="some value">
	<Consumer>{(value) => <span>{value}</span>}</Consumer>
</Provider>
```

Take care where multiple contexts are used.

```jsx
let {
	Consumer: OrganizationConsumer,
	Provider: OrganizationProvider,
} = React.createContext()

let {Consumer: PersonConsumer, Provider: PersonProvider} =
	React.createContext()

let App = () => (
	<OrganizationProvider value="ACME Co.">
		<PersonProvider value="Yakko">
			<OrganizationConsumer>
				{(organization) => (
					<PersonConsumer>
						{(person) => (
							<span>
								{person}, {organization}
							</span>
						)}
					</PersonConsumer>
				)}
			</OrganizationConsumer>
		</PersonProvider>
	</OrganizationProvider>
)

// => Yakko, ACME Co.
```

## Cascading Context

Context cascades.

Consumers use the value from the nearest `Context.Provider`.  
Where none is present, the `createContext` default value is used.

```jsx
let {Provider, Consumer} = React.createContext('global default')

function App() {
	return (
		<>
			<Provider value="outer">
				<Consumer>
					{(value) => <div>{value}</div> /* "outer" */}
				</Consumer>

				<Provider value="inner">
					<Consumer>
						{(value) => <div>{value}</div> /* "inner" */}
					</Consumer>
				</Provider>
			</Provider>

			<Consumer>
				{(value) => <div>{value}</div> /* "global default" */}
			</Consumer>
		</>
	)
}
```

## Data Distribution, Not State Management

Context makes it possible to distribute data to every component in a component tree.

It's used to distribute data, not manage state.
That said, it provides the mechanism needed to state and updater functions managed by state containers.

Here's an example of a stateful container that uses Context to distribute local `state` and an `update` function.

```jsx
let StateContext = React.createContext()

class StateProvider extends React.Component {
	static defaultProps = {
		initialState: {},
	}

	update = (updater, done) => {
		this.setState(
			(prevState) => ({
				state:
					typeof updater === 'function'
						? updater(prevState.state)
						: updater,
			}),
			done
		)
	}

	state = {
		state: this.props.initialState,
		update: this.update,
	}

	render() {
		return (
			<StateContext.Provider value={this.state}>
				{this.props.children}
			</StateContext.Provider>
		)
	}
}

let App = () => (
	<StateProvider initialState={{count: 0}}>
		<StateContext.Consumer>
			{({state, update}) => (
				<div>
					<div>{state.count}</div>

					<button
						type="button"
						onClick={() =>
							update(({count}) => ({count: count + 1}))
						}
					>
						increment
					</button>
				</div>
			)}
		</StateContext.Consumer>
	</StateProvider>
)
```

### Modularazing Context

In the "real world", you'll likely expose Contexts via ES Modules.

```js
// person_context.js
import React from 'react'

let {Provider, Consumer} = React.createContext()

export {Provider, Consumer}
```

```js
// organization_context.js
import React from 'react'

let {Provider, Consumer} = React.createContext()

export {Provider, Consumer}
```

`Consumer`s can be imported to compose context-aware components.

```jsx
import React from 'react'
import {Consumer as PersonConsumer} from './person_context'
import {Consumer as OrganizationConsumer} from './organization_context'

export function ContextBizCard() {
	return (
		<OrganizationConsumer>
			{(organization) => (
				<PersonConsumer>
					{(person) => (
						<div className="business-card">
							<h1>{person}</h1>
							<h3>{organization}</h3>
						</div>
					)}
				</PersonConsumer>
			)}
		</OrganizationConsumer>
	)
}
```

`Provider`s can be imported to contain and supply values to context-aware components.

```jsx
// app.js
import {Provider as OrganizationProvider} from './organization_context'
import {Provider as PersonProvider} from './person_context'
import {ContextBizCard} from './context_biz_card'

let App = () => (
	<OrganizationProvider value="ACME Co.">
		<PersonProvider value="Yakko">
			<ContextBizCard />
		</PersonProvider>
	</OrganizationProvider>
)

// => Yakko, ACME Co.
```

## A Mental Model for Context

Props are like wires.
Props are used to "connect" data between components.
Like wires, the components have to be "touching".
Meaning that component thats hold data have to render components that need it.

Context is like a wireless — like infrared.
Context is used to send a "signal".
Like wireless, components have to be "in range" — children of a `Context.Provider` — to recieve the signal.
Components can observe that signal with a `Context.Consumer`.

<div style="margin-bottom: 8rem"></div>

## `useContext` Hook

As of [v16.8](https://reactjs.org/blog/2019/02/06/react-v16.8.0.html) React provides a [Hooks API for consuming context](https://reactjs.org/docs/hooks-reference.html#usecontext).

The main difference between the `Context.Consumer` component and the `useContext` Hook is this:  
The `useContext` Hook requires a component boundary;  
`Context.Consumer` can be used inline.

Here's a re-implementation of [A "Shit" Example](#a-shit-example) using hooks:

```jsx
import React from 'react'

const ExpletiveContext = React.createContext('shit')

function ContextualExclamation() {
	let word = React.useContext(ExpletiveContext)

	return (
		<ExpletiveContext.Consumer>
			{word}
		</ExpletiveContext.Consumer>
	)
}

function VisitGrandmasHouse() {
	return (
		<ExpletiveContext.Provider value="poop">
			<ContextualExclamation />
		</ExpletiveContext.Provider>
	)
}
```

<div style="margin-bottom: 8rem"></div>

## `static contextType` Hook

Class components can consume one Context directly using `static contextType`.

This differs from `Context.Consumer` in that it happens in the component definition and it can only consume one Context.  
Access to context is done thru the component instance.

Here's a re-implementation of [A "Shit" Example](#a-shit-example) using `static contextType`:

```jsx
import React from 'react'

const ExpletiveContext = React.createContext('shit')

class ContextualExclamation extends React.Component {
	static contextType = ExpletiveContext

	render() {
		return (
			<ExpletiveContext.Consumer>
				{this.context.word}
			</ExpletiveContext.Consumer>
		)
	}
}

function VisitGrandmasHouse() {
	return (
		<ExpletiveContext.Provider value="poop">
			<ContextualExclamation />
		</ExpletiveContext.Provider>
	)
}
```

<div style="margin-bottom: 8rem"></div>

&copy; 2018 Michael Chan Some Rights Reserved

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
