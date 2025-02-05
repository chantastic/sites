---
title: Host Storybook For Free with Chromatic
description: Chromatic offers free hosting for Storybook component libraries and design systems. Share your components with others on the premiere platform for Visual Testing and Review.
date: 2023-11-09
egghead: https://app.egghead.io/lessons/egghead-host-storybook-for-free-with-chromatic
status: draft
order: 18
---

[be logged into github. requires github. do everything in Arc split browser]

- Under project, we'll click the `Create a repository` button (to get this on GitHub)
  - Give it a name
- Login at chromatic.com (the easiest to fallow-along with is github)
- Add new project
  - Select the Repo we just created
- run `npm install --save-dev chromatic`
- run the build command with the token
- make a change and send a second build for comparision
- not that it captures everything, including our interactions
