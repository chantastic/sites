/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".astro.config.mjs",
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
