<Head>
  <title>Learn React | Essential React > Component props</title>
</Head>

# Essential React

## Component props

<iframe width="560" height="315" src="https://www.youtube.com/embed/lYEQhUBWV2I" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

As I look at this code, I see that not a lot of it is Pokemon specific. Really, this pager is pretty generic, except for this hard-coding of Pokemon here. It would be really nice if I could take this component that I want to render as a `prop`. In fact, I can. In `JSX`, I can use `this.props.component`. Now, we haven’t set up our component to take that, so let’s do that now. Here, we’ll provide that component. Now, that might feel like voodoo, the fact that just worked like that, so I’d like to use another component to illustrate a little bit of how it works, and how we can use it to compose things and make components like this Pokemon pager more generic. I’ll make a very simple, functional component called `ShowId`. Like Pokemon, it’s going to take an `Id` on props and just render it as big as it can. Now when we render a Pokemon pager we can give it any component that we want, so why not `ShowId`. Now it’s just showing the `Id` that it gets when Pokemon pager renders it here. Now, let’s say that we don’t want to definea component at all. Well we can just take this and shove it inside our component, because components are again just functions. We’ll take the props, and then render this `h1` with `props.id`, and as you’ve seen, this totally works. So all of these work. We’re going to instead use our Pokemon, and we’re going to strip Pokemon out of the name here, because honestly this is just a generic `IdPager` now. Now we’ve used composition to insert this very specific component into this generic component. This is super awesome, and we’re going to learn more ways to do that in the next lessons.
