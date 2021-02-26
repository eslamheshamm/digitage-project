import React from "react"
import Behance from "../assets/behance.svg"
import Dribble from "../assets/dribble.svg"
import Facebook from "../assets/facebook.svg"
import Instagram from "../assets/instagram.svg"
import Twitter from "../assets/twitter.svg"

const SocialIcons = () => {
  const Item = ({ children }) => (
    <li className="mr-5">
      <a href="/" target="_blank">
        {children}
      </a>
    </li>
  )
  return (
    <ul className="flex items-center">
      <Item>
        <Dribble />
      </Item>
      <Item>
        <Behance />
      </Item>
      <Item>
        <Twitter />
      </Item>
      <Item>
        <Instagram />
      </Item>
      <Item>
        <Facebook />
      </Item>
    </ul>
  )
}

export default SocialIcons
