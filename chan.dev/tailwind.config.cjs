/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".astro.config.mjs",
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            kbd: {
              backgroundColor: "#eee",
              borderRadius: "3px",
              border: "1px solid #b4b4b4",
              boxShadow:
                "0 1px 1px rgba(0, 0, 0, 0.2), 0 2px 0 0 rgba(255, 255, 255, 0.7) inset",
              color: "#333",
              display: "inline-block",
              fontSize: "0.85em",
              fontWeight: "700",
              lineHeight: "1",
              padding: "2px 4px",
              whiteSpace: "nowrap",
            },
            "dl + dl": {
              marginTop: "1.25rem",
            },
            dl: {
              marginBottom: "1.25rem",
            },
            dt: {
              fontWeight: "700",
            },
            "dd + dt": {
              marginTop: "1.25rem",
            },
            dd: {
              paddingLeft: "1rem",
            },
            img: {
              borderRadius: "6px",
              // outline: "1px solid hsla(0, 0%, 0%, .25)",
            },
            ".expressive-code": {
              marginBlock: "24px",
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
