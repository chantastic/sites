---
title: '#13: Concurrent ''mode'' is dead'
date: 2021-12-13T12:00:00.000Z
collection: reactholiday
course: '2021'
sequence: '13'
---
We've heard that “Concurrent Mode” is coming for years. And while there were a number of attempts, this “mode” never panned out.

But the failure of “Concurrent Mode” wasn't a failure. Concurrency in React 18 is better than ever! Today I want to make sure you have the right mental model for the concurrent capabilities of React 18.

With the exception of the automatic batching changes we covered, APIs available in React 17 behave the same in React 18. Full stop. If they don’t that’s a bug.

Components that make use of new APIs like startTransition, useTransition, and useDeferredValue, will opt their component trees into concurrent rendering.

This is another product of React’s gradual adoption strategy. You can upgrade to React 18 without concern learning about concurrent rendering in React. You can learn — just in time — as you utilize the new suite of concurrent features.

This strategy gives me confidence that code from my React 16 and 17 apps hiding bugs I'm not equipped to find.

Tomorrow we’ll dive into these new concurrent features!

🐦 [chantastic](https://chan.dev/twitter)

<div class="flex">

[⬅️ back](/lessons/reactholiday/2021/12)

<div class="mx-auto"></div>

[forward ➡️](/lessons/reactholiday/2021/14)

</div>
