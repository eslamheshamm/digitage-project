import React from "react"
import Button from "../button"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const CardOne = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "hero.png" }) {
        childImageSharp {
          fixed(width: 600, height: 600) {
            ...GatsbyImageSharpFixed
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
      className="grid grid-cols-1 md:grid-cols-2 justify-items-start shadow-md rounded-3xl"
      style={card}
    >
      <article className="p-14">
        <h3 className="flex items-center font-semibold">
          <div className=" border-b-2 w-4 h-1 border-black mr-2"></div>
          Creative Agency
        </h3>
        <h1 className="font-header font-bold text-6xl leading-snug  my-4 text-gray-dark">
          The dream is not that you see while you are asleep..
        </h1>
        <p className="font-title leading-normal font-light mb-8 ">
          We craft premium digital work for web, mobile and experiential with
          creative agencies and global brands alike – putting passion, pride and
          plenty of elbow grease into everything we do.
        </p>
        <Button>Let's Connect</Button>
      </article>

      <div className="w-full flex justify-center items-start">
        <figure>
          <Img fixed={data.placeholderImage.childImageSharp.fixed} />
        </figure>
      </div>
    </section>
  )
}
export default CardOne
