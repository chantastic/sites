---
title: Advanced React Patterns Welcome
date: 2023-09-06
---

Have you ever create a component, function, or module that started out easy to work with but became more difficult over time?

This is extremely common in shared codebases, where we don't have a shared language and practices to follow.

This is where patterns come help.

This Advanced React Patterns workshop showcases a number of patterns that are proven to improve the flexibitily and maintainability of your code.

These patterns are collected from popular React libraries like React Router, Downshift, Radix, and more. And they hold up to the time tested princples of SOLID design.

If you've not yet worked on a sufficiently large React codebase, these patterns may come off a bit complex. But I promie that working thru these exercises will help you quickly understand libraries that implement these patterns. And prepare you for complex codebases that are begging for code clarity.

---

Let's look at the repo.

- Visit the repo
- Clone
- Run setup script

Everything exists in the exercises directory.

TODO: verify these

Context Modules Functions
: This pattern very popular at facebook for sharing context and functions that utilize that context.

TODO: I think that we should kill this one now that it's a discouraged pattern [ref](https://react.dev/reference/react/Children)
Compound Components
: This pattern is used to create multiple components that are designed to work together via nesting. (Think about how html elements `select` and `option` work together when properly nested.)
: (You'll see this toggle a lot. It's a simple component that allows us to showcase the patterns without additional complexity.)

(Flexible) Compound Components
: This pattern will go further by

Prop Collections and Getters
: TODO

State Reducer
: TODO

Control Props
: TODO

---

I'll see you on the other side of the workshop!
