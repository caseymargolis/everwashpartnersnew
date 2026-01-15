module.exports = function(eleventyConfig) {
    // Copy ALL assets from src/assets/ to public/assets/
    eleventyConfig.addPassthroughCopy("src/assets");

    // Enable extensionless layout resolution (Eleventy v2+ feature)
    eleventyConfig.setLayoutResolution(false);

    // Add layout aliases to ensure layout resolution works
    eleventyConfig.addLayoutAlias("base-attendant-app", "base-attendant-app.njk");
    eleventyConfig.addLayoutAlias("base-attendant-communications", "base-attendant-communications.njk");
    eleventyConfig.addLayoutAlias("base-call-center", "base-call-center.njk");
    eleventyConfig.addLayoutAlias("base-case-study", "base-case-study.njk");
    eleventyConfig.addLayoutAlias("base-custom-signage", "base-custom-signage.njk");
    eleventyConfig.addLayoutAlias("base-data-driven-retention", "base-data-driven-retention.njk");
    eleventyConfig.addLayoutAlias("base-dedicated-account-manager", "base-dedicated-account-manager.njk");
    eleventyConfig.addLayoutAlias("base-end-to-end", "base-end-to-end.njk");
    eleventyConfig.addLayoutAlias("base-end-to-end-v2", "base-end-to-end-v2.njk");
    eleventyConfig.addLayoutAlias("base-enhanced-analytics", "base-enhanced-analytics.njk");
    eleventyConfig.addLayoutAlias("base-everwash-portal", "base-everwash-portal.njk");
    eleventyConfig.addLayoutAlias("base-explore-the-platform", "base-explore-the-platform.njk");
    eleventyConfig.addLayoutAlias("base-fleet-membership", "base-fleet-membership.njk");
    eleventyConfig.addLayoutAlias("base-grow-with-a-partner-v2", "base-grow-with-a-partner-v2.njk");
    eleventyConfig.addLayoutAlias("base-grow-with-partner", "base-grow-with-partner.njk");
    eleventyConfig.addLayoutAlias("base-human-support", "base-human-support.njk");
    eleventyConfig.addLayoutAlias("base-long-term-success", "base-long-term-success.njk");
    eleventyConfig.addLayoutAlias("base-long-term-success-v2", "base-long-term-success-v2.njk");
    eleventyConfig.addLayoutAlias("base-member-communications", "base-member-communications.njk");
    eleventyConfig.addLayoutAlias("base-member-validation", "base-member-validation.njk");
    eleventyConfig.addLayoutAlias("base-members-app", "base-members-app.njk");
    eleventyConfig.addLayoutAlias("base-not-just-tools", "base-not-just-tools.njk");
    eleventyConfig.addLayoutAlias("base-payment-processing", "base-payment-processing.njk");
    eleventyConfig.addLayoutAlias("base-remote-start", "base-remote-start.njk");
    eleventyConfig.addLayoutAlias("base-sales-training", "base-sales-training.njk");
    eleventyConfig.addLayoutAlias("base-strategic-guidance", "base-strategic-guidance.njk");
    eleventyConfig.addLayoutAlias("base-strategic-guidance-v2", "base-strategic-guidance-v2.njk");
    eleventyConfig.addLayoutAlias("base-testimonials", "base-testimonials.njk");
    eleventyConfig.addLayoutAlias("base-the-everwash-difference", "base-the-everwash-difference.njk");

    // Set input and output directories
    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "public"
        },
        // Development server configuration
        serverOptions: {
            port: 5000,
            host: "0.0.0.0",
            showAllHosts: true
        }
    };
};
