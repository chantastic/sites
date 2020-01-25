<Head>
  <title>Learn React | Essential React > Props</title>
</Head>

# Essential React

## Props

<iframe width="560" height="315" src="https://www.youtube.com/embed/os20uGygwvs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

A component that statically renders the same message every time is not particularly useful. It would be useful it we could pass in a name as an argument. All functions take arguments, and so do React components because they are, after all, just functions. So we pass argument through props, which look like HTML attributes. I can find a name on here. Let’s use mine, “Michael”, and then use that in the greeting component function. Now unlike traditional argument, instead of them having an order, this is going to come in as a big, gigantic object of these properties, or “props”. I can take that argument and then use the values that I get in my component. I use these little curly braces to say this is going to be a Javascript expression, and say `{props.name}`. Now I’m using props to provide a name dynamically to my functional component. This name can be anything. It can be “Bob”, or “Sally”, or “Bulbasaur”. Props are, quite simply, just an object of all of these attributes that get passed in to our function.
