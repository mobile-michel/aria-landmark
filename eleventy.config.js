module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets"); // Scss, JS, and images files
    return {
        dir: {
            input: "src", // Set the source for 11ty to the /src directory
            output: "_site", // This is the default
            includes: "_includes", // All UI partials
            layouts: "_layouts" // Base page layouts
        },
        templateFormats: ["html", "md", "liquid"]
    };
};