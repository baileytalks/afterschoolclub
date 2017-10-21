module.exports = {
  siteMetadata: {
    title: `After School Club`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      }
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 590,
        linkImagesToOriginal: false,
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-108419316-1',
        anonymize: true
      },
    }
  ]
}
