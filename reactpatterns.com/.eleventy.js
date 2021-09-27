const mdi = require("markdown-it");
const mdiHjs = require("markdown-it-highlightjs");

module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats(["md", "css"]);

  /* Markdown Overrides */
  let markdownLibrary = mdi({
    html: true,
    breaks: true,
    linkify: true,
  }).use(mdiHjs, {});
  eleventyConfig.setLibrary("md", markdownLibrary);
};
