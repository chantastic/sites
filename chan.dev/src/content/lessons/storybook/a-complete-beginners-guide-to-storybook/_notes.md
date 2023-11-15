# Challenges to Learning

## Proposed course changes

- Remove viewports instruction. Too many requisite concepts.
- Remove chromatic lesson. Feels orthogonal.
- Move integration with your application lesson to end. Better hand-off.

## Sample stories

### Button

- `Button` interface is as peculiar. is `label` used over `children` for multi-framework support?
  - Supporting children/slots/etc. seems like a critical part of an integration.
  - Could changing the example actually aid framework support (as a test case)?
- Color picker is an impractical demo for button. It demos a nice component but isn't connected to real world.
  - Is there another component where color picker may make more sense?
  - If not, I think it should be removed.
- `Button:Secondary` story is confusing because it uses no props.
  - I'd like to see the primary component state be the default state (no args).
    - This makes the demos more progressive and easier to grok.
  - There is a natural collision here with DocBlocks `Primary` story.
    - Consiquently I think that the DocBlock should become `First`

### All

- `title` is hella confusing to a newcomer (likely familiar with file-system based routing).
  - I'd like to see auto-title (with `component` meta) as the default.
- The `stories` directory poses some practical and conceptual issues
  - People don't know realize that `./stories` isn't the golden path.
    - Could be solved with `./sample-stories`.
  - People don't know that it can safely be deleted.
    - Add `README.md` with details.
    - Initializer could say something like `Sample stories have been added to the .src/sample-stories directory. Run {command} to remove those sample stories. Use the {flag} flag to initialize projets without the sample stories.`
- Actions depend on too many requisite concepts (pramaters, argTypes, and preview) and Regex.
  - Everything should be demonstrated on-story or on-component.
  - `preview` can have comments for the global options
- Comment links are too long.
  - Short links would be helpful here.
  - `sb.link` is an available domain. We should get it for short links.
    - These _could_ be codified short links, to include ui library info: `https://sb.link/actions/react`.
- Nothing is shown when there is a component with no stories. This makes progressive instruction difficult.
  - We could show a component in the sidebar.
    - Simplest solution would be to have it be disabled in the sidebar.
    - More advanced solution is to leave it enabled with an an empty-state page for creating a sample story from the `component` provided on meta.
- The concept of a "component" in Storybook is confusing.
- The Viewports interface is extremely confusing to me.
  - Problem is that literally all the information is hidden and requires touching 2-3 files to use.
  - I'd like a path where we could implement a viewport inline (at story and component)
  - I'd also like to see a `breakpoint` variant, which we've discussed before.

## Page

- The current page demo does not accurately represent a page.
  - Could be interesting to see a sample `AuthProvider` implemented as a decorator.
    - Like with `Button`, this will push sample stories more into the territory of framework-specifics.

## Misc

- The concept of a "component" is so confusing.
  - I've decided to embrace it and just teach stories from components.
    - There's a progressive map (the one i used on YouTube) but if this is a beginner's guide, i'm just going to leave out the helpful ambiguity.
- I've used the term component meta being a `default export` object. But that isn't correct. These are all fields just exported on the module.

## Advanced topics

- Parameter inheritance

## editing process

- hard to teach, hard to learn
