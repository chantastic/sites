---
title: 'Content'
date: 2022-06-23
---

## History

I'm working out a content strategy that works for me.
I've made many attempts to get to this framework from the abstract and it never worked.
Over the past year, I've been able to explore it from the largest artifact down (at Chromatic) and have something I think I like.

## Contents

## Instructable

<small>(instructable — like uncrustable? 😄)</small>

I work in instructions.
MVPs building blocks.

So the atomic piece of content for me is an _discrete set of instructions_.

Everything outside of that is [packaging](#package).

With a set of instructions, I can rebuild the content for any platform.

All of my instructables live here: [chan.dev/lessons](/lessons/)

### Example

- Create a new `.tsx` file
- Import React
- Declare a function
  - (Be sure to name the function with a capital first letter)
- (in the body) Return a JSX element
- Export the function as `default`

```tsx
// mycomponent.tsx

import * as React from 'react'

function MyComponent() {
	return <div>This is JSX</div>
}

export default MyComponent
```

### Guiding principles

1. Start with the verb
   - ✅ "Cut the placeholder text."
   - ❌ "This placeholder text can be removed."
1. Speak in the abstract
   - ✅ "Import the React package."
   - ❌ "Import all as React from "react".'
1. Express warnings and clarifications as post-fix parentheticals. "Be sure" works as a good trigger phrase.
   - ✅ "Return an object. (Be sure to wrap return objects in parens, when returning objects from arrow function expressions.)"
   - ❌ "Return an object. Wrap that object in parens."
1. Express navigation instructions thru preceeding parentheticals
   - ✅ "(at the bottom of the file) Export MyComponent as default."
   - ❌ "Go to the bottom of the file. Export MyComponent as default."

## Package

Every platform has a [meta](#meta). And it's often — ironically — not what the original intent of the medium was.

[Shorts](#youtube-shorts)

- Looping suffix
- Instructable

[YouTube](#youtube)

- Hook
- Intro
- Instructable[]
- Close/Pitch

Blogs

- Transcribed from YouTube video
- Add summary

## Meta

Every platform has a [meta](#meta). And it's often — ironically — not what the original intent of the medium was.

Twitter (the text platform) loves visuals right now.  
Instagram (the picture platform) screenshots of tweets.  
TikTok (the background music platform) loves sketch comedy.

It's important to [package](#package) instructables for the target medium.

Here is some high-level examples that I'll flesh out later.

### Twitter

Twitter loves rich media.

- Visual explainers
- Visual summaries
- Visual walkthroughs

|             |                |
| ----------: | :------------- |
|      Aspect | 4:3, 1:1, 16:9 |
| Compression | h.264          |

### YouTube

YouTube loves high quality, expertise, explained in a novel way.

But sometimes we have to accept second best. In this case it means thoroughly explaining something as quickly as possible.

if you succeed you get subs, shares, or the opportunity to pitch a more in-depth product.

|             |       |
| ----------: | :---- |
|      Aspect | 16:9  |
| Compression | h.264 |

### YouTube Shorts

The most important part of a YouTube short is the first frame. It needs to set the context and raise a question all at once.  
Use open captions for key callouts.

|             |       |
| ----------: | :---- |
|      Aspect | 9:16  |
| Compression | h.265 |

### Blog

Instructable blogs are strange. They're just a text version of rich media, which has some advantages.

It means that they can be easily automated from rich media content.

## Workflow

- Research a narrow knowledge domain on stream
- Break it into 2-3 related but discrete [instructables](#instructable)
- Find out which topics go together in which order
- Compose a script
  - Hook, Intro, Outro, Close/Pitch (used for YouTube and social)
  - Summary (used for blog post)
- Record a looping suffix for each instructable:
  - "(That's it/And) That's how you | {{instructable outcome | 'do x with/using/in/for/when y'}}."
  - (This is used for shorts)
- Record:
  - Hook
  - Intro
  - Outro
  - Instructable[], with looping suffix
