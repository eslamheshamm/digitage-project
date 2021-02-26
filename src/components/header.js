import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SocialIcons from "./social-media"

// const NavLink = ({ to, children }) => (
//   <li className="text-gray flex-auto p-2">
//     <Link to={to} activeClassName="font-semibold ">
//       {children}
//     </Link>
//   </li>
// )
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
    <header className="flex flex-col sm:flex-row justify-between items-center  w-11/12 lg:w-10/12 xl:w-9/12 mx-auto my-6  md:mb-16">
      <div>{/* empty just to trick flex and center my items */}</div>
      <h1 className="pr-5 ">
        <Link to="/" className="cursor-default">
          <Img fixed={data.placeholderImage.childImageSharp.fixed} />
        </Link>
      </h1>
      <div>
        <SocialIcons />
      </div>
      {/* hidden waiting design for this sections */}
      {/* <nav className="w-9/12 md:w-6/12">
        <ul className="flex   justify-around flex-wrap">
          <NavLink to="/">Home</NavLink>
          <NavLink to="services">Our Services</NavLink>
          <NavLink to="portfolio">Our Portfolio</NavLink>
          <NavLink to="contact">Contact Us</NavLink>
        </ul>
      </nav> */}
    </header>
  )
}
export default Header
