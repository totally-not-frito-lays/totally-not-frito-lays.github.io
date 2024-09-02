module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets/bundle.css');
  return {
    dir: {
      input: 'src',
      includes: '../_includes',
      data: '../_data',
    }
  };
};