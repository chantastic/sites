# React Patterns / Hooks Preview (draft)

_mixins for functional components_

Hooks let you do more in functional components.  
They'll be added to React in v16.7.

State?  
Subscriptions?  
Reducers?  
DOM Effects?

There's a Hook for that.

## Who's this for?

In typical [chantastic](https://twitter.com/chantastic) fashion,  
This will be light on details.
It's just the tip of the Hooks-berg — something to get you started.

Get the basic concept and then [read the docs](https://reactjs.com/docs/hooks-intro.html).

### Prerequisite

This is for people familiar with `React.Component`.  
If you're just starting with React,  
This might rely on concepts you don't have experience with.

[Start here](https://reactpatterns.com/).

## A Hooks example

You're familiar with this canonical `ClickCounter` component, written using a `Component`.

```jsx
import React from "react";

class ClickCounter extends React.Component {
  state = { count: 0 }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times.</p>
        <button onClick={(prevCount) =>
          this.setState({ count: prevCount.count + 1 )}
        )}>
          👆 increment
        </button>
      </div>
    );
  }
}
```

That's a lot to keep one piece of state.  
You have class, this, asynchronous updates, lifecycles, and that's not the worst of it.  
The perf-shamers on your team will give you hell about that inline updater function.

🚪 **Enter Hooks** 🎣

```jsx
import React, { useState } from "react";

function ClickCounter() {
  let [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

Hooks are a way to tie into React's update cycle without the `Component` class.

Snazzy!  
But there are some WTF's.  
Let's talk...

## A message for control freaks (like me)

Take a deep breathe.  
You're panicking — I feel it.

### Is `Component` dead?!

Component is just fine.  
It has a long and productive life ahead.  
There's no need to refactor all of your existing code.

Remember,  
Hooks just give function components new capabilities.

Take your time.
This isn't a race, baby.  
Enjoy the ride.

### A word on control

Remember when we first met React?

It's hard to remember.  
But it was a difficult time for some.

> "Give up control of my finely-tuned DOM mutations? NEVER!"

> "Inline event handlers?! Go back to 1998, where you belong!"

It was strange giving React control.  
It's still strange giving React control.  
But over time, we've learned to trust it.  
It's a friend now.

Hooks are the same.  
You'll need to train yourself to trust Hooks.  
After years of managing component lifecycles,  
This is will feel weird.

Trust the process.

## Hooks

There are two classifications of Hooks: **Basic** and **Additional**.

It's nice that they're categorized like this.

**Basic Hooks** are your first line of defence —  
Your bread and butter Hooks.

**Additional Hooks** are for specializations.  
Performance optimization, immutable state management, deprioritized DOM manipulation, etc.  
In the majority of cases,
you should start with a **Basic Hooks** and opt-in too **Additional Hooks**, when needed.

I'll just cover **Basic Hooks** for now.

## Basic Hooks

There are three Basic Hooks:

<ul>
  <li><a href="#usestate">useState</a></li>
  <li><a href="#useeffect">useEffect</a></li>
  <li><a href="#usecontext">useContext</a></li>
</ul>

## useState

This Hook is used for state in a function component.

`useState()` takes a default value and returns an array.  
That array contains the current value and an updater function for that value.

```jsx
let [value, valueUpdater] = useState("optionalDefault");
```

Here's an example of `useState` counting clicks in a function component.

```jsx
import React, { useState } from "react";

function ClickCounter() {
  let [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

🤩
```

## `useEffect`

This Hook is used for managing effects in a function component.

`useEffect()` takes a function as it's first argument.  
That function does some setup.  
Think `componentDidMount` (for those comfy with classes).

```jsx
import React, { useEffect } from "react";

function GreetingWithTitleChange(props) {
  let greetingText = `Welcome {props.name}!`;

  useEffect(() => {
    document.title = greetingText;
  });

  return <span>{greetingText}</span>;
}
```

This is great!

One liner\*.  
No awkward render prop or HoC composition.

We can also tear down what we've setup.  
Think `componentWillUnmount` (those comfy with classes).  
We do this by returning an anonymous function at the end of our `useEffect` block.

```jsx
useEffect(() => {
  document.title = greetingText;
  return () => (document.title = "My App");
});
```

Now, this function gets called every time this component renders.  
So, _every time_, we are setting this title.

```jsx
useEffect(() => {
  document.title = greetingText;
  return () => (document.title = "My App");
});
```

We can fix this.  
`useEffect` takes a second argument.  
It's an array of the values React should track for updates.

```jsx
useEffect(() => {
  document.title = greetingText;
  return () => (document.title = "My App");
}, [greetingText]);
```

Now React will only update that title when the input (`greetingText`) changes.  
This is what it looks like all together.

```jsx
import React, { useEffect } from "react";

function GreetingWithTitleChange(props) {
  let greetingText = `Welcome {props.name}!`;

  useEffect(() => {
    document.title = greetingText;
    return () => (document.title = "My App");
  }, [greetingText]);

  return <span>{greetingText}</span>;
}
```

## To come...

## useContext

## Composing Hooks

## Creating Custom Hooks

## useReducer

## useMemo

## useLayoutEffect

## useMutationEffect
