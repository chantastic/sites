// const images = require('remark-images')
// const emoji = require('remark-emoji')
let mdPlugins = [
  require("remark-slug"),
  require("remark-highlight.js")
];

let withCSS = require("@zeit/next-css");
let withMDX = require("@zeit/next-mdx")({
  extension: /.mdx?$/,
  options: {
    mdPlugins
  }
});

module.exports = withCSS(
  withMDX({
    pageExtensions: ["js", "jsx", "md", "mdx"]
  })
);
