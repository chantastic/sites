<Head>
  <title>Learn React | Essential React > Render prop actions</title>
</Head>

# Essential React

## Render prop actions

<iframe width="560" height="315" src="https://www.youtube.com/embed/6zyAIYt--DI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

We’ve done some great work in our other components making sure that concerns are separated. The data and display are not intermingled. However, this `id` pager is not a stellar example. It knows about `state`, it knows how to update `state`, but it’s also mixing these concerns of display, and at the moment these are totally uncustomizable. We have just these boring default buttons. If this were a component that we were trying to get others to use, no one would ever use it. Now, this `id` pager is already set up to use render props. It’s passing down the `id` that we used in our app to fetch a pokemon. I’d like to change it so that instead of rendering our these buttons directly, we’re just sending the actions and the application can decide how it wants to render the buttons. So let’s dive in. I like to think of things from the outside in, and if I’m consuming this component, I’d like to have two separate objects to work with. First, I need data, and second, actions to operate on that data. Now let’s start moving those actions into our render callback. For clarity, you can see that we have this data object first, and we’ll add a second object for actions. We’ll call the first action `increment`. Here we can just cut and paste the `increment` implementation from the button. The second function is going to be `decrement`. Again, we’ll simply cut and paste our `decrement` function. Now, these buttons are feed up to be moved out, we’ll cut those, and we’ll paste those in our app. And we’re getting a very helpful JSX error right here saying that attributes must only be assigned a non-empty expression. It doesn’t like the fact that these are empty, so let’s fill them in. Here we’ll use those new actions we created. `actions.decrement` for this button. And here, `actions.increment`. Let’s give it a test. Everything still works. But now we’ve pulled out this display concern from our `id` pager component and exposed the smarts as actions. We have one last step to clean up our `id` pagerm, which is that we no longer need this wrapping `div`. Now we have a beautiful `id` pager component that is only concerned with the state of this `id`, and providing actions to increment and decrement it.