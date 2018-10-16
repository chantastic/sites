// const images = require('remark-images')
// const emoji = require('remark-emoji')
let highlight = require("remark-highlight.js");

const withMDX = require("@zeit/next-mdx")({
  extension: /.mdx?$/,
  options: {
    mdPlugins: [highlight]
  }
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"]
});
