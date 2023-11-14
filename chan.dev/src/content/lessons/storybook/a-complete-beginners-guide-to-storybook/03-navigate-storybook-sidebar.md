---
title: Navigate Storybook Sidebar
description: Navigate your component library with ease using Storybook's intuitive sidebar. Understand its hierarchical organization of categories, folders, and components. And filter components quickly with global search.
date: 2023-11-06
status: draft
---

To do anything in Storybook, you'll need to get good with the Storybook sidebar.

It's is the navigation center of Storybook — where you select which story appears in the canvas.

There are a icons that you'll need to be familiar with.
To get a good of everything Storybook offers, let's expand all of our stories.

We have:

[collapse each as shown]

- Docs [show both root level and component]
- Components
- Stories
- and Categories

_Docs_
: Docs can be markdown files with an `.md` or `.mdx` extension.
: Docs can also be automatically generated from components, using the `autodocs` tag. When autodocs are generated, they appear first under a component.

_Components_
: Components correlate to story files on the file system.
: And get their name from the exported metadata of the story file.

_Categories_
: Categories are groupings of components.
: They can be created by prefixing component titles and deliniating with a slash.

- Let's make a new category by changing the Category to components
- A "Component" category is dynamically created for us and our button component placed inside

_Folders_
: We can add levels of heirarchy between categories and components.
: These additional are called Folders. And can go as deeply as needed.

_Autotitle_
: This title property is not required.
: Where it's ommitted, the Categories are populated from the file system.

(Using the autotitle is my preferred approach.)

Finally,

_Stories_
: A Story is a component, fixed with data (or props).
: Our button component has four stories, each with a different set of props.

[Show these states using Controls panel]

- Primary, with the primary prop set to `true`
- Secondary, using the default prop
- Large, and Small

Now you have a good undcerstanding of the Storybook sidebar, with its:

- Docs and autodocs
- Categories (and folders)
- Components
- and Stories (unique, fixed states of a component)
