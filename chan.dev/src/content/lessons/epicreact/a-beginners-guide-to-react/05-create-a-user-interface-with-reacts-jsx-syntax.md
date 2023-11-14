---
title: 'Create a User Interface with React’s JSX syntax'
date: 2023-11-01
status: draft
source: https://egghead.io/lessons/react-create-a-user-interface-with-react-s-jsx-syntax
---

Draft

- React community uses JSX (XML syntox for writing React elements)
- Convert the demo to JSX
- This doesn't work because this is non-standard syntax.
  - We need to convert it
- Babel is a tool that converts JSX to JavaScript
  - Check out the playground to see what it does for our JSX
  - with the exception of a few annotations, this definition is the same as what we wrote by hand.

Let's get babel processing this script

- Add a `script` tag to include `@babel/standalone` from `esm.sh`
  - and make sure it's `type=module`
- Change the `type="module"` to `data-type="module"`
  - (Telling babel that this is should be processed like a module)
  - Then make the type `text/babel`
    - Ensuring that everything gets processed as Babel
- Now change the children to `Hello <em>React with JSX</em>` (so we can see the change)

When we save this and refresh, we see:

- The updated text,
- (When we inspect) A script tag that was dynamically created, with our babel-compiled code,
- And a warning…

> You are using the in-browser Babel transformer. Be sure to precompile your scripts for production - https://babeljs.io/docs/setup/

Which is a good reminder.
What we're doing here is just learning how React works.
We're not building a production grade app.

To do that, I recommend the [_Start a New React Project_ page on the React docs](https://react.dev/learn/start-a-new-react-project#production-grade-react-frameworks).
This will lay out all of the recommended options and trade-offs for starting a new project with a production-grade framework.

```html
<body>
	<div id="root"></div>
	<script
		type="module"
		src="https://esm.sh/@babel/standalone@7.23.2"
	></script>
	<script type="text/babel" data-type="module">
		import React from 'https://esm.sh/react@18.2.0'
		import ReactDOM from 'https://esm.sh/react-dom@18.2.0/client'

		const rootElement = document.getElementById('root')
		const element = (
			<div className="greeting">
				Hello <em>React with JSX</em>
			</div>
		)

		ReactDOM.createRoot(rootElement).render(element)
	</script>
</body>
```

---

GPT take

In this lesson, we're switching gears to JSX, the syntactic sugar that makes writing React elements a breeze.

Add the Babel script tag to your HTML to enable JSX processing in the browser.
Change the existing script tag's type attribute from "module" to "text/babel" to cue Babel's processing.
Inside the script tag, replace the React.createElement call with JSX syntax.
Update the content within the JSX to "Hello <em>React with JSX</em>" to see JSX in action.
Once saved, upon refresh, you'll witness the magic:

Your browser displays the updated text, "Hello React with JSX".
Inspect the page to see the new script tag with the transpiled code.
Remember, this setup is for educational purposes. For production, you'll want to precompile your JSX. The React documentation offers guidance for setting up production-grade applications.
