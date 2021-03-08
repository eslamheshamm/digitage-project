import React from "react"
const Button = ({ children }) => {
  return (
    <button className="py-4 px-8 tracking-wider text-black 	 font-title font-bold rounded-lg bg-primary uppercase focus:outline-none">
      <a href="https://wa.me/201555354072" target="_blank" rel="noreferrer">
        {" "}
        {children}
      </a>
    </button>
  )
}
// +20 155 535 4072

export default Button
