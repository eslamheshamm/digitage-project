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
      <article className="p-14">
        <h3 className="flex items-center font-semibold uppercase mb-12 text-gray-800">
          Marketing
        </h3>
        <div>
          <h1 className="font-header font-bold text-5xl leading-snug  mb-6 text-gray-800">
            Digital marketing
          </h1>
          <p className="font-title leading-normal font-light mb-8 ">
            We achieve your business goals using digital marketing solutions, we
            have a long experience that enables us to open other doors for your
            earnings. We build a strategy that fits your business goal, by
            completing all stages we can reach the place that you want.
          </p>
        </div>
        <div>
          <h1 className="font-header font-bold text-5xl leading-snug  mb-6 text-gray-800">
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
      <div className="w-full flex justify-center items-center">
        <figure className="w-6/12">
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
