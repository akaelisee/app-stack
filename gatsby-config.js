module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`,
    `gatsby-remark-source-name`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `shoe`,
        path: `${__dirname}/src/templateKey/shoe`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `clothes`,
        path: `${__dirname}/src/templateKey/clothe`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `phontab`,
        path: `${__dirname}/src/templateKey/phontab`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Infotech`,
        path: `${__dirname}/src/templateKey/infotech`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tv`,
        path: `${__dirname}/src/templateKey/tv`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `bijsac`,
        path: `${__dirname}/src/templateKey/bijsac`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/templateKey/blog`,
      }
    },
    {
      resolve: `gatsby-plugin-netlify-identity`,
      options: {
        url: `https://inspiring-visvesvaraya-f559ca.netlify.app/`, // required!
      }
    },
    {
      resolve: `gatsby-plugin-snipcart`,
      options: {
        apiKey: 'NDc2MzVmZGUtZDI2Zi00NzZlLWExYmUtZDU1MTNmYTY5NmEzNjM3MjYxNTU5MzIxNTgxMTIw',
        autopop: true,
      }
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
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
