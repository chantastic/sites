---
status: active
effects:
  - grow business
  - support friend
---

## Tasks

- [x] Book travel ✅ 2024-04-08
  - [x] Await budget. $450, include travel insurance ✅ 2024-02-20
  - [x] Book outgoing flight $138.98, 4/9 ✅ 2024-02-27
  - [x] Book return (or 2nd leg) flight ✅ 2024-04-08
- [ ] Write talk
  - [ ] Create checkpoint pieces of work
    - [ ] Write outline

## Talk outline

**Snapshot-Driven Development: Capture Visual Tests in Flow**

> What does component-driven development mean in an age of full-stack components? How can we capture critical testing data as we develop components, flows, and applications. In this talk we'll breakdown what Storybook gets right and how Epic Stack can create a better snapshot-driven DX.

- So this is how this talk is going to go.
  - I'm going to say something totally stupid. Then spend 19 minutes atempting to justify it.
  - It's this tweet: [we’re a good declarative constraint system and automated test generator away from being replaced by ai](https://x.com/chantastic/status/1753866537415663621?s%253D20)
- [Possibly start with end example of AI writing the component]
- Take a step back and think about what application development is
  - Financial incentive > business requirements > acceptance criteria > software development > testing > profit
    - This *will* compress over time to Financial incentive > profit
  - Everything becomes more declarative over time
    - HTML > DOM > jQuery > React > v0
  - Constraint systems are what remains.
  - "We are not declarative"
    - [Insert memes of PMs not doing anything. Reframe as 'these are people waiting to replace you with AI'.]
- If you accept this as true, the next big thing is constraint based systems for declaratively building entire applications (but consistently).
  - Visual test case building is our near term future
    - Of course eventually, I think the evolutaion of large action models will make every website an API and it won't matter. But that's far term-future. At the moment, we're still building software for humans.
  - Declarative vs imperative testing
- What I see the (near-term) future looking like
  - Storybook's Component Story Format (CSF) is the closest thing I've seen to such a declaration model for UI
  - [DEMO UI dev today]
- Now imagine that that the code itself were generated.
  - Repeatable
- CTA
  - Build the next greate generative testing tool
  - …embeddable
  - …on vite/vitest
  - …using CSF
  - "it's time to level up again in what we think of as `declarative` UI ubilding"

Possible checkpoints:
- [ ] Quick demo of ideal visual testing setup and how to capture tests in flow with CSF
- [ ] Demo of how this could work with generative AI actually writing the components
  - [ ] I think copy-pasting (for the case of this demo) is sufficient
  - [ ] Leave with the notion of. Build this into the Epic Stack (atop vitest)

## Workshop proposal

**Visual Testing UI with Storybook**

## 04-08-2024

- Hired: Storybook to Web Devs (UI Dev)
	- Funnelling vs Why
	- Talks
	- SB: very interesting testing solution
		- CSF3 is genius
			- https://storybook.js.org/docs/api/csf
			- https://github.com/ComponentDriven/csf
			- Object syntax
			- https://www.youtube.com/watch?v=Waht9qq7AoA&t=34s
			- Killer features
				- composition
		- Ideas in the space
			- Playwright
			- SB
			- Cypress
			- etc.
			- JSDOM
				- (the old way)
		- Difference
			- "2nd environment problem"
				- only a problem for DEVs
				- Design systems (Figma, Storybook)
				- Component Libaryr (Storybook, Ladel)
- Examples
	- Tic-tac-toe is good
	- Epic Web workshop
		- tic-tac-toe
- Termonology
	- Story
	- CSF
	- "Stories without Storybook"
	- interactive UI test
	- visual test
- Anecdotes
	- My job at Storybook
	- What Astro taught about what I wanted from Storybook
		- chan.dev
		- wanted to use storybook for interactive components
			- Pick a framework for Storybook
			- No .astro
		- CSF directly
			- .stories
			- my/page/path/stories
				- in `dev`
	- Maybe Storybook "tries to hard"?
		- The right layer of integration is CSF
			- Why?
				- "2nd env problem"
				- mirror
					- this can't happen without a ton effort
					- why do i want to recreate Next.js?
						- Next.js webpack => turbopack?
						- How to support new unknown (Astro)
					- exponential problem as ecosystem develops
	- **CONSCIOUS UNCOUPLING**
		- https://goop.com/wellness/relationships/conscious-uncoupling-2/
		- solar system metaphor
			- https://giphy.com/gifs/solar-system-Sugs8e7Qm44a4
			- independent movement toward same goal
		- Storybook *seems* like an uncoupling
			- And duplicated config even seems to attest to how uncoupled it is
			- Two things that have to remain synced to be work effectively are coupled
- Concerns
	- Having to choose a framework seems like weird constraint when selecting a UI- documenting tool
		- No reusability?
			- CSF using testing-library, should be able to re-use even if i swap out the library of the component under test
	- Sub-rant
		- I'm not a code contributor
			- acceptance: can't *own* it despite my *wanting* it
				- bad maintenance is worse than non-creation
					- caring => doing => owning
						- what does owning looking in a project that's already overrun with requstes
						- OSS maintenance, direction, hard to prioritize (exponential)
- Why is this talk happening?
	- WE NEED MORE "Storybooks" not Storybook integrations
		- Lean 100% on framework's rendering strategy
			- opts us out of client v server v ssg v ssr
			- opts us out of config dulpicating
			- we can focus on authering ergonomics
			- focus on in-framework developer experience
				- 2rd envinorment problem"
		- Increases reusablity of tests W/O having to go full e2e
- different types of testing strategies
	- UNIT
		- TS (dev-time)
		- remainder: run specifics
			- But in most cases, better via integrations
			- joining first name last name
	- Integration
		- JSDoc / Jest
			- Cypress but wanted to test styles
				- grab dom styles and test specific style values
				- reality: i just want to know it dsnoet look different
				- harness-aware, brittle tests
				- **'does it actually LOOK different'**
	- E2E
		- user-modeling problem
		- beautiful things about componnets
			- function of props
			- go as hard as you want in building test cases without some
				- no <AuthenticatedUserProvider /> context needed
			- isolated from your broader system. this isolation is a valuable aspect of components
				- correct / sound decisions at the edges of appliation design
