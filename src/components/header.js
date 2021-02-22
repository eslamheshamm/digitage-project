import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const NavLink = ({ to, children }) => (
  <li className="text-gray">
    <Link to={to} activeClassName="font-semibold">
      {children}
    </Link>
  </li>
)
const Header = () => {
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
    <header className="flex justify-between items-center  md:w-10/12 md:mx-auto mt-6 mb-16">
      <h1 className=" font-bold text-4xl">
        <Link to="/">
          <Img fixed={data.placeholderImage.childImageSharp.fixed} />
        </Link>
      </h1>
      <nav className="w-6/12">
        <ul className="flex justify-around flex-wrap">
          <NavLink to="/">Home</NavLink>
          <NavLink to="our-services">Our Services</NavLink>
          <NavLink to="our-portfolio">Our Portfolio</NavLink>
          <NavLink to="contact-us">Contact Us</NavLink>
        </ul>
      </nav>
    </header>
  )
}
export default Header
