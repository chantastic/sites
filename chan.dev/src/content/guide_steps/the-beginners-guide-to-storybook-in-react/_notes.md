# Challenges to Learning

In developing The Beginner's Guide to Storybook 7 in React, I came across a few challenges to learning.

An ideal learning path is one where the learning can take things a single step at a time.
This can be subverted by requiesit concepts — things that must be explained or excused to teach a step.

This is a collection of moments where I had to step back, zoom out, side-step, or dismiss concepts.
And how I think we could resolve those issues.

My goal with all of these is to empathize with learners and ensure that we don't include things that only serve our vanity.
Everything included should be directly applicable to their work building component libraries and design systems.

## Course removals as a result of too many requisite concepts

- Removed viewports lessons.
- Removed theming. Losing the default `system` theme is a bad look.
- Minimized Actions.

## Sample Stories

### Separate sample sandbox stories from sandbox tests

_Problem_: Example stories include complications that serve tests more than users.

_Proposal_: Separate user-facing sample stories and Storybook-contributor test stories. Only generate user-facing stories in `init` and `sandbox`.

### Rename /stories directory

_Problem_: The `/stories` directory strongly implies that stories should be separated from code. It also doesn't match the category of `Examples`.

_Proposal_: Replace `/stories` directory name with `/examples` or `/sample-stories`. Depend exclusively on auto-titles for story names.

### Replace `Button:label` prop with conventional `children` (et. al)

_Problem_: The `label` interface for children is not conventional. A conventional interface should be used for such a common pattern.

_Proposal_: Use framework convention for descendents. Utilize `ArgTypes` to restrict children for the sake of text-input Controls.

### Remove `Button:backgroundColor`

_Problem_: `Button:backgroundColor` is not realistic interface for a button.

_Proposal_: Remove the `backgroundColor` interface and control. If we really want to showcase that interface, find a more realistic component to demonstrate it with.

### Implement a `Button` descendents default (in the component)

_Problem_: One can't render a `export const Default = {}` story for Button. The resulting story looks incomplete. As the simplist sample component, this means we have to step back to explain various concepts.

_Proposal_: Ensure that `Button` can render a visually complete element without props. My suggestion is to do this at the component level, as it reduces what's required in ArgTypes.

### Change `Button:primary` interface to `Button:outline`

_Problem_: Boolean values like `primary` is discouraged practice in UI interafce design. It also makes the `Secondary` story (which leverages the default of `false`) to be very confusing.

_Proposal_: Assuming that the intent of this design is to showcase the toggle control, I'd suggest something like `transparent: true`. This retains the boolean but, and the related examples, without encouraging a bad practice.

### Rename `Primary` and `Secondary` Button Stories

_Problem_: `Primary` and `Secondary` overlap directly with DocBlocks by the same name. This makes for an incidentally confusing introduction to DocBlocks.

_Proposal_: Replace `Primary` and `Secondary` termonology `Button` story names with `Default` and `Full` (or similar).

### Remove `title` from examples in favor of auto-titling

_Problem_: `title` is an extremely confusing concept in a file-system-based-routing world.

_Proposal_: Remove `title` from sample stories.

### Add README.md to `/stories` directory

_Problem_: Developers don't realize that `/stories` is intended for deletion.

_Proposal_: Add `README.md` to indicate best practices. Yes, I think it's important that this be in code-land. Additionally, the `init/sandbox` scripts may output a message like `Sample stories have been added to the .src/sample-stories directory. Run {command} to remove those sample stories. Use the {flag} flag to initialize projets without the sample stories.`

### Move Action handlers from `preview` module into components

_Problem_: Actions should be more visible (e.g., defined on components)

_Propsoal_: Remove global config. Use new (7.6) ArgTypes API for `Button`. Use `parameters.actions` option for `Header` (because it has multiple events). This gives a clear example of why you may choose one over the other.

### Reduce comment length with short urls

_Problem_: Sample stories looked cluttered by very long comments.

_Proposal_: Register a short url like `sb.link` (which is curretly available) and create short links that link directly to framework-specific docs. e.g., `sb.links/actions/{detected-framework}`.

### Add visual feedback for component-with-no-stories state

_Problem_: Nothing appears in Storybook when there is a valid component with no stories. This makes it difficult to reinforce what `components` are in the sidebar and how to manipulate them in code.

_Proposal_: Show component in the sidebar with no story-disclosure twirldown. These could be ommitted in `build-storybook` (possibly with option). Clicking it may show an empty state page with instructions on adding stories for the `component` supplied on `meta`. Or, more simply, instructions on adding `autodocs` and links to writing stories tutorials.

### Embrace "component story file" as termonology for SB components on disk

_Problem_: The Storybook "component" verbiage makes sense in the Storybook UI. But falls apart when talking about files — where "component" should unambiguously refer to component source code.

_Proposal_: I've circumvented this by referring to the "component story files". This makes sense, given their `.stories.` suffix extenions. But I want to make sure we refer to them universally.

### Rework Viewports API

This is a much bigger problem but I'll share a few things that make Viewports exetremely difficult to teach.

- Initial viewports have no code representation. Not even in configuration. They're completely invisible to new users.
- Choosing a viewport requires that you know it's object property name, which requires source investigation.
- Viewports can't be defined inline (at the component level).
- Viewports don't have a breakpoint option — which I assume is the primary use case.

From an introduction standpoint, an ideal API may look something like this:

```js
export const MyStory = {
	parameters: {
		// object for single
		breakpoints: {
			name: 'anything',
			width: 640,
		},
		// Array for enum
		breakpoints: [
			{
				name: 'anything',
				width: 640,
			},
			{name: 'another', width: 720},
		],
	},
}
```

I [proposed some posibilities in this notion doc](https://www.notion.so/chromatic-ui/Pitch-improvements-fa26352ad1a5455583bbe12483a58aa1#6fb38592b864467bb6b6fe95f3e25d85) a bit ago.

### Add decorators demo by way of `MockAuthProvider` for page

_Problem_: The page component in not realistic component design.

_Proposal_: Utilize decorators to provide a `MockAuthProvider` component that provides `onLogin`, `onLogout`, and `onCreateAccount` callbacks.

### Allow `theme.create` to use the default theme

_Problem_: Adding a custom logo requires that one fully opt-out of the `system` theme.

_Proposal_: This is a much bigger conversation. But this shouldn't be a trade-off someone needs to make.

---

## Advanced topics

- Parameter inheritance

## editing process

- hard to teach, hard to learn

---

## Reviewer notes

Hi! Thanks for making time to review these lessons for our upcoming egghead course: _A Complete Beginners Guide to Storybook 7_.

All feedback is welcome. And I'd like to make sure that you're well equipped to provide feedback that is actionable at this stage in the process.

So, here are a few thingsy you'll want to know before reviewing.

### Audience

This is a course for Storybook beginners.
We have no intention of being exhaustive.
We will leave a lot of advanced options and insights on the table to keep it tractable for beginners.

Our definition of beginner includes designers and developers.
Anyone interested should be able to take something from this course.

## Approach

To appeal to the broadest possible audience, the course is presented in two acts.

1. An overview of Storybook UI and terms
2. Implementing features in CSF

This should allow anyone to gain an understanding of Storybook, and jump off at the point that it doesn't server them.

## Structure

The goal with these lessons is to be both progressive and atomic.

Each lesson should stictch together into a cohesive course experience.
But they'll ideally be atomic enough that we can link

_This is the area where the most review would be helpful. I have been thinking about the progressive side and less the atomic side. Let me know if there are lessons that don't seem to stand on their own (well enough)._

## These are _just_ scripts

These are just scripts used to create videos.
Don't sweat the details of grammar. But if something is technically innacurate, I'd like to know.

## Feature complete

We've done quite a bit of work to limit the demonstrated features, while still showing off a lot of Storybook's capability.
Adding features at this point could be a very big lift.
This isn't impossible but if you think something should be added, know that it will be met with immediate resistance.

## Thanks

That's it!
I applaud those who make it all the way thru.

Thanks for your help.

Chan
