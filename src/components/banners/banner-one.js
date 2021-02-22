import React from "react"
import Button from "../button"
const BannerOne = () => {
  return (
    <section className="flex justify-between items-start my-16">
      <article>
        <h2 className="text-4xl mb-4 font-header">Provide awesome service</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </article>
      <Button>Let's connect</Button>
    </section>
  )
}
export default BannerOne
