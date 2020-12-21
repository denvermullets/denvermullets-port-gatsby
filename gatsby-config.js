module.exports = {
  siteMetadata: {
    title: `Ryan Vaznis`,
    description: `Ryan Vaznis / denvermullets full stack developer portfolio page`,
    author: `@denvermullets`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -10,
        duration: 1000,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
