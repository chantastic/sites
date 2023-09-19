---
title: Context Module Function, solution
date: 2023-09-08
---

Our assignment was to take the `handleSubmit` function logic and move it to a Context Module Function.

- Cut the logic from `handleSubmit`.
- Create a new function, named `updateUser`.
- Paste the function implementation.

With this new function, we need to identify all of the missing dependencies and take them as functions arguments.

- First is `userDispatch`, which we'll take as `dispatch`.
- Then take a `user` object.
- And finally, the `updates` (or changes) we intend to make.

Then we need to return this promise — so future consumers can continue the promise chain (with additional functionality).

- Then remove this `userDispatch` naming dependency by taking `dispatch` as an argument.
- Note that we have red squiggles because `formState` and

## Import and call our function
- map internal values to function arguments

TODO