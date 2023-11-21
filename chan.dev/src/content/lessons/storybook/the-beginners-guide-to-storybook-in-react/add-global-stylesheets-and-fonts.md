---
title: Add Global Stylesheets and Fonts to Storybook
description: Ensure your Storybook environment mirrors your production setup. Learn to add global stylesheets and fonts, creating a consistent look and feel across your project and component library.
date: 2023-11-09
status: draft
order: 15
---

Most projects have global stylesheets (even if just resets) and custom fonts.

In Storybook configuration that impacts the entire project can be found in the `.storybook` directory.

Open the `preview` module.
Here we can utilize the undelying bundler (Webpack, or Vite) to simply import a `css` file.

Simple as that!
Whatever your bundler allows you to do or setup will work here.

Now let's talk about fonts.
Providers like Google Fonts often give you a `link` tag to add to your `head` element.
Storybook allows us to insert arbitrary HTML into the `head` element via `preview-head.html`.

Let's create the `preview-head.html` file. Paste our font link in.
And use the CSS file we imported earlier to set it as the global font.

And just like that we've customized our globaly Storybook environment with css and fonts.
