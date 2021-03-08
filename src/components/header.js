import { Link } from "gatsby"
import React from "react"
import SocialIcons from "./social-media"
import Logo from "../assets/logo.svg"
// const NavLink = ({ to, children }) => (
//   <li className="text-gray flex-auto p-2">
//     <Link to={to} activeClassName="font-semibold ">
//       {children}
//     </Link>
//   </li>
// )
const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center  w-11/12 lg:w-10/12 xl:w-9/12 mx-auto py-6  md:mb-16">
      <div>{/* empty just to trick flex and center my items */}</div>
      <h1>
        <Link to="/" className="cursor-default">
          <Logo />
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
