import React from "react"
import Button from "../button"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const CardOne = () => {
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
    background:
      "linear-gradient(89.14deg, rgba(237, 237, 237, 0.11) 3.09%, rgba(209, 98, 248, 0.03) 106%)",
    filter: "drop-shadow(0px 4px 70px rgba(109, 73, 255, 0.08))",
  }
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 place-items-center shadow-md rounded-3xl"
      style={card}
    >
      <article className="px-8 my-10 md:p-16">
        <h3 className="flex items-center font-semibold">
          <div className=" border-b-2 w-4 h-1 border-black mr-2"></div>
          Creative Agency
        </h3>
        <h1 className="font-rock font-bold  text-3xl md:text-4xl lg:text-6xl leading-snug  my-4 text-gray-dark">
          The dream is not that you see while you are asleep..
        </h1>
        <p className="font-title leading-normal font-light mb-8 ">
          We craft premium digital work for web, mobile and experiential with
          creative agencies and global brands alike – putting passion, pride and
          plenty of elbow grease into everything we do.
        </p>
        <Button>Let's Connect</Button>
      </article>

      <div className="w-full flex justify-center items-center row-start-1 row-end-2 md:col-start-2 my-8 md:my-0">
        <figure className="w-full md:w-10/12 ">
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </figure>
      </div>
    </section>
  )
}
export default CardOne
