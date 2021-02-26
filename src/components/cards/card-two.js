import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const CardTwo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "flying-rocket.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const card = {
    background:
      "linear-gradient(89.14deg, rgba(251, 167, 167, 0.11) 3.09%, rgba(225, 95, 55, 0.03) 106.74%)",
    boxShadow: "0px 8px 70px 0px #DE5731 8%",
  }

  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 first-card justify-items-start rounded-xl my-16"
      style={card}
    >
      <article
        className=" px-8 my-8 md:px-14 md:my-14"
        data-sal="slide-right"
        data-sal-duration="1000" // changes duration of the animation (from 200 to 2000 ms)
        data-sal-delay="100" // adds delay to the animation (from 5 to 1000 ms)
        data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
      >
        <h3 className="flex items-center font-semibold uppercase mb-12 text-gray-800">
          Marketing
        </h3>
        <div>
          <h1 className="font-rock font-bold text-3xl md:text-4xl lg:text-5xl leading-snug  mb-6 text-gray-800">
            Digital marketing
          </h1>
          <p className="font-title leading-normal font-light mb-8 break-normal">
            We achieve your business goals using digital marketing solutions, we
            have a long experience that enables us to open other doors for your
            earnings. We build a strategy that fits your business goal, by
            completing all stages we can reach the place that you want.
          </p>
        </div>
        <div>
          <h1 className="font-rock font-bold text-2xl md:text-4xl lg:text-5xl leading-snug  mb-6 text-gray-800">
            Branding
          </h1>
          <p className="font-title leading-normal font-light mb-8 ">
            We achieve your business goals using digital marketing solutions, we
            have a long experience that enables us to open other doors for your
            earnings. We build a strategy that fits your business goal, by
            completing all stages we can reach the place that you want.
          </p>
        </div>
      </article>
      <div
        className="w-full flex justify-center items-center row-start-1 row-end-2 md:col-start-2 mt-8 md:mt-0"
        data-sal="slide-left"
        data-sal-duration="1000" // changes duration of the animation (from 200 to 2000 ms)
        data-sal-delay="100" // adds delay to the animation (from 5 to 1000 ms)
        data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
      >
        <figure className="w-10/12 md:w-12/12">
          <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            className="w-full"
          />
        </figure>
      </div>
    </section>
  )
}
export default CardTwo
