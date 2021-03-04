import React from "react"
import Logo from "../assets/logo.svg"
const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row justify-between items-center py-6 w-11/12 mx-auto text-white">
      {/* <Logo /> */}
      <h1 className="hidden md:block">
        <Logo />
      </h1>
      <p>copyright digitage 2021</p>
      <p>copyright Orange labs 2020</p>
    </footer>
  )
}

export default Footer
