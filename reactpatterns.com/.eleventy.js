const mdi = require("markdown-it");

module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats(["md", "css"]);

  eleventyConfig.addPassthroughCopy("_redirects");

  /* Markdown Overrides */
  let markdownLibrary = mdi({
    html: true,
    breaks: true,
    linkify: true,
  })
    .use(require("markdown-it-anchor").default, {
      permalink: true,
      permalinkClass: "direct-link",
      permalinkSymbol: "#",
    })
    .use(require("markdown-it-table-of-contents"), { includeLevel: [2] })
    .use(require("markdown-it-link-attributes"), {
      pattern: /^https?:\/\//,
      attrs: {
        target: "_blank",
        rel: "noopener noreferrer",
        class: "external-link",
      },
    })
    .use(require("markdown-it-highlightjs"));
  eleventyConfig.setLibrary("md", markdownLibrary);
};
