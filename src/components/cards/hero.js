import React from "react"
import Button from "../button"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const Hero = ({ handleClick }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "hero.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const card = {
    boxShadow: "0px 8px 70px 0px #141108, 8%",
    background:
      "linear-gradient(89.14deg, rgba(18, 18, 17, 0.11) 3.09%, rgba(29, 24, 9, 0) 106.74%)",
  }
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 place-items-center shadow-sm rounded-3xl text-white"
      style={card}
    >
      <article
        className="px-8 my-10 md:p-16"
        data-sal="slide-right"
        data-sal-duration="1000" // changes duration of the animation (from 200 to 2000 ms)
        data-sal-delay="100" // adds delay to the animation (from 5 to 1000 ms)
        data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
      >
        <h3 className="flex items-center font-semibold">
          <div className=" border-b-2 w-4 h-1 border-white mr-2"></div>
          Creative Agency
        </h3>
        <h1 className="font-rock font-bold  text-3xl md:text-4xl lg:text-6xl leading-snug  my-4 ">
          The dream is not that you see while you are asleep..
        </h1>
        <p className="font-title leading-normal font-light mb-8 opacity-70 ">
          We craft premium digital work for web, mobile and experiential with
          creative agencies and global brands alike – putting passion, pride and
          plenty of elbow grease into everything we do.
        </p>
        <Button handleClick={handleClick}>Let's Connect</Button>
      </article>

      <div
        className="w-full flex justify-center items-center row-start-1 row-end-2 md:col-start-2 my-8 md:my-0"
        data-sal="slide-left"
        data-sal-duration="1000" // changes duration of the animation (from 200 to 2000 ms)
        data-sal-delay="100" // adds delay to the animation (from 5 to 1000 ms)
        data-sal-easing="ease"
      >
        <figure className="w-full md:w-10/12 ">
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </figure>
      </div>
    </section>
  )
}
export default Hero
