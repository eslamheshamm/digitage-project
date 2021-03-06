import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import eslamhesham from "../../eslamhesham.jpg"
const BannerThree = () => {
  const button = {
    background:
      "linear-gradient(90deg, rgba(0, 0, 0, 0.4) 3.11%, rgba(248, 228, 255, 0) 114.83%)",
    boxShadow: "0px 4px 70px 0px #000000 30%",
    border: "1px solid #FFFFFF 10%",
  }
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "child.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "car.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image3: file(relativePath: { eq: "horse.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <section className="flex flex-col items-center w-full my-16 ">
      <div className="w-full grid grid-cols-1 sm:grid-cols-3">
        <figure
          className="w-full"
          data-sal="fade"
          data-sal-duration="1000" // changes duration of the animation (from 200 to 2000 ms)
          data-sal-delay="100" // adds delay to the animation (from 5 to 1000 ms)
          data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
        >
          <Img
            fluid={data.image1.childImageSharp.fluid}
            className="imageBlack"
          />
        </figure>
        <figure
          className="w-full"
          data-sal="fade"
          data-sal-duration="1000" // changes duration of the animation (from 200 to 2000 ms)
          data-sal-delay="200" // adds delay to the animation (from 5 to 1000 ms)
          data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
        >
          <Img
            fluid={data.image2.childImageSharp.fluid}
            className="imageBlack"
          />
        </figure>
        <figure
          className="w-full"
          data-sal="fade"
          data-sal-duration="1000" // changes duration of the animation (from 200 to 2000 ms)
          data-sal-delay="300" // adds delay to the animation (from 5 to 1000 ms)
          data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
        >
          <Img
            fluid={data.image3.childImageSharp.fluid}
            className="imageBlack"
          />
        </figure>
      </div>
      <button
        className="py-6 px-4 text-sm md:text-base md:py-6 md:px-10 uppercase tracking-wider md:tracking-widest shadow-xl font-semibold rounded-xl mt-12 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 focus:outline-none"
        style={button}
      >
        <a href={eslamhesham} download>
          OUR company profile
        </a>
      </button>
    </section>
  )
}

export default BannerThree
