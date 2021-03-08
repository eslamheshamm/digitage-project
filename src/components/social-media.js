import React from "react"
import Whatsapp from "../assets/whatsapp.svg"
import Dribble from "../assets/dribble.svg"
import Facebook from "../assets/facebook.svg"
import Instagram from "../assets/instagram.svg"
import Twitter from "../assets/twitter.svg"
import Linkedin from "../assets/linkedin.svg"

const SocialIcons = () => {
  const Item = ({ children, link }) => (
    <li className="mr-5">
      <a href={link} target="_blank" rel="noreferrer">
        {children}
      </a>
    </li>
  )
  return (
    <ul className="flex items-center">
      <Item link="https://www.linkedin.com/company/digitagestudio/">
        <Linkedin className="w-5 h-auto text-white" />
      </Item>
      <Item link="https://wa.me/201555354072">
        <Whatsapp />
      </Item>
      <Item link="https://www.facebook.com/DigitageStudio/">
        <Facebook />
      </Item>
      <Item link="https://www.instagram.com/digitagestudio/">
        <Instagram />
      </Item>
      <Item link="https://twitter.com/digitagestudio">
        <Twitter />
      </Item>
    </ul>
  )
}

export default SocialIcons
