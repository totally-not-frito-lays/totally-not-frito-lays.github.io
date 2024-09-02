// If we wanted to access dog.js from projects.11tydata.js, we would use:
// const dogs = require("../../_data/dog");

module.exports = async () => {
  return {
    layout: "layout.liquid",
    tags: ["projects", "dog", "socials"]
  };
}
