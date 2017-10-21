import React from "react"
import Link from "gatsby-link"
import styles from "./index.module.css"

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default ({ children }) =>
  <div className={styles.main}>
    <div className={styles.header}>
      <Link to="/" className={styles.logo}>
        after school club
      </Link>
      <ul className={styles.nav}>
        <ListLink to="/">home</ListLink>
        <ListLink to="/classes/">classes</ListLink>
        <ListLink to="/teachers/">teachers</ListLink>
        <ListLink to="/venues/">venues</ListLink>
      </ul>
    </div>
    {children()}
  </div>
