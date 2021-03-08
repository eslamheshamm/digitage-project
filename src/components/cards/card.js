import React from "react"
import Img from "gatsby-image"

export const Card = ({ heading, smallHeading, text, img, style }) => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 justify-items-start rounded-3xl my-16 w-full bg-primary"
      style={style}
    >
      <article
        className=" px-8 mt-16 mb-8 md:px-14 md:my-14 flex flex-col  justify-center"
        data-sal="slide-right"
        data-sal-duration="1000" // changes duration of the animation (from 200 to 2000 ms)
        data-sal-delay="100" // adds delay to the animation (from 5 to 1000 ms)
        data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
      >
        <h1 className="font-rock font-bold text-2xl md:text-4xl lg:text-5xl leading-snug  mb-6 text-primary  justify-center">
          <span className="text-2xl">{smallHeading}</span>
          <br />
          {heading}
        </h1>
        <p className="font-title leading-normal text-white text-opacity-70 font-light mb-8 ">
          {text}
        </p>
      </article>
      <div
        className="w-full flex justify-center items-center row-start-1 row-end-2 md:col-start-2 mt-8 md:mt-0"
        data-sal="slide-left"
        data-sal-duration="1000" // changes duration of the animation (from 200 to 2000 ms)
        data-sal-delay="100" // adds delay to the animation (from 5 to 1000 ms)
        data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
      >
        <figure className="w-full">
          <Img fluid={img} className="w-full" />
        </figure>
      </div>
    </section>
  )
}

export const CardFlipped = ({ heading, smallHeading, text, img, style }) => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 justify-items-start rounded-3xl my-16 "
      style={style}
    >
      <div
        className="w-full flex justify-center items-center row-start-1 row-end-2 mt-8 md:mt-0"
        data-sal="slide-right"
        data-sal-duration="1000" // changes duration of the animation (from 200 to 2000 ms)
        data-sal-delay="100" // adds delay to the animation (from 5 to 1000 ms)
        data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
      >
        <figure className="w-full">
          <Img fluid={img} className=" w-full" />
        </figure>
      </div>
      <article
        className=" px-8 mt-16 mb-8 md:px-14 md:my-14 flex flex-col  justify-center"
        data-sal="slide-left"
        data-sal-duration="1000" // changes duration of the animation (from 200 to 2000 ms)
        data-sal-delay="100" // adds delay to the animation (from 5 to 1000 ms)
        data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
      >
        <h1 className="font-rock font-bold text-2xl md:text-4xl lg:text-5xl leading-snug  mb-6 text-primary  justify-center">
          <span className="text-2xl">{smallHeading}</span>
          <br />
          {heading}
        </h1>
        <p className="font-title leading-normal text-white text-opacity-70 font-light mb-8 ">
          {text}
        </p>
      </article>
    </section>
  )
}
