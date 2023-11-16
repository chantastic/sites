---
title: Navigate Storybook Sidebar
description: Navigate your component library with ease using Storybook's intuitive sidebar. Understand its hierarchical organization of categories, folders, and components. And filter components quickly with global search.
date: 2023-11-06
status: draft
---

To do anything in Storybook, we need to understand the Storybook sidebar.
It's is the navigation center of Storybook — where you select which story appears in the canvas.

Let's start with the iconography.

First, expand all of the stories with this disclosure toggle.
You'll see:

[collapse each as shown]

- Docs [show both root level and component]
- Components
- Stories
- and Categories

_Docs_
: Docs are Markdown and MDX files in your Storybook directory. Docs can also be automatically generated from Storybook components that use the `autodocs` tag. [enable and disable the code]

```
src/stories/Configure.mdx
```

```js {3}
export default {
	component: Button,
	tags: ['autodocs'],
}
```

_Components_
: Components correlate to story files on the file system — those with a `.stories.` extension prefix. They get their name from the exported metadata of the story file. [quickly change the title of one]

```plaintext /[.]stories/
src/stories/Button.stories.js
```

_Categories_
: Categories are groupings of components. They too are controlled by the component title, using slashes as a delimiter.

```diff language="js"
export default {
-	title: "Example/Button"
+	title: "Components/Button"
	component: Button,
	tags: ['autodocs'],
}
```

_Folders_
: We can add levels of heirarchy between categories and components. These additional are called Folders. And can go as deeply as needed.

```diff language="js"
export default {
-	title: "Components/Button"
+	title: "Components/Atoms/Button"
	component: Button,
	tags: ['autodocs'],
}
```

_Autotitle_
: The `title` property is not required. Provided that `component` is defined (which it is, here), we can remove it and Storybook infers the structure from the filesystem.

```diff language="js"
export default {
-	title: "Components/Atoms/Button"
	component: Button,
	tags: ['autodocs'],
}
```

_Using the autotitle is my preferred approach._

Finally,

_Stories_
: A Story is a rendered component with fixed data (or props). Our button component has four stories, each with a different set of args applied.

[Show these states using Controls panel]

- Primary, with the primary prop set to `true`
- Secondary, using only default prop
- Large, and Small

Now we have a strong grasp of the Storybook sidebar, with its:

- Docs (and autodocs)
- Categories (and folders)
- Components
- and Stories (unique, fixed states of a component)
