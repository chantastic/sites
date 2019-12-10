import "highlight.js/styles/github-gist.css";
import "../styles/old-layout.css";
import Head from "next/head";

# React Patterns [on GitHub](https://github.com/chantastic/reactpatterns.com)

Get the latest React patterns, tips, and tricks right to your inbox.  

<script async data-uid="b3af526942" src="https://f.convertkit.com/b3af526942/aee6ebe0cb.js"></script>

## Contents

## Function component

[Function components](https://reactjs.org/docs/components-and-props.html#function-and-class-components) are the simplest way to declare reusable components.  
They're just functions.

```jsx
function Greeting() {
  return <div>Hi there!</div>;
}
```

Collect `props` from the first argument of your function.

```jsx
function Greeting(props) {
  return <div>Hi {props.name}!</div>;
}
```

Define any number of local variables to do what you need in your function components.  
**Always return your React Component at the end. **

```jsx
function Greeting(props) {
  let style = {
    fontWeight: "bold",
    color: props.color
  };

  return <div style={style}>Hi {props.name}!</div>;
}
```

Set defaults for any required `props` using `defaultProps`.

```jsx
function Greeting(props) {
  return <div>Hi {props.name}!</div>;
}
Greeting.defaultProps = {
  name: "Guest"
};
```

---

## Destructuring props

[Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) is a JavaScript feature.  
It was added to the language in ES2015.  
So it might not look familiar.

Think of it like the opposite of literal assignment.

```js
let person = { name: "chantastic" };
let { name } = person;
```

Works with Arrays too.

```js
let things = ["one", "two"];
let [first, second] = things;
```

Destructuring assignment is used a lot in [function components](#function-component).  
These component declarations below are equivalent.

```jsx
function Greeting(props) {
  return <div>Hi {props.name}!</div>;
}

function Greeting({ name }) {
  return <div>Hi {name}!</div>;
}
```

There's a syntax for collecting remaining `props` into an object.  
It's called [rest parameter syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) and looks like this.

```jsx
function Greeting({ name, ...restProps }) {
  return <div>Hi {name}!</div>;
}
```

Those three dots (`...`) take all the remaining properties and assign them to the object `restProps`.

So, what do you do with `restProps` once you have it?  
Keep reading...

---

## JSX spread attributes

Spread Attributes is a feature of [JSX](https://reactjs.org/docs/introducing-jsx.html).  
It's a syntax for providing an object's properties as JSX attributes.

Following the example from [Destructuring props](#destructuring-props),  
We can **spread** `restProps` over our `<div>`.

```jsx
function Greeting({ name, ...restProps }) {
  return <div {...restProps}>Hi {name}!</div>;
}
```

This makes `Greeting` super flexible.  
We can pass DOM attributes to `Greeting` and trust that they'll be passed through to `div`.

```jsx
<Greeting name="Fancy pants" className="fancy-greeting" id="user-greeting" />
```

Avoid forwarding non-DOM `props` to components.  
Destructuring assignment is popular because it gives you a way to separate component-specific props from DOM/platform-specific attributes.

```jsx
function Greeting({ name, ...platformProps }) {
  return <div {...platformProps}>Hi {name}!</div>;
}
```

---

## Merge destructured props with other values

Components are abstractions.  
Good abstractions allow for extension.

Consider this component that uses a `class` attribute for style a `button`.

```jsx
function MyButton(props) {
  return <button className="btn" {...props} />;
}
```

This works great until we try to extend it with another class.

```jsx
<MyButton className="delete-btn">Delete...</MyButton>
```

In this case, `delete-btn` replaces `btn`.

Order matters for [JSX spread attributes](#jsx-spread-attributes).  
The `props.className` being spread is overriding the `className` in our component.

We can change the order but now the `className` will **never** be anything but `btn`.

```jsx
function MyButton(props) {
  return <button {...props} className="btn" />;
}
```

We need to use destructuring assignment to get the incoming `className` and merge with the base `className`.  
We can do this simply by adding all values to an array and joining them with a space.

```jsx
function MyButton({ className, ...props }) {
  let classNames = ["btn", className].join(" ");

  return <button className={classNames} {...props} />;
}
```

To guard from `undefined` showing up as a className,  
Use [default values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Default_values_2).

```jsx
function MyButton({ className = "", ...props }) {
  let classNames = ["btn", className].join(" ");

  return <button className={classNames} {...props} />;
}
```

## Conditional rendering

You can't use if/else statements inside a component declarations.  
So [conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) and [short-circuit evaluation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Short-circuit_evaluation) are your friends.

### `if`

```jsx
{
  condition && <span>Rendered when `truthy`</span>;
}
```

### `unless`

```jsx
{
  condition || <span>Rendered when `falsy`</span>;
}
```

### `if-else`

```jsx
{
  condition ? (
    <span>Rendered when `truthy`</span>
  ) : (
    <span>Rendered when `falsy`</span>
  );
}
```

## Children types

React can render `children` from most types.  
In most cases it's either an `array` or a `string`.

### `String`

```jsx
<div>Hello World!</div>
```

### `Array`

```jsx
<div>{["Hello ", <span>World</span>, "!"]}</div>
```

## Array as children

Providing an array as `children` is a very common.  
It's how lists are drawn in React.

We use `map()` to create an array of React Elements for every value in the array.

```jsx
<ul>
  {["first", "second"].map(item => (
    <li>{item}</li>
  ))}
</ul>
```

That's equivalent to providing a literal `array`.

```jsx
<ul>{[<li>first</li>, <li>second</li>]}</ul>
```

This pattern can be combined with destructuring, JSX Spread Attributes, and other components, for some serious terseness.

```jsx
<ul>
  {arrayOfMessageObjects.map(({ id, ...message }) => (
    <Message key={id} {...message} />
  ))}
</ul>
```

## Function as children

React components don't support functions as `children`.
However, [render props](#render-prop) is a pattern for creating components that take functions as children.

## Render prop

Here's a component that uses a render callback.  
It's not useful, but it's an easy illustration to start with.

```jsx
const Width = ({ children }) => children(500);
```

The component calls `children` as a function, with some number of arguments. Here, it's the number `500`.

To use this component, we give it a [function as `children`](#function-as-children).

```jsx
<Width>{width => <div>window is {width}</div>}</Width>
```

We get this output.

```jsx
<div>window is 500</div>
```

With this setup, we can use this `width` to make rendering decisions.

```jsx
<Width>
  {width => (width > 600 ? <div>min-width requirement met!</div> : null)}
</Width>
```

If we plan to use this condition a lot, we can define another components to encapsulate the reused logic.

```jsx
const MinWidth = ({ width: minWidth, children }) => (
  <Width>{width => (width > minWidth ? children : null)}</Width>
);
```

Obviously a static `Width` component isn't useful but one that watches the browser window is. Here's a sample implementation.

```jsx
class WindowWidth extends React.Component {
  constructor() {
    super();
    this.state = { width: 0 };
  }

  componentDidMount() {
    this.setState({ width: window.innerWidth }, () =>
      window.addEventListener("resize", ({ target }) =>
        this.setState({ width: target.innerWidth })
      )
    );
  }

  render() {
    return this.props.children(this.state.width);
  }
}
```

Many developers favor [Higher Order Components](#higher-order-component) for this type of functionality. It's a matter of preference.

## Children pass-through

You might create a component designed to apply `context` and render its `children`.

```jsx
class SomeContextProvider extends React.Component {
  getChildContext() {
    return { some: "context" };
  }

  render() {
    // how best do we return `children`?
  }
}
```

You're faced with a decision. Wrap `children` in an extraneous `<div />` or return `children` directly. The first options gives you extra markup (which can break some stylesheets). The second will result in unhelpful errors.

```jsx
// option 1: extra div
return <div>{children}</div>;

// option 2: unhelpful errors
return children;
```

It's best to treat `children` as an opaque data type. React provides `React.Children` for dealing with `children` appropriately.

```jsx
return React.Children.only(this.props.children);
```

## Proxy component

_(I'm not sure if this name makes sense)_

Buttons are everywhere in web apps. And every one of them must have the `type` attribute set to "button".

```jsx
<button type="button">
```

Writing this attribute hundreds of times is error prone. We can write a higher level component to proxy `props` to a lower-level `button` component.

```jsx
const Button = props =>
  <button type="button" {...props}>
```

We can use `Button` in place of `button` and ensure that the `type` attribute is consistently applied everywhere.

```jsx
<Button />
// <button type="button"><button>

<Button className="CTA">Send Money</Button>
// <button type="button" class="CTA">Send Money</button>
```

## Style component

This is a [Proxy component](#proxy-component) applied to the practices of style.

Say we have a button. It uses classes to be styled as a "primary" button.

```jsx
<button type="button" className="btn btn-primary">
```

We can generate this output using a couple single-purpose components.

```jsx
import classnames from "classnames";

const PrimaryBtn = props => <Btn {...props} primary />;

const Btn = ({ className, primary, ...props }) => (
  <button
    type="button"
    className={classnames("btn", primary && "btn-primary", className)}
    {...props}
  />
);
```

It can help to visualize this.

```jsx
PrimaryBtn()
  ↳ Btn({primary: true})
    ↳ Button({className: "btn btn-primary"}, type: "button"})
      ↳ '<button type="button" class="btn btn-primary"></button>'
```

Using these components, all of these result in the same output.

```jsx
<PrimaryBtn />
<Btn primary />
<button type="button" className="btn btn-primary" />
```

This can be a huge boon to style maintenance. It isolates all concerns of style to a single component.

## Event switch

When writing event handlers it's common to adopt the `handle{eventName}` naming convention.

```jsx
handleClick(e) { /* do something */ }
```

For components that handle several event types, these function names can be repetitive. The names themselves might not provide much value, as they simply proxy to other actions/functions.

```jsx
handleClick() { require("./actions/doStuff")(/* action stuff */) }
handleMouseEnter() { this.setState({ hovered: true }) }
handleMouseLeave() { this.setState({ hovered: false }) }
```

Consider writing a single event handler for your component and switching on `event.type`.

```jsx
handleEvent({type}) {
  switch(type) {
    case "click":
      return require("./actions/doStuff")(/* action dates */)
    case "mouseenter":
      return this.setState({ hovered: true })
    case "mouseleave":
      return this.setState({ hovered: false })
    default:
      return console.warn(`No case for event type "${type}"`)
  }
}
```

Alternatively, for simple components, you can call imported actions/functions directly from components, using arrow functions.

```jsx
<div onClick={() => someImportedAction({ action: "DO_STUFF" })}
```

Don't fret about performance optimizations until you have problems. Seriously don't.

## Layout component

Layout components result in some form of static DOM element. It might not need to update frequently, if ever.

Consider a component that renders two `children` side-by-side.

```jsx
<HorizontalSplit
  leftSide={<SomeSmartComponent />}
  rightSide={<AnotherSmartComponent />}
/>
```

We can aggressively optimize this component.

While `HorizontalSplit` will be `parent` to both components, it will never be their `owner`. We can tell it to update never, without interrupting the lifecycle of the components inside.

```jsx
class HorizontalSplit extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <FlexContainer>
        <div>{this.props.leftSide}</div>
        <div>{this.props.rightSide}</div>
      </FlexContainer>
    );
  }
}
```

## Container component

"A container does data fetching and then renders its corresponding sub-component. That’s it."&mdash;[Jason Bonta](https://twitter.com/jasonbonta)

Given this reusable `CommentList` component.

```jsx
const CommentList = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <li>
        {comment.body}-{comment.author}
      </li>
    ))}
  </ul>
);
```

We can create a new component responsible for fetching data and rendering the `CommentList` function component.

```jsx
class CommentListContainer extends React.Component {
  constructor() {
    super()
    this.state = { comments: [] }
  }

  componentDidMount() {
    $.ajax({
      url: "/my-comments.json",
      dataType: 'json',
      success: comments =>
        this.setState({comments: comments});
    })
  }

  render() {
    return <CommentList comments={this.state.comments} />
  }
}
```

We can write different containers for different application contexts.

## Higher-order component

A [higher-order function](https://en.wikipedia.org/wiki/Higher-order_function) is a function that takes and/or returns a function. It's not more complicated than that. So, what's a higher-order component?

If you're already using [container components](#container-component), these are just generic containers, wrapped up in a function.

Let's start with our `Greeting` component.

```jsx
const Greeting = ({ name }) => {
  if (!name) {
    return <div>Connecting...</div>;
  }

  return <div>Hi {name}!</div>;
};
```

If it gets `props.name`, it's gonna render that data. Otherwise it'll say that it's "Connecting...". Now for the the higher-order bit.

```jsx
const Connect = ComposedComponent =>
  class extends React.Component {
    constructor() {
      super();
      this.state = { name: "" };
    }

    componentDidMount() {
      // this would fetch or connect to a store
      this.setState({ name: "Michael" });
    }

    render() {
      return <ComposedComponent {...this.props} name={this.state.name} />;
    }
  };
```

This is just a function that returns component that renders the component we passed as an argument.

Last step, we need to wrap our `Greeting` component in `Connect`.

```jsx
const ConnectedMyComponent = Connect(Greeting);
```

This is a powerful pattern for providing fetching and providing data to any number of [function components](#function-component).

## State hoisting

[function-component](#function-component) don't hold state (as the name implies).

Events are changes in state.
Their data needs to be passed to stateful [container components](#container-component) parents.

This is called "state hoisting".
It's accomplished by passing a callback from a container component to a child component.

```jsx
class NameContainer extends React.Component {
  render() {
    return <Name onChange={newName => alert(newName)} />;
  }
}

const Name = ({ onChange }) => (
  <input onChange={e => onChange(e.target.value)} />
);
```

`Name` receives an `onChange` callback from `NameContainer` and calls on events.

The `alert` above makes for a terse demo but it's not changing state.
Let's change the internal state of `NameContainer`.

```jsx
class NameContainer extends React.Component {
  constructor() {
    super();
    this.state = { name: "" };
  }

  render() {
    return <Name onChange={newName => this.setState({ name: newName })} />;
  }
}
```

The state is _hoisted_ to the container, by the provided callback, where it's used to update local state.
This sets a nice clear boundary and maximizes the re-usability of function component.

This pattern isn't limited to function components.
Because function components don't have lifecycle events,
you'll use this pattern with component classes as well.

_[Controlled input](#controlled-input) is an important pattern to know for use with state hoisting_

_(It's best to process the event object on the stateful component)_

## Controlled input

It's hard to talk about controlled inputs in the abstract.
Let's start with an uncontrolled (normal) input and go from there.

```jsx
<input type="text" />
```

When you fiddle with this input in the browser, you see your changes.
This is normal.

A controlled input disallows the DOM mutations that make this possible.
You set the `value` of the input in component-land and it doesn't change in DOM-land.

```jsx
<input type="text" value="This won't change. Try it." />
```

Obviously static inputs aren't very useful to your users.
So, we derive a `value` from state.

```jsx
class ControlledNameInput extends React.Component {
  constructor() {
    super();
    this.state = { name: "" };
  }

  render() {
    return <input type="text" value={this.state.name} />;
  }
}
```

Then, changing the input is a matter of changing component state.

```jsx
return (
  <input
    value={this.state.name}
    onChange={e => this.setState({ name: e.target.value })}
  />
);
```

This is a controlled input.
It only updates the DOM when state has changed in our component.
This is invaluable when creating consistent UIs.

_If you're using [function components](#function-component) for form elements,
read about using [state hoisting](#state-hoisting) to move new state up the component tree._
