import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const BannerThree = () => {
  const button = {
    background:
      "linear-gradient(90deg, rgba(249, 255, 177, 0.4) 3.11%, rgba(212, 90, 255, 0) 114.83%)",
    boxShadow: "0px 4px 70px 0px #F7E7F9 30%",
    border: "1px solid #FFD349 10%",
  }
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "child.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
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
    <section className="flex flex-col items-center w-full my-16 f">
      <div className="grid grid-cols-3 gap-6 w-full">
        <Img fluid={data.image1.childImageSharp.fixed} />
        <Img fluid={data.image2.childImageSharp.fluid} className="w-full" />
        <Img fluid={data.image3.childImageSharp.fluid} className="w-full" />
      </div>
      <button
        className="py-6 px-10 uppercase tracking-widest font-semibold rounded-xl"
        style={button}
      >
        OUR company profile
      </button>
    </section>
  )
}

export default BannerThree
