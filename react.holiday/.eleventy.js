module.exports = function (eleventyConfig) {
  return {
    templateFormats: ["md", "liquid"],

    dir: {
      input: "./src/",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
