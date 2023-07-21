---
title: MDX docs
date: 2023-07-03
---

## Intro
> [!youtube, social]
> YouTube, Social

Storybook has full support for [MDX]().  
> [!b-roll]
> screen: typing markingdown then using a React component

Markdown + React components? It's the dream, right?  
Storybook takes that dream even further with a full set of components for adding great documentation to your components.  

> [!b-roll]
> screen: adding blocks to new docs page template

let's dive in.

## Add an MDX file to Storybook

> [!short]
> That's how to {title}

To add an MDX file in Storybook:

- Create an `.mdx` file where you keep your stories.
- The name used on the file system becomes the automatic title in storybook.
- Write any markdown you want.
- Then import and render any components.

> [!short]
> MDX in Storybook make it easy to write documentation in markdown while utilizing the components in your component library or design system.

> [!full]
> Storybook has built-in support for MDX. So you don't have to do anything special. Just start writing.

```mdx
import { Button } from "./Button.tsx";

# Button

Primary UI component for user interaction

<Button primary={true} label="Button" />
```

## Use Storybook Doc Blocks in MDX

> ![bug] > `<Meta />` only seems to work when imported as a named export (directly). Not when using property accessy on a module object `* as DocBlock` `DocBlock.Meta`.

> [!short]
> That's how to… {title}

> [!fullvideo]
> For the title and description, I'd like to use the data we have defined in our component and eliminate this one-off text.
> [! b-roll] show component definition

- (In an MDX file)

- Import everything from your `.stories` file
- Import Storybook doc blocks components `Meta`, `Title`, and `Description`
- If we try and render the `Title` and `Description` now, we see an error saying that we need to define `Meta`
- Use `<Meta of={} />` to set `ButtonsStories` stories as the context for all of the doc blocks components.
- This time the error suggests that the story moved. Using `<Meta of={}>` automaticually placed this document with our other button stories.
- And now that we're using the stories, we can delete these duplicated text blocks.

> [!short]
> Re-using metadata ensures that your documentation stays in sync with component code. And you just saw how easy it is to achieve with Storybook doc blocks.

> [!full]
> Now our documentation will stay in sync with our source code and story files. But can we do the same for this story here?
> [!b-roll] showing the code with the docblocks but story still one-off
> Yes.

```mdx
import { Button } from "./Button.tsx";
import * as ButtonStories from "./Button.stories.tsx";
import { Meta, Title, Description } from "@storybook/blocks";

<Meta of={ButtonStories} />

<Title />
<Description />

<Button primary={true} label="Button" />
```

## Add Stories to MDX

> [!short]
> That's how to {title}

> [!full]
> 

- (In an MDX file using doc blocks)
- (import your storie file and doc blocks)
- Use the `<Stories />` doc block to render all of the stories in your story file.

  - Use the `of` prop to provide the entire `Stories` module object.

- But let's say we wanted to get to…

- Use the `<Story />` doc block to render a single story.
  - Use the `of` prop and use property access to provide the selected story to the `Story` component.
- (alternatively, you can import them directly using their named exports)

## Outro

MDX + docblocks is a real godsend for component-driven documentation.
When I first started implementing component libraries and design systems in Rails, we had to rig together 5 very different tools and the experience was still bad. This is awesome.

Well that's it for today's quick tip.
Check out one of these videos if you want to start generating docs automatically. And get subscribed to see our upcoming overview of all the doc blocks.

Thanks for watching. I'm chantastic. And I'll see you in the next one!