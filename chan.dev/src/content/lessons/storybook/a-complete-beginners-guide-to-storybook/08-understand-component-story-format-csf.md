---
title: Understand Component Story Format (CSF)
description: Easily capture discrete UI states using Component Story Format (CSF). Discover this straightforward approach to writing stories that are portable, composable, and easily testable. Revolutionizing your UI development workflow.
date: 2023-11-09
status: cursed
---

Now that we've covered the bulk of the UI and its intersection with code.
Let's talk about how do define stories?

Let's start with a totally new Button component story file.

- Create a new file titled `Button.stories.js`
- Import the `Button` component
- Export a default
  - Export a default object
  - Define a define a component proporty and use the imported component
- That's all that's required to make this a valid component story file.

Now we can add stories.

- Export a named function. I'll call mine `MyFirstStory` and assign an empty object.
- Now just with that object, we see a new story by that name (sidebar)
  - Albeit with a text-less button

Let's add some text but first get a sense of why we see that button even though we don't have any JSX.

We can provide prop objects to stories via Story `args`.

```js
import {Button} from './Button.jsx'

export default {
	component: Button,
}

export const MyStory = {
	args: {
		label: 'My Button',
	},
}
```

---

You only need two things to render a Story in Storybook:

- a component meta exported as default.
  - at minimum, this needs to define the optional `title` property
- finally, we need a named export that returns a function with something to render

Bing, we made our first story.

The title for our component meta definition creates a component in the Storybook sidebar.
And our named export becomes a story (with the variable name used as the story name)

```jsx
export default {
	title: 'My My component',
}

export const MyFirstStory = () => 'My first story'
```

And that's pretty much it.

To add more stories, add more named exports.

```js
export const MyFirstStory = () => 'My first story'
```

Now, at the

---

Now typically, we're documenting a component.
CSF is optimized for this.

Requirements:

- import the component you want to document
- add it to the default object
  - exporting component as `component:`
- A named export that returns a function that renders something

```js
import {Button} from './Button'

export default {
	title: 'My Stories',
}

export const MyComponentStory = () => (
	<Button label="My Button" />
)
```

Of course we need to converet this to JSX to even make this work (change to `.jsx`).

But this is a bit repetitive. Right?

---

Now, we don't see any controls like we did in the sample stories, why not?

Well, we haven't made storybook aware of this component and it's API.

We can do so by adding it to our component meta object:

`component: Button`

Immediately, we see all of the available props.

But unlike what we saw in the samples, these aren't interactive Controls, why not?

Well, we need to insert Storybook into the rendering chain so that the component can be rendered with control data.

We do that thru Args.

Every story function takes args as an argument,
which can be spread out over the component.

```js
export const MyComponentStory = (args) => (
	<Button label="My Button" {...args} />
)
```

But you'll notice that even though the story

And sence we have all that data, we can generate some autodocs, by adding the `autodacs` tag to our component meta.

```js
tags: ['autodocs']
```

<!-- While we're in component meta, let's use that this component to infer some documentation for us.

`tags: ['autodocs']` -->

---

Like, if i want to create another story iteration of this component, I have to write that entire component again, with all the probs, and whatever else different I want.

```js
export const MySmallComponent = () => (
	<Button size="small" label="My Button" />
)
```

It'd be nice if we could break this down to _just_ the props that are different for each iteration.

This is where CSF really shines.

This is called CSF object syntax. And it does something really neat.

```js
import {Button} from './Button'

export default {
	title: 'My Stories',
}

export const MyFirstStory = () => (
	<Button label="My first button" />
)
```

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

```

```
