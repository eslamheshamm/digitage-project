import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const BannerThree = () => {
  const button = {
    background:
      "linear-gradient(90deg, rgba(249, 255, 177, 0.5) 3.11%, rgba(212, 90, 255, 0.4) 114.83%)",
    boxShadow: "0px 4px 70px 0px #F7E7F9 30%",
    border: "1px solid #FFD349 10%",
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
        <figure className="w-full">
          <Img
            fluid={data.image1.childImageSharp.fluid}
            className="imageBlack"
          />
        </figure>
        <figure className="w-full ">
          <Img
            fluid={data.image2.childImageSharp.fluid}
            className="imageBlack"
          />
        </figure>
        <figure className="w-full">
          <Img
            fluid={data.image3.childImageSharp.fluid}
            className="imageBlack"
          />
        </figure>
      </div>
      <button
        className="py-6 px-4 text-sm md:text-base md:py-6 md:px-10 uppercase tracking-wider md:tracking-widest  font-semibold rounded-xl mt-12"
        style={button}
      >
        OUR company profile
      </button>
    </section>
  )
}

export default BannerThree
