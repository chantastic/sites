---
title: Context Module Functions
date: 2023-09-08
---

[Highlight title]

Context Module Functions are an effective React pattern that don't have an official name.
So you may have trouble googling it.
But it's well frequented pattern been recommended by the React core team and can be seen in the React Dev Tools.

Let's dive into the example…

[Highlight code]

We have a `CounterContext` with a `CounterProvider` function that uses the `useReducer` hook.
Jumping to the `Counter` component, we see `useReducer`'s `dispatch` function directly.

This is commonly known as a 'leaky abstraction'. A place where we've created an abstroction but it exposes it's internal implementation details.

[Highlight problem and solutions]

In this exercise you'll observe how this can be a problem with a some possible but short-sited mitigations.

Read through this background and then jump into the exercise.

[Highlight exercise]

In the excerise you'll find a module with `UserReducer` and `UserProvider` which has a near identital shape to the example `CounterProvider` (from our lesson).

We have a `useUser` custom hook that consumes that Context for us.
With `UserSettingsPage` consuming that hook.

Looking at the example, we see a form and the underlying state.
If we update the `bio` property with `I am awesome.`, we see the field update after a short delay.

Note that we saw dots while the update was in process and a check once it was committed.
But we can trial a failure by typing the word 'fail' here. We'll then see that the state roles back if it can't be committed.

Your assignment is to take this handleSubmit function and update it to use the Context Module Function.

[Highlight code]

Give it a try and I'll see you on the other side of the exercise.
