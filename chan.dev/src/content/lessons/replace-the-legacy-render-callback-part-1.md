---
title: '#7: Replace the legacy render callback, pt 1'
date: 2021-12-07T12:00:00.000Z
collection: reactholiday
course: '2021'
sequence: '7'
---
Did you know that ReactDOM.render takes a callback?
It does! Or, it did. In React 18 it’s being removed.

With v17’s _legacy root API_, we could call a function after a component was mounted or updated.

```jsx
ReactDOM.render(<App />, rootNode, () =>
	console.log('Component rendered.')
)
```

Unfortunately, new features like partial hydration and progressive server-side rendering make the timing of this function confusing.
So, the _new root API_ doesn’t take a render callback.

There are two recommended strategies for replacing this API. Let’s cover the first.

This approach is quite simple. You can call requestIdleCallback or setTimeout directly after render. Your callback will execute as soon as render yields.

```jsx
ReactDOM.createRoot(rootElement).render(<App />, rootElement)
setTimeout(() => console.log('Component rendered.'))
```

Note that `requestIdleCallback` isn’t available in Safari. So, `setTimeout` might be the best default.
Tomorrow we’ll tackle the second — more invasive — option for replacing the render callback.

🐦 [chantastic](https://chan.dev/twitter)

<div class="flex">

[⬅️ back](/lessons/reactholiday/2021/6)

<div class="mx-auto"></div>

[forward ➡️](/lessons/reactholiday/2021/8)

</div>
