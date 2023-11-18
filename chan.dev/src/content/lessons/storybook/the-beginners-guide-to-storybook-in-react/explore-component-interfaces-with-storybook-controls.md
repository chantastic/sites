---
title: Explore Component Interfaces with Storybook Controls
description: Uncover the power of Storybook Controls for interactively stress-testing component interfaces. Deepen your understanding of component behavior with real-time, interactive updates, enabling a thorough exploration of component capabilities.
date: 2023-11-09
status: draft
order: 5
---

In Storybook, we can interactively explore and stress-test components with Storybook Controls.

- Open a `Button` sample story.
- Click the Shortcuts cog to ensure that the Addons Panel is visible.
- Finally, focus the Controls Addon.

Storybook provides a UI control for every component arg.
We can use these to explore different outcomes.

- Change the boolean `primary` arg with this toggle control.
- Change the string `label` arg with this text input control.
- We can even change `background-color` arg with a color picker control.

[screen: visually track this section]

Storybook automatically generates Controls for stories that use the CSF3 object syntax.
In this format, `args` are defined on a story are applied to the component defined in component meta.

Unlike rendering a component and passing props directly to it, `args` involve Storybook — giving us Controls for free.

With controls, more teammates can become part of the component development and QA process — building more robust components together.
