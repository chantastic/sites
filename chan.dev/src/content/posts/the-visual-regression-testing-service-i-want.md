---
title: The Visual Regression Testing Service I want
date: 2023-08-18
---

I want a visual regression testing service designed for indie developers, not enterprise.

In 2010, I started a career in what would eventually be called design systems.
I did so at a few companies. An e-commerce company, a whitelabel wellness services provider, and a church management software. All became teams large enough to have people dedicated to choosing their own tools and building their own environment.

All that time, I wanted a tool for visual regression testing UI. And in 2018, [Chromatic built it]().
Only problem is that I had to use Storybook.
Storybook is… fine. But it's a lot.

Of course, if you're privileged enough to build UI for an enterprises, chances are your component library it's own package and you don't mind using Storybook as your development environment. I didn't.

But I would never install it for a "normal project".

So for the past 2 years, I've been low-key fixated on what Storybook looks like… without Storybook.
And what the criteria are for a general purpose visual regression testing service would be.

## Component Story format
Component Story Format is the crown jewel of Storybook innovation.
I see it as the "stories" part of Storybook and what I want everything to work on.

CSF is more convention than anything else.

- `default` contains a bunch of metadata about the component you're writing stories for.
- every named export is a "story"
- and stories are written in object syntax