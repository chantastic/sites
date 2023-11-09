let lessons = [
	// {
	// 	id: '1',
	// 	title: 'A Beginners Guide to React Introduction',
	// 	time: '5m 46s',
	// 	slug: 'a-beginners-guide-to-react-introduction',
	// },
	// {
	// 	id: '2',
	// 	title:
	// 		'Create a User Interface with Vanilla JavaScript and DOM',
	// 	time: '1m 32s',
	// 	slug: 'create-a-user-interface-with-vanilla-javascript-and-dom',
	// },
	// {
	// 	id: '3',
	// 	title:
	// 		'Create a User Interface with React’s createElement API',
	// 	time: '4m 29s',
	// 	slug: 'create-a-user-interface-with-react-s-createelement-api',
	// },
	// {
	// 	id: '4',
	// 	title: 'Create a User Interface with React’s JSX syntax',
	// 	time: '3m 19s',
	// 	slug: 'create-a-user-interface-with-react-s-jsx-syntax',
	// },
	// {
	// 	id: '5',
	// 	title: 'Use JSX effectively with React',
	// 	time: '5m 47s',
	// 	slug: 'use-jsx-effectively-with-react',
	// },
	// {
	// 	id: 'Render two elements side-by-side with React Fragments',
	// 	title: '3m 6s',
	// 	slug: 'render-two-elements-side-by-side-with-react-fragments',
	// },
	// {
	// 	id: '7',
	// 	title: 'Create a Simple Reusable React Component',
	// 	time: '5m 10s',
	// 	slug: 'create-a-simple-reusable-react-component-4c3999c5',
	// },
	// {
	// 	id: '8',
	// 	title:
	// 		'Validate Custom React Component Props with PropTypes',
	// 	time: '4m 14s',
	// 	slug: 'validate-custom-react-component-props-with-proptypes-60e63690',
	// },
	{
		id: '9',
		title: 'Understand and Use Interpolation in JSX',
		slug: 'understand-and-use-interpolation-in-jsx',
		time: '6m 32s',
	},
	{
		id: '10',
		title: 'Rerender a React Application',
		time: '3m 19s',
		slug: 'rerender-a-react-application',
	},
	{
		id: '11',
		title:
			'Style React Components with className and inline Styles',
		time: '10m 43s',
		slug: 'style-react-components-with-classname-and-inline-styles',
	},
	{
		id: '12',
		title: 'Use Event Handlers with React',
		time: '4m 7s',
		slug: 'use-event-handlers-with-react',
	},
	{
		id: '13',
		title:
			'Manage state in a React Component with the useState hook',
		time: '4m 17s',
		slug: 'manage-state-in-a-react-component-with-the-usestate-hook',
	},
	{
		id: '14',
		title:
			'Manage side-effects in a React Component with the useEffect hook',
		time: '2m 49s',
		slug: 'manage-side-effects-in-a-react-component-with-the-useeffect-hook',
	},
	{
		id: '15',
		title: 'Use a lazy initializer with useState',
		time: '2m 20s',
		slug: 'use-a-lazy-initializer-with-usestate',
	},
	{
		id: '16',
		title: 'Manage the useEffect dependency array',
		time: '3m 49s',
		slug: 'manage-the-useeffect-dependency-array',
	},
	{
		id: '17',
		title: 'Create reusable custom hooks',
		time: '4m 11s',
		slug: 'create-reusable-custom-hooks',
	},
	{
		id: '18',
		title: 'Manipulate the DOM with React refs',
		time: '6m 5s',
		slug: 'manipulate-the-dom-with-react-refs',
	},
	{
		id: '19',
		title: 'Understand the React Hook Flow',
		time: '11m 4s',
		slug: 'understand-the-react-hook-flow',
	},
	{
		id: '20',
		title: 'Make Basic Forms with React',
		time: '9m 9s',
		slug: 'make-basic-forms-with-react',
	},
	{
		id: '21',
		title: 'Make Dynamic Forms with React',
		time: '3m 10s',
		slug: 'make-dynamic-forms-with-react',
	},
	{
		id: '22',
		title: 'Controlling Form Values with React',
		time: '2m 33s',
		slug: 'controlling-form-values-with-react',
	},
	{
		id: '23',
		title:
			'Using React Error Boundaries to handle errors in React Components',
		time: '7m 37s',
		slug: 'using-react-error-boundaries-to-handle-errors-in-react-components',
	},
	{
		id: '24',
		title: 'Use the key prop when Rendering a List with React',
		time: '7m 18s',
		slug: 'use-the-key-prop-when-rendering-a-list-with-react',
	},
	{
		id: '25',
		title: 'Lifting and colocating React State',
		time: '4m 56s',
		slug: 'lifting-and-colocating-react-state',
	},
	{
		id: '26',
		title: 'Make HTTP Requests with React',
		time: '4m 3s',
		slug: 'make-http-requests-with-react',
	},
	{
		id: '27',
		title: 'Handle HTTP Errors with React',
		time: '4m 1s',
		slug: 'handle-http-errors-with-react',
	},
	{
		id: '28',
		title: 'Install and use React DevTools',
		time: '6m 31s',
		slug: 'install-and-use-react-devtools',
	},
	{
		id: '29',
		title:
			'Build and deploy a React Application with Codesandbox, GitHub, and Netlify',
		time: '4m 30s',
		slug: 'build-and-deploy-a-react-application-with-codesandbox-github-and-netlify',
	},
	{
		id: '30',
		title: 'A Beginners Guide to React Outro',
		slug: 'a-beginners-guide-to-react-outro',
	},
]

import fs from 'node:fs'

function createLesson(lesson) {
	return `---
title: "${lesson.title}"
date: 2023-11-09
status: not-started
---
`
}

function getCoursePath() {
	return new URL(
		`../src/content/lessons/epicreact/a-beginners-guide-to-react/`,
		import.meta.url
	)
}
function getLessonName(lesson) {
	return `${String(lesson.id).padStart(2, '0')}-${
		lesson.slug
	}.md`
}

for (const lesson of lessons) {
	try {
		const data = new Uint8Array(
			Buffer.from(createLesson(lesson))
		)
		const url = new URL(
			`../src/content/lessons/epicreact/a-beginners-guide-to-react/${String(
				lesson.id
			).padStart(2, '0')}-` +
				lesson.slug +
				`.md`,
			import.meta.url
		)
		fs.writeFileSync(
			new URL(getLessonName(lesson), getCoursePath()).pathname,
			data
		)
		fs.appendFileSync(
			new URL(`index.md`, getCoursePath()).pathname,
			`- [${lesson.title}](./${getLessonName(lesson)})\n`
		)
	} catch (error) {
		console.log(error)
	}
}
