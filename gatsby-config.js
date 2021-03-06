module.exports = {
  siteMetadata: {
    title: `Jas Coding Blog Webiste`,
    description: `Welcome to Jas Coding Blog Webiste in here we share all about Tech, Coding news & Features.`,
    author: `@JasCoding`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve : `gatsby-plugin-mdx`,
      options : {
        defaultLayouts : {
          default : require.resolve('./src/components/layout.js')
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
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
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/j1.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
