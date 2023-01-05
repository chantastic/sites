---
---

# Introducing Concurrent Mode (Experimental) — Summary

[doc](https://reactjs.org/docs/concurrent-mode-intro.html)

## What Is Concurrent Mode?

React's solution for graceful handling of latency (network and/or cpu).

## Blocking vs Interruptible Rendering

Think of "blocking" like collaborative work on a codebase before git.  
Two people couldn't work on the same file.  
They were blocked until other work was finished.

Like git, Concurrent Mode "slices" work into into small chunks that are now "interruptible".

### Interruptible Rendering

Re-rendering blocks others from doing work.  
Techniques like throttling and debouncing help but aren't frequently come at a UX cost.  
These experiences aren't well-reflected in common benchmarks.

**Concurrent Mode fixes this fundamental limitation by making rendering interruptible.**
Using an input that filters a list as an example,  
React can paint updates to the input immediately,  
Render the list _in memory_,  
Then flush the updated list when rendering is complete.

Sticking with the branching analogy:  
Work can branch off,  
Higher priority work can be inserted,  
Then branches merged to reflect async changes.

Game dev calls this [double buffering](https://wiki.osdev.org/Double_Buffering).

Concurrent Mode reduce UI stutter and jank by delaying work.

### Intentional Loading Sequences

Transitioning from a loaded screen and an empty screen can be jarring.  
It's a better experience to delay these types of transitions until the next view is in a "good enough" state.

Concurrent Mode makes it simpler to **“skip” the “bad loading state” before showing the new screen**.  
The new screen loads in memory (like a working branch).  
The current screen remains interact-able until the new screen is complete.

### Concurrency

Concurrency allows the following:

- CPU-bound updates (e.g., creating DOM nodes, running component code) are "interruptable" by more urgent updates
- IO-bound updates (e.g., fetch) can be rendered in memory — before all data is received

**The way you use React is the same.**
**set state when _you're_ ready update the screen**

React decides how "urgent" an update is.  
But it can be tweaked where needed.

## Putting Research into Production

**The mission of Concurrent Mode is to help integrate the findings from the Human-Computer Interaction research into real UIs.**

- Too many spinners can make a page feel slower than it is
- A fixed progression of elements can feel faster than _render-as-available_
- User input feedback needs to happen immediately — high priority.

React is "baking" user interaction research into the framework.
