// tailwind.config.cjs
// docs: https://tailwindcss.com/docs/configuration
const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./src/**/*.svelte', './src/**/*.css'],
	darkMode: false,
	theme: {},
	variants: {
		extend: {}
	},
	plugins: []
};
