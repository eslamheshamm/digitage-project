import React from "react"
// import Behance from "../assets/behance.svg"
// import Dribble from "../assets/dribble.svg"
import Facebook from "../assets/facebook.svg"
import Instagram from "../assets/instagram.svg"
import Twitter from "../assets/twitter.svg"

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
      {/* <Item link="https://www.instagram.com/digitagestudio/">
        <Dribble />
      </Item> */}
      {/* <Item>
        <Behance />
      </Item> */}
      <Item link="https://twitter.com/digitagestudio">
        <Twitter />
      </Item>
      <Item link="https://www.instagram.com/digitagestudio/">
        <Instagram />
      </Item>
      <Item link="https://www.facebook.com/DigitageStudio/">
        <Facebook />
      </Item>
    </ul>
  )
}

export default SocialIcons
