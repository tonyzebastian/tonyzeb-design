module.exports = function(eleventyConfig) {
    return {
        dir: {
        input: "src",
        includes: "_includes",
        output: "_site",

        },
        templateFormats: ["html", "md", "njk"],
        markdownTemplateEngine: "njk",
        HTMLTemplatengine: "njk",
        dataTemplateEngine: "njk",
    };

}