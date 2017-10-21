import React from "react"
import Link from "gatsby-link"
import styles from "./index.module.css"

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default ({ children, data }) =>
<div style={{ margin: `0 auto`, maxWidth: 960, padding: `1.25rem 1rem` }}>
  <header style={{ marginBottom: `1.5rem` }}>
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
      <h3 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h3>
    </Link>
    <ul style={{ listStyle: `none`, float: `right` }}>
      <ListLink to="/">home</ListLink>
      <ListLink to="/classes/">classes</ListLink>
      <ListLink to="/teachers/">teachers</ListLink>
      <ListLink to="/venues/">venues</ListLink>
    </ul>
  </header>
  {children()}
</div>

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
