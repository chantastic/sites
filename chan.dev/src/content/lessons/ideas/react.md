---
title: React
date: 2023-07-30
---

<p
  class="bg-gray-100 p-6 text-gray-800 border-gray-800 border-0 border-l-4"
>
  ℹ️ Notes collected from across the infinite todo lists of my life.
</p>

## Misc utility components

```jsx
<Typeof>{<Component />}</Typeof>
```

## DevTools

# Lesson6

Freeze time with React Dev Tools

## Challenge

- Use the React Dev Tools to find a Component that can be suspended
  - Click the stopwatch icon to toggle it's suspended state
- Use the React Dev Tools to find the ErrorBoundary component
  - Change the `state` field `hasError` from "false" to "true" to see the error state

## Before you move on

Take a break.
Make sure you know everything we've covered so far.
Before you move on.
Get everything working again.

## React principles you should interview for

- Composition

## Basics

### Components

Components are the primary building block of React.

To start, you can think of them like custom HTML Elements.

They can be simple or very complex.

Let's start with a simple one...

### Hooks

Hooks are the secondary building block of React.

They are functions we use to add interactivity to components.

They can be simple or complex.

Let's start with a simple one...

### Context

Context is a startegy for sharing data between may components

### Patterns

- [x] Setup a React CodeSandbox
- [x] What's a React Component?
- [x] What are Props in React?
- [x] Make React Components as Re-usable as HTML Elements
- [x] Track State with the React.useState
- [x] Render Conditionally with a Conditional (Ternary) Operator
- [x] Fetch Data with React.useEffect
- [x] Connect useEffect and useState to Update Components with Data
- [x] 8 Extract a Custom Hook
- [ ] 9 Catch Errors with an ErrorBoundary Component (class stuff?)
- [ ] 1o Map Arrays of Data to Arrays of Components
- [ ] 11 Make Root Elements Dynamic with an as Component Prop (ol, ul, etc)
- [ ] 12 Invert Control of Redering with a Render Prop
- [ ] 13 Return an Array of Elements with React.Fragment
- [ ] 9 Limit useEffect Calls with the Inputs Argument :: (add a button that just re-renders the component to show that we re-fetch every update)
- [ ] ? useRef, useLayoutEffect, useReducer
- [ ] ? Concent, Context.Provider, Context.Consumer, useContext
- [ ] ? React DevTools, Hooks linting
- [ ] ? Lift State, Controller Component
- [ ] props: children, components
- [ ] Code Splitting with Dynamic imports
- [ ] ? Suspese, SuspenseList, useTransition, useDeferredValue
- [ ] JSX as an alternate root. "Why is there HTML in my JavaScript ->" for those who are brand-brand ne

## Basics (alt)

- [ ] Element — createElement (React instructions for creating an element)
- [ ] ReactDOM — renders to a platform
- [ ] JSX
- [ ] Component — function that takes props and returns a React Element
- [ ] children
- [ ] Hooks: useState (single state), useReducer (complex state), useEffect (sync state)

## "The war on props"
