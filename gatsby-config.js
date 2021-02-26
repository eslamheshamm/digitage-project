module.exports = {
  siteMetadata: {
    title: `Digitage Studio — Advertising/Marketing`,
    description: `We create a trendy legacy`,
    author: `@eslamheshamm`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `Digitage Studio — Advertising/Marketing`,
        short_name: `Digitage`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#FFD349`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-scroll-reveal",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
