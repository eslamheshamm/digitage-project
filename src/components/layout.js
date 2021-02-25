/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import useSiteMetadata from "../hooks/use-sitemetadata"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()
  return (
    <body className="font-body ">
      <Header siteTitle={title || `Title`} />
      <main className="w-11/12 lg:w-10/12 xl:w-9/12 mx-auto">{children}</main>
      <Footer />
    </body>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
