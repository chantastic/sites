---
title: Create a Storybook Sandbox (Starter project)
description: Launch into Storybook with a one-command setup using npx storybook sandbox. Instantly create a Storybook environment tailored to your preferred framework and language, perfect for immersive learning and exploration.
date: 2023-11-06
egghead: https://app.egghead.io/lessons/egghead-create-a-storybook-sandbox-starter-project/edit
status: post-production
order: 2
---

## Setup

[Screen: StackBlitz homepage]

To start, we're going to spin up an isolated Storybook project.

In a terminal, run the command `npx storybook@7.6 sandbox`.

Most lessons should work in any version of Storybook 7.
But the specifics may be slightly different.

A Storybook sandbox is a ready-to-code environment composed of a UI library, language, builder, and framework.

- There are a number of supported frameworks
- We'll be using `React Vite | JavaScript` for thi course

I’ll use React/JavaScript/Vite for this course.

~~But you don't have to use React.~~
~~Choose the one that best suits your fancy.~~
~~The lessons in this course are intended to work across all Storybook sandboxes.~~

This may take a minute or two to install.

Once it's done, cd into the directory and run `yarn install`.

After nistall:

- Open the directory in your favorite editor
- And run `yarn storybook` to kick off the Storybook server.

Storybook Sandboxes initialize with sample stories.
We'll use these files to learn about Storybook UI.
Then we'll re-write them from scratch.

For now, I just want you to locate them.

In the file explorer, look for a `/stories` directory.
In my React—Vite sandbox, that directory is `src/stories`.
If you chose a different sandbox, the stories may be in a different parent directory.

Open a the primary button story in both the code editor and browser panels.
Make a modifacation to the text to see an immediate change in Storybook.

[label: "Fun times with chantastic"]

Now we're set up with your first Storybook sandbox!
