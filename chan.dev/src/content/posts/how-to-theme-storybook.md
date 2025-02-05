---
title: How to Theme Storybook
publishDate: 2023-09-20
thumbnail_concept: Storybook UI with my face as the badge
tags: [storybook]
references:
  - https://storybook.js.org/docs/react/configure/theming
tldr: |
  Make Storybook your own with a custom brand image, base theme, and colors.
  - 🤳 Use your brand image
  - 🎨 Use your brand colors
  - 🌓 Set light or dark mode preference
shoutouts:
  - storybook
cover: ./how-to-theme-storybook/how-to-theme-storybook_thumbnail.png
coverAlt: Two frame thumbnail. The left frame is a big red box with Storybook UI. The right frame is a big green box with a blurred out UI with what looks like my stupid face where the Storybook logo is.
---

Let's make Storybook our own with a custom theme!

It's super easy, you just need a 7:3 aspect ratio logo, text editor, and a strong preference for light or dark mode.

Let's dive in.

## Initial setup

This tutorial requires uncommon setup.
So, let's get that out of the way.

- In the `.stoyrybook` directory, create a new `manager` module.
  - Import `addons` from "@storybook/manager-api"
  - And `themes` from "@storybook/theming"

```ts title="./storybook/manager.ts"
import {addons} from '@storybook/manager-api'
import {themes} from '@storybook/theming'
```

Add a 350x150 image to the `/public` directory. (Storybook 7 serves this directory by default.) I have a `350x150` .png with a transparent backgroup.

![7:3 aspect ration image of me making a Home Alone Cologne face behind the text chan.dev](./how-to-theme-storybook/how-to-theme-storybook_chan-dev-logo.png)

Now we're ready to set up a themes.

## Set persistant light or dark color scheme

Create a new config object using `addons.setConfig`.

Provide an object with a `theme` property and use one of the preconfigured themes. `themes.normal` is the default and respond's to the user's preferred color scheme.

```ts title="./storybook/manager.ts" ins={4-6}
import {addons} from '@storybook/manager-api'
import {themes} from '@storybook/theming'

addons.setConfig({
	theme: themes.normal,
})
```

However, you can set an explicit theme with options `light` or `dark`.
Ensuring that Storybook looks the same indifferent to user's system theme.

```ts title="./storybook/manager.ts" del={5} ins={6}
import {addons} from '@storybook/manager-api'
import {themes} from '@storybook/theming'

addons.setConfig({
	theme: themes.normal,
	theme: themes.light, // or themes.dark
})
```

:::hidden-script

Restart to see change.
:::

## Setting up a custom theme with `create`

Now we're using a `light` theme but our our configuration options are limited.
Refactor this config object to allow for a custom image and colors.

- Import the `create` method from `@storybook/theming`.
- Replace `theme.light` with `create({ base: "light"})`

```ts title="./storybook/manager.ts" del={2,6} ins={3,7}
import {addons} from '@storybook/manager-api'
import {theme} from '@storybook/theming'
import {create} from '@storybook/theming'

addons.setConfig({
	theme: theme.light,
	theme: create({base: 'light'}),
})
```

These are functionally identical. But creating a theme opens more options. And the `base` option to override and extend theme values without having to specify _every_ value.

:::hidden-script

Restart to see changes.
:::

## Add brand image to Storybook

We all know that the most important part of any project is the logo!
Let's add ours using our custom theme

Add `brandTitle`, `brandUrl`, `brandImage`, and optional `brandTarget` properties to the theme object.

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

## Set brand colors and typography

With our theme in place, Storybook accepts a number of options for general theming.
Let's explore a few:

For a full list of theming values and options, check out the post listed in the description below.

```ts title="./storybook/manager.ts" ins={6-12}
addons.setConfig({
  theme: create({
    base: "light"
    /* FOLD: …brand image… :FOLD */

    colorSecondary: "#ffcc00",
    appBg: "#f0f0f0",
    appBorderColor: "#ccc",
    appBorderRadius: 0,
    textColor: "#333",
    barTextColor: "#666",
    barSelectedColor: "pink",
  }),
});
```

:::hidden-script

Restart to see changes.
:::

## Outro

Now you know how to theme Storybook!
We leaned how to make Storybook your own with a custom brand image, base theme, and colors.

If you have specific areas of Storybook that you'd like to theme that aren't covered, checkout [Storybook's theming doc](https://storybook.js.org/docs/react/configure/theming). It includes an exhaustive list of themeable values and some riskier styling options 😄.

:::hidden-script

That's it for today.
Check out one of these videos to learn more about Storybook.
I'm [@chantastic](https://x.com/chantastic). I'll see you in the next one. Bye.
:::

## Prefer video?

Watch on YouTube!

<div data-responsive-youtube-container>
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/x2nGXHAKOrE?si=5DEjO8kWB2cxyuMQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
