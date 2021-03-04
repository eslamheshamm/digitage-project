import React from "react"
import Button from "../button"
const BannerSmall = ({ header, text }) => {
  return (
    <section className="flex text-white flex-col md:flex-row justify-between items-start my-16">
      <article>
        <h2 className="text-2xl md:text-4xl mb-4 font-rock">{header}</h2>
        <p className=" opacity-70">{text}</p>
      </article>
      <div className="mt-4 md:mt-0 text-black">
        <Button>Let's connect</Button>
      </div>
    </section>
  )
}
export default BannerSmall
