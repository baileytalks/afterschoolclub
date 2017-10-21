import React from "react"
import Link from "gatsby-link"
import styles from "./index.module.css"

export default ({ data }) => {
  return (
    <div>
      <h1>After work classes for curious adults</h1>
      <div className={styles.outside}>
        {data.allMarkdownRemark.edges.map(({ node }) =>
          <div className={styles.box} key={node.id}>
            <Link to={node.fields.slug}>
              <h3>
                {node.frontmatter.title}
              </h3>
            </Link>
            <p>
              {node.frontmatter.date}
            </p>
            <p>
              {node.frontmatter.tags.map(tag => `#${tag} `)}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: ASC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
          }
          fields {
           slug
         }
          excerpt
        }
      }
    }
  }
`
