<Head>
  <title>Learn React | Essential React > Render props</title>
</Head>

# Essential React

## Render props

<iframe width="560" height="315" src="https://www.youtube.com/embed/tqyfT8vu8MU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Now there’s one thing that niggels a little bit about this setup. We have an id pager and it takes a component, and that's great, but we have this coupling here where any component we provide needs to take id as a prop. If we go up to our Pokemon component, we can see that we do expect id as a prop. We use it all over the place. But what if we wanted to use a component that uses a prop named `index` instead of `id`? Well we’re kind of hosed. It would be real nice if our id pager didn't care. Now, we can make it not care with a function. Let’s say instead of a component, we said “Hey, this is what I want you to render. Give me props as an argument, and then I’ll do whatever I need to do to render the thing that I care about”. So take some props, render the thing that I care about, using those props. So what does it look like inside of our component? When you call it like a function, `this.props.render`, and give it the data that we care about, which is `id: this.state.id`, get rid of our component version, and see that everything works the way we wanted it to. Now, additionally it gives us control down the road if we decide that now we want to style this in a very specific way for this context. This could be a big Pokemon, or a featured Pokemon. Instead of being locked down to the implementation, we have the freedom to do anything that we want here, and we can use any component, because we can map props id to index or `characterId`. We can map it to however this component is set up to take props. And that is very cool, and extremely powerful. I’ll tell you right here, this is how I compose most of my components most of the time.
