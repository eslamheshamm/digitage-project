import React from "react"
import Button from "../button"
const BannerTwo = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-start my-16">
      <article>
        <h2 className="text-2xl md:text-4xl mb-4 font-rock">
          Provide real value
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </article>
      <div className="mt-4 md:mt-0">
        <Button>Let's connect</Button>
      </div>
    </section>
  )
}
export default BannerTwo
