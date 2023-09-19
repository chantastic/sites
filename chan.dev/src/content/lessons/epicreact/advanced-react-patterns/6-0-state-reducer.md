---
title: State Reducer
date: 2023-09-09
---

:::hidden-script

Highlight title
:::

The state reducer pattern is the most powerful React pattern I know.

Master this pattern and you'll save yourself a lot of pain.

Like all React-specific patterns, state reducers implement a general programming principle.

:::hidden-script

Tab over to inversion of control doc.
:::

Here, the principle is [inversion of control](https://en.wikipedia.org/wiki/Inversion_of_control).

:::hidden-script

Highlight text.
:::

> In procedural programming, a program's custom code calls reusable libraries to take care of generic tasks, but with inversion of control, it is the framework that calls the custom code.

:::hidden-script

Back to epicreact. Highlight resources.
:::

I strongly recommend following the provided resources and incorporating this pattern into your programming toolbox.

## Implement inversion of control via the state reducer pattern

:::hidden-script

Open sidebar to reveal included lessons.
Click on first lesson.
:::

In this lesson we'll implement the state reducer pattern into the `useToggle` hook.

:::hidden-script

Click the `Set to playground` button.
:::

Let's load the first exercise into the playground and poke around.

- As we click the toggle, the counter increments.
- Until we reach "Whoa, you clicked too much!".
- It stops counting and we hav to hit `Reset` to start over.
- _But the toggle remains enabled even after we've reached the limit. That doesn't seem right._

Jump over to the solution to see the experience we're after.

- Once we hit the limit, the toggle is disabled.
- Then re-enabled after pressing `Reset`.

Now let's jump to code.

- Open the `/playground` directory an an editor.
- The solution requires work in tow files:
  - `/playground/toggle.tsx`
  - `/playground/app.tsx`

In the `toggle` module, we find instructions for recieving a state reducer function as an option.

And in the `app` module, we find instructions for providing a state reducer that resolves the user experience challenge.

Run through the **State Reducer** and **Default State Reducer** exercises. I'll see you in the next video with my solution.
