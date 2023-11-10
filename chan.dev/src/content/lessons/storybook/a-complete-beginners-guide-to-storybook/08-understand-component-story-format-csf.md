---
title: Understand Component Story Format (CSF)
description: Easily capture discrete UI states using Component Story Format (CSF). Discover this straightforward approach to writing stories that are portable, composable, and easily testable. Revolutionizing your UI development workflow.
date: 2023-11-09
status: gpt
---

[Screen: Open an empty file in the Storybook code editor]

The Component Story Format, or CSF, is the standard for writing stories in Storybook. It's modular and easy to maintain, making your stories portable, composable, and testable.

[Screen: Begin typing a basic CSF structure]

Start by defining your component within this file. Remember, each component corresponds to one story file.

[Screen: Writing a simple component]

Let's say we're creating a 'Button'. Write your button component, including any props it requires to function.

[Screen: Exporting the component as a default export]

Export your component as a default export, which Storybook will use to auto-generate related stories and documentation.

[Screen: Creating a template of the component]

Create a template of your button component. This serves as a base for creating different states of your button.

[Screen: Writing the first story using the template]

Now, write your first story by cloning the template and passing props. For example, a 'Primary' button story with specific props for the primary state.

[Screen: Duplicating the story for different states]

Duplicate this story for different states of your button, like 'Secondary', 'Disabled', and so on, altering the props as necessary.

[Screen: Highlighting the Args table and Docs page]

Switch to the 'Docs' tab in Storybook. You'll see an Args table auto-generated from your stories, showcasing the different states and properties of your button.

[Screen: Summarizing the benefits of CSF]

By using CSF, you've taken a modular approach to your UI development, allowing you to capture and share discrete UI states with ease.
