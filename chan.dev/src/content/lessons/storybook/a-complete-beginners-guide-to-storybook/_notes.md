# Challenges to Learning

## Sample stories

- `Button` as a bizarre API, `label` vs `children` is this for multi-framework support?
- Color picker is a bizarre demo for button. That's not how people select button colors.
- `Button:Secondary` story is confusing because it uses no props
- We should just use `autodocs` as the default. `title` is hello-confusing
- stories directory should get a couple additional treatments
  1. there should be a README that commuinicates what the directory is there for and that it can be safely removed
  1. A similar message should be logged via the API
- let's call the directory `sample-component-stories`
  - `stories` suggests that stories should be isolated into a different directory (over co-located with code)
  - it's additionally confusing that components are defined inside tho stories directory
- You have to understand parameters _and_ preview.js to understand the actions addon is implemented
  - in general, I think that everything should be demonstrated close to the story
  - preview should only have comments in it.
- Long links in inline code is overwhelming to look at.
  - Create shortlinks for comment reference
  - These _could_ be codified short links, to include ui library info: `https://sb.link/actions/react`
- I'd like to see page demo include a Decorator with a `AuthProvider`
- We _have_ to show something when we have a component defined with no stories. we have to. not having it makes progressive instruction so difficult.
- The concept of a "component" is so confusing.
  - I've decided to embrace it and just teach stories from components.
    - There's a progressive map (the one i used on YouTube) but if this is a beginner's guide, i'm just going to leave out the helpful ambiguity.
- I've used the term component meta being a `default export` object. But that isn't correct. These are all fields just exported on the module.

- I don't like how viewports work. Never have. But I find them particularly difficult to explain to beginners because there's literally no onramp. Everything is hidden.
- I think we should remove the viewport lesson

## Advanced topics

- Parameter inheritance

## editing process

- hard to teach, hard to learn
