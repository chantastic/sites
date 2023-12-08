---
title: Create Engaging Component Playgrounds with Args and Controls
description: Create dynamic and engaging component playgrounds in Storybook with Args and Controls. Learn how these powerful tools create an engaging and interactive documentation experience.
date: 2023-11-09
egghead: https://app.egghead.io/lessons/egghead-create-engaging-component-playgrounds-with-args-and-controls/edit
status: post-production
order: 9
---

[start on the previous story with the addons panel closed, zoomed in]

When we define stories with CSF object syntax, we get Controls for free!

Adding our subject component to our component meta, we let Storybook infer our component interface and create UI controls in the Addons Panel.

[open the addons panel].

And defining our props as `args` on those stories connects everything up for interactivity.

We didn't write any code to get this playground.
We get it for free with Storybook's `args` system and CSF Object syntax.

Let's make a Luke Skywalker sample of this component.

[Fidle with the Contrals to create the story below]

Once we have a new component expression that we like, we can create a new story for it.

```js
export const IAmYourFather = {
	args: {
		label: 'NOOOO!',
		primary: true,
		backgroundColor: 'red',
		size: 'large',
	},
}
```

Now we're cooking with two stories!
