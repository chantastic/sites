// const images = require('remark-images')
// const emoji = require('remark-emoji')
let mdPlugins = [
  require("remark-external-links"),
  require("remark-slug"),
  require("remark-toc"),
  require("remark-highlight.js")
];

let withCSS = require("@zeit/next-css");
let withMDX = require("@zeit/next-mdx")({
  extension: /.mdx?$/,
  options: {
    mdPlugins,
    heading: "Contents",
    maxDepth: 2,
    rel: "noreferrer"
  }
});

module.exports = withCSS(
  withMDX({
    pageExtensions: ["js", "jsx", "md", "mdx"],
    exportPathMap: async function(defaultPathMap) {
      return {
        "/": { page: "/" },
        "/hooks": { page: "/hooks" }
      };
    },
  })
);
