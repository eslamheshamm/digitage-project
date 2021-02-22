import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const Clients = () => {
  const data = useStaticQuery(graphql`
    query {
      logo1: file(relativePath: { eq: "hyundai-logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo2: file(relativePath: { eq: "elborg-logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo3: file(relativePath: { eq: "rentals-logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo4: file(relativePath: { eq: "dental-logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <section className="flex justify-center items-center flex-col mt-36 mb-20">
      <h2 className="uppercase font-title font-bold text-xs mb-10">
        Some clients
      </h2>
      <div className="flex justify-around items-center h-full w-9/12">
        <Img
          fluid={data.logo1.childImageSharp.fluid}
          className="w-32 object-cover"
        />
        <Img fluid={data.logo2.childImageSharp.fluid} className="w-24" />
        <Img fluid={data.logo3.childImageSharp.fluid} className="w-24" />
        <Img fluid={data.logo4.childImageSharp.fluid} className="w-24" />
      </div>
    </section>
  )
}
export default Clients
