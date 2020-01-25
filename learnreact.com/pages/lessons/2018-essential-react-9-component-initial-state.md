<Head>
  <title>Learn React | Essential React > Component initial state</title>
</Head>

# Essential React

## Component initial state

<iframe width="560" height="315" src="https://www.youtube.com/embed/3L6TZx_Djmw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Our clap component is very uninteresting if it can’t actually keep the number of claps, or if it’s static the way that we have it here where it’s just alerting one clap, when it has no interest in actually retaining claps clapped. Now the cool thing about our class components is that they can keep state. So let’s start by defining an initial state. We do that in the constructor of our class. With all constructors we need to call “super” first. Then we can assign a state to every instance as it gets created. Our state will be an object with `claps=0`. There will be zero claps when we start. Now our component appears to work because we hit claps the first time we get one claps, but the second time we also get one clap because we’re just statically printing that out. However, we can make that a little bit more dynamic by alerting `this.state.claps + 1`. While that doesn’t actually retain the state, we can see that this one clap is at least dynamically created off of this zero number from our initial state. That is progress.
