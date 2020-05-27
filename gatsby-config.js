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
    `gatsby-remark-source-name`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `shoe`,
        path: `${__dirname}/Chaussures`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `clothes`,
        path: `${__dirname}/Vetements`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `phontab`,
        path: `${__dirname}/Téléphone et Tablette`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Infotech`,
        path: `${__dirname}/Informatique et High tech`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tv`,
        path: `${__dirname}/Télevision`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `bijsac`,
        path: `${__dirname}/Bijoux et Sacs`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
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
