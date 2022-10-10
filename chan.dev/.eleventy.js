const { DateTime } = require("luxon");
const fs = require("fs");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginNavigation = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const fetch = require("node-fetch");
require("dotenv").config();

module.exports = function (eleventyConfig) {
  for (plugin of [pluginRss, pluginSyntaxHighlight, pluginNavigation]) {
    eleventyConfig.addPlugin(plugin);
  }

  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addCollection("tagList", function (collection) {
    let tagSet = new Set();
    collection.getAll().forEach(function (item) {
      if ("tags" in item.data) {
        let tags = item.data.tags;

        tags = tags.filter(function (item) {
          switch (item) {
            // this list should match the `filter` list in tags.njk
            case "all":
            case "nav":
            case "post":
            case "posts":
              return false;
            case "note":
            // case "notes":
            //   return false;
          }

          return true;
        });

        for (const tag of tags) {
          tagSet.add(tag);
        }
      }
    });

    // returning an array in addCollection works in Eleventy 0.5.3
    return [...tagSet];
  });

  for (filter of filters) {
    eleventyConfig.addFilter(...filter);
  }

  for (asset of ["img", "css", "og-image", "_redirects"]) {
    eleventyConfig.addPassthroughCopy(asset);
  }

  for (shortcode of shortcodes) {
    eleventyConfig.addShortcode(...shortcode);
  }

  eleventyConfig.setLibrary("md", markdownLibrary);

  // Browsersync Overrides
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync("_site/404.html");

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false,
  });

  return {
    templateFormats: ["md", "njk", "html", "liquid"],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about those.

    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for link URLs (it does not affect your file structure)
    // Best paired with the `url` filter: https://www.11ty.dev/docs/filters/url/

    // You can also pass this in on the command line using `--pathprefix`
    // pathPrefix: "/",

    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",

    // These are all optional, defaults are shown:
    dir: {
      input: "./src/",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};

let markdownLibrary = markdownIt({
  html: true,
  breaks: true,
  linkify: true,
})
  .use(markdownItAnchor, {
    permalink: true,
    permalinkClass: "direct-link",
    permalinkSymbol: "#",
  })
  .use(require("markdown-it-table-of-contents"));

let filters = [
  [
    "readableDate",
    (dateObj) => {
      return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
        "LLL dd, yyyy"
      );
    },
  ],
  [
    // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    "htmlDateString",
    (dateObj) => {
      return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
        "yyyy-LL-dd"
      );
    },
  ],
  [
    "encodeURIComponent",
    (str = "") => {
      return encodeURIComponent(str);
    },
  ],
  [
    // Get the first `n` elements of a collection.
    "head",
    (array, n) => {
      if (n < 0) {
        return array.slice(n);
      }

      return array.slice(0, n);
    },
  ],
  [
    "min",
    (...numbers) => {
      return Math.min.apply(null, numbers);
    },
  ],
];

let shortcodes = [
  [
    "tweet",
    async function (url) {
      let { html } = await fetch(
        `https://publish.twitter.com/oembed?url=${url}`
      ).then((res) => res.json());

      return html;
    },
  ],
  [
    "bug-me-on-twitter",
    async function (text = "Bug me on twitter…") {
      return `<a href="https://twitter.com/intent/tweet?screen_name=chantastic&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-show-count="false" target="_blank" rel="noopener noreferrer" >${text}</a>`;
    },
  ],
  [
    "lunch-dev-cta",
    function (text = "Join lunch.dev for videos") {
      return `<script src="https://cdn.podia.com/embeds.js" async="async"></script><a href="https://www.lunch.dev/member" data-podia-embed="button" data-text="${text}">${text}</a>`;
    },
  ],
  [
    "youtube-video",
    function (url) {
      // https://stackoverflow.com/a/21607897
      function getVideoIdFromYouTubeURL(url) {
        let regExp =
          /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        let match = url.match(regExp);

        return match && match[2].length === 11 ? match[2] : null;
      }

      let embedCode = `<iframe src="//www.youtube.com/embed/${getVideoIdFromYouTubeURL(
        url
      )}" frameborder="0" allowfullscreen></iframe>`;
      return `<div data-responsive-youtube-container>${embedCode}</div>`;
    },
  ],
];
