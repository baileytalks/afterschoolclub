const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `./src/pages/2017` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
).then(result => {
  result.data.allMarkdownRemark.edges.map(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/class.js`),
          context: {
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}
