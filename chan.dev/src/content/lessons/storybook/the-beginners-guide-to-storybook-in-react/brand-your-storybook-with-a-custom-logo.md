---
title: Brand Your Storybook with a Custom Logo
description: Personalize your Storybook workspace by adding a custom logo. Learn how to make your component library an integral part of your project's identity.
date: 2023-11-09
status: cancelled
order: 16
---

Let's make Storybook a project logo.
We'll start by putting all the pieces in place.

- In the `.stoyrybook` directory, create a new `manager` module.
  - Import `addons` from "@storybook/manager-api"
  - And `create` from "@storybook/theming"

```ts title="./storybook/manager.ts"
import {addons} from '@storybook/manager-api'
import {create} from '@storybook/theming'
```

Add an image to the `/public` directory. (Storybook 7 serves this directory by default.)

Now we're ready to set up a custom theme.

## Set persistant light or dark color scheme

Create a new config object using `addons.setConfig`.

Use the create function to provide the `theme` property.

```ts title="./storybook/manager.ts" ins={4-6}
import {addons} from '@storybook/manager-api'
import {themes} from '@storybook/theming'

addons.setConfig({
	theme: create({
		base: 'light', // in SB7 must be only light or dark
	}),
})
```

Now add `brandTitle`, `brandUrl`, `brandImage`, and optional `brandTarget` to flesh out the custom logo and where it links.

```ts title="./storybook/manager.ts" ins={5-7}
addons.setConfig({
  theme: create({
    base: "light"

    brandTitle: "My custom Storybook",
    brandUrl: "https://chan.dev",
    brandImage: "/chan-dev.png", // using publicly served /public directory
    brandTarget: '_self',
  }),
});
```

:::hidden-script

Restart to see changes.
:::

This is looknig more like yours already!
