import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: import.meta.env.DEV ? "http:localhost:3000" : "https://chan.dev",
  integrations: [tailwind(), sitemap()]
});