import React from "react"
import { Link } from "react-scroll"
const Button = ({ children }) => {
  return (
    <Link to="form" smooth={true} duration={1000}>
      <button className="py-4 px-8 tracking-wider	 font-title font-bold rounded-lg bg-primary uppercase focus:outline-none">
        {children}
      </button>
    </Link>
  )
}

export default Button
