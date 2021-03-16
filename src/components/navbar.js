import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import "./navbar.scss"

const Navbar = () => {
  const data= useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
  `)
  return (
    <header className="nav-header">
      <h1><Link to="/" className="title">{data.site.siteMetadata.title}</Link></h1>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link" activeClassName="active-nav-link">Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link" activeClassName="active-nav-link">About</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link" activeClassName="active-nav-link">Contact</Link>
          </li>
          <li>
            <Link to="/blog" className="nav-link" activeClassName="active-nav-link"> Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
