import React from "react"
import Link from "gatsby-link"
import styles from "./index.module.css"
import SubscribeFrom from 'react-mailchimp-subscribe'

const formProps = {
  action: 'https://twitter.us17.list-manage.com/subscribe/post?u=d7082b51358c1c768387518db&amp;id=f2bec92e42',
  messages: {
    inputPlaceholder: "enter email here",
    btnLabel: "join",
    success: "success! you're on the list",
    error: "oops! try again?"
  },
  styles: {
    success: {
      paddingTop: "5px",
      color: "#45CB85"
    },
    error: {
      paddingTop: "5px",
      color: "#EA3546"
    }
  }
};

const Form = () => <SubscribeFrom {...formProps}/>;

export default ({ data }) => {
  return (
    <div className={styles.innerContent}>
      <div>
        <h1>After work classes for <span className={styles.highlight}>curious adults</span></h1>
        <p>
        Join our 'after school club' for grown-ups. Hear about the most fascinating events, connect with a like-minded community, structure your own learning.
        </p>
        <Form />
      </div>
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
