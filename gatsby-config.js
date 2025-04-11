/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: "Marhaf Chamie - Senior AI & Software Engineer",
        description:
            "Senior Software Engineer with 10 years of hands-on experience delivering full-stack, mobile, and backend systems across fintech, e-commerce, mobility, and SaaS.",
        author: "Marhaf Chamie",
        siteUrl: `https://marhafs-portfolio.web.app/`,
    },
    plugins: [
        "gatsby-plugin-no-sourcemaps",
        {
            resolve: "gatsby-plugin-minify",
            options: {
                removeAttributeQuotes: true,
                removeComments: true,
                removeEmptyAttributes: true,
                removeOptionalTags: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
                collapseBooleanAttributes: true,
                collapseInlineTagWhitespace: true,
                collapseWhitespace: true,
                minifyCSS: true,
                minifyJS: true,
                minifyURLs: true,
                processConditionalComments: true,
                removeAttributeQuotes: true,
                removeCommentsFromCDATA: true,
            },
        },
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-postcss",
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                // This will impact how browsers show your PWA/website
                // https://css-tricks.com/meta-theme-color-and-trickery/
                // theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/me.png`, // This path is relative to the root of the site.
            },
        },
    ],
};
