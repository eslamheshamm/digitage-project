import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 120, height: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <footer className="flex flex-col sm:flex-row justify-between items-center py-6 w-11/12 mx-auto">
      {/* <Logo /> */}
      <h1 className="hidden md:block">
        <Img fixed={data.placeholderImage.childImageSharp.fixed} />
      </h1>
      <p>copyright digitage 2021</p>
      <p>copyright Orange labs 2020</p>
    </footer>
  )
}

export default Footer
