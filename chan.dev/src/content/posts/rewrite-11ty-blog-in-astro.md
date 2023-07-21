---
title: Astro
description: "Rewriting a site in Astro for content-forward conventions, 'islands' concept, React productivity, and easy UI library demos integration."
publishDate: 2023-01-16
---

I’m re-writing my site in Astro. You can find [my reasons for leaving 11ty here]().

This page is notes on the ground-up rewrite of a blog in Astro, featuring heavily customized markdown, tag collections, a feed page, sitemap, and rss feeds.

This is not a tutorial. You won’t find elaborate step-by-step instructions, but high-level decisions and outcomes.

## From starter or from scratch?

Astro provides several ways to start a blog:

- [Official blog starter](https://astro.build/themes/details/blog/)
- [Community starters](https://astro.build/themes/blog/)
- [In-depth tutorial](https://docs.astro.build/en/tutorial/0-introduction/)

When I say “in-depth” I mean, it really seems like they’re assuming you’ve never programmed before. Fortunately, you can [skip to Unit 2](https://docs.astro.build/en/tutorial/2-pages/) and bypass all the “This is a code editor” stuff that doesn't belong in this type of tutorial.

---

## Installation

```sh
npm create astro@latest
```

This starts a cli wizard.
You'll select a starting template and typescript preferences.

You can chose between three project types:

```sh
❯   a few best practices (recommended)
    a personal website starter kit
    an empty project
```

I tried all of them and they cleanly do what they say on the tin.

But for this particular project (a port from a previous site), I'm looking for as little existing opinion as is reasonable.

I chose `a few best practices (recommended)` because it has the common folder structure of `components`, `layouts`, and `pages` is seem "best practice" in Astro.

```sh
╭─────╮ Houston:
│ ◠ ◡ ◠ Let's build something awesome!
╰─────╯

astro v1.9.2 Launch sequence initiated.

✔ Where would you like to create your new project? … loose-light
✔ How would you like to setup your new project? › a few best practices (recommended)
✔ Template copied!
✔ Would you like to install npm dependencies? (recommended) … yes
✔ Packages installed!
✔ Would you like to initialize a new git repository? (optional) … yes
✔ Git repository created!
✔ How would you like to setup TypeScript? › Strict
✔ TypeScript settings applied!

next Liftoff confirmed. Explore your project!

         Enter your project directory using cd ./loose-light
         Run npm run dev to start the dev server. CTRL+C to stop.
         Add frameworks like react or tailwind using astro add.

         Stuck? Join us at https://astro.build/chat

╭─────╮ Houston:
│ ◠ ◡ ◠ Good luck out there, astronaut!
╰─────╯
```

## "Best practices"

An aside on "best practice."

The idea of having dedicated, root-level `/components`, `/layouts`, and `/pages` feels very `next@old-and-busted`. [SvelteKit](https://kit.svelte.dev/) is leading innovation in file-system based routing and I'd welcome it in Astro.

## So, why not SvelteKit?

So, if I think SvelteKit is the most innovative framework, why not build my blog with SvelteKit?

That's a good question.

- I like that Astro has few blog/content-forward conventions
- I like the "Islands" concept for content sites, like a blog
- I'm still most productive in React
- Astro would let me easily add demos to my site using any UI library

For those reasons, I'm willing to concede a less progressive and productive folder structure.
