---
status: active
effects:
  - grow business
  - support friend
---

## Tasks

- [ ] Book travel
  - [x] Await budget. $450, include travel insurance ✅ 2024-02-20
  - [x] Book outgoing flight $138.98, 4/9 ✅ 2024-02-27
  - [ ] Book return (or 2nd leg) flight
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

