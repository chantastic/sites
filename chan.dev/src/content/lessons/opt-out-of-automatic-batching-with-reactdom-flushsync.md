---
title: '#10: Opt out of automatic batching with ReactDOM.flushSync'
date: 2021-12-10T12:00:00.000Z
collection: reactholiday
course: '2021'
sequence: '10'
---
Automatic batching of state update is a great improvement in React 18.

But even performances improvements — like this — create an opportunity for bugs. There's a chance that our app might rely on non-batched updates unintentionally.

So when we see batching bugs, there's a quick way to back into the old behavior and continue our migration: `ReactDOM.flushSync`.

This method wraps state updates to force a re-render. It looks like this:

```jsx
ReactDOM.flushSync(() =>
	updateCount(c => c + 1);
)
```

This is a bandaid.
It's a great way to patch up a bug. But it's always better to root out batching bugs and update the code to allow for the faster, more consistent default of automatic batching.

🐦 [chantastic](https://chan.dev/twitter)

<div class="flex">

[⬅️ back](/lessons/reactholiday/2021/9)

<div class="mx-auto"></div>

[forward ➡️](/lessons/reactholiday/2021/11)

</div>
