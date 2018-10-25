# Hooks

👋

Hooks let you do more in functional components.
They an addition to React in v16.7.  

State?  
Subscriptions?  
Reducers?  
DOM Effects?  
 
There's a Hook for that.

## Who's this for?

This is for people familiar with `React.Component`.  
If you're just starting with React,
This might rely on concepts you don't have experience with.

## A Hooks Example

You're familiar with this canonical `ClickCounter` component, written using a `Component`.  

```jsx
import React from "react";

class ClickCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} tis</p>
        <button onClick={(prevCount) =>
          this.setState({ count: prevCount.count + 1 )}
        )}>
          + increment
        </button>
      </div>
    );
  }
}
```

That's a lot to keep one piece of state.  
You have `class`, `this`, async state updates, and that's not the worst of it.  
The perf-shamers on your team are gonna give you hell about that inline updater function.  

Enter Hooks:

```jsx
import React, { useState } from 'react';

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
```

Hooks are a way to tie into React's update cycle without the `Component` class.

Pretty snazzy!  
But there are some WTF's.  
Let's talk...

## A Message for the Control Freaks (like me)

Take a deep breathe.  
You're panicking — I can feel it.  

### Is `Component` dead?!

`Component` isn't going anywhere.  
It has a long and productive life ahead of it.  
So, take your time with Hooks.  
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

There are two classifications of Hooks: `Basic` and `Additional`.  

It's nice that they're categorized like this.  

Day-to-day, you'll be living and breathing `Basic Hooks`.  
`Additional Hooks` are for special cases, like performance optimization.  
In most cases, you can safely start with `Basic Hooks` and opt-in too `Additional Hooks` when needed.

## Basic Hooks

There are three Basic Hooks:
* `useState`
* `useEffect`
* `useContext`

## `useState`

This Hook is used for state in functional components.

`useState()` takes an optional default value and returns an array.  
That array contains the current value and an updater function for that value.

```jsx
let [value, valueUpdater] = useState("optionalStartingValue");
```

Here's an example of `useState` counting clicks in a functional component.

```jsx
import React, { useState } from 'react';

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
```

## `useEffect`

This Hook is used for managing effects in functional components.

`useEffect()` takes a function as it's first argument.  
That function 


```jsx
let [value, valueUpdater] = useState("optionalStartingValue");
```

Here's an example of `useState` counting clicks in a functional component.


```jsx
function BlockingNotice() {
  useEffect(
    () => {
      document.body.style.overflow("none");

      return () => {
        document.body.style.overflow(null);
      };
    },
    []
  );

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## `useContext`

## Composing Hooks

## What Did We Gain?

### Stateful Functional Components

### Control
