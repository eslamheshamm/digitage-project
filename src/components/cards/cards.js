import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Card, CardFlipped } from "./card"

const Cards = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "card1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "card2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image3: file(relativePath: { eq: "card3.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image4: file(relativePath: { eq: "card4.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image5: file(relativePath: { eq: "card5.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image6: file(relativePath: { eq: "card6.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image7: file(relativePath: { eq: "card7.png" }) {
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
    <div>
      <Card
        heading={`Digital Marketing`}
        text={`We achieve your business goals using digital marketing solutions, we have a long experience that enables us to open other doors for your earnings. We build a strategy that fits your business goal, by completing all stages we can reach the place that you want.`}
        backgroundText={`Digital marketing`}
        style={card}
        img={data.image1.childImageSharp.fluid}
      />
      <CardFlipped
        heading={`Animation`}
        text={`We make a story that fits your project and its goals, using 2D/3D movements that combine your information with the sound and dynamic matches to produce a story that reaches your client's fast.`}
        backgroundText={`Animation`}
        style={card}
        img={data.image2.childImageSharp.fluid}
      />
      <Card
        heading={`Branding`}
        text={`We build a complete identity to mark you, the key factor we use to achieve our goal of leaving your business's legacy to stand out. We starting from scratch, choosing the name, picking the colors, building the logo, designing the business cards, and all of your branding stuff`}
        backgroundText={`Branding`}
        style={card}
        img={data.image3.childImageSharp.fluid}
      />
      <CardFlipped
        smallHeading={`Digital`}
        heading={`Production Services`}
        text={`Using many production tools like cameras to convert our ideas to visual stories that could definitely catch your target audience.`}
        backgroundText={`Production Services`}
        style={card}
        img={data.image4.childImageSharp.fluid}
      />
      <Card
        heading={`Event Organization`}
        text={`We are responsible for organizing parties and events with all facilities in the best possible way.`}
        backgroundText={`Event Organization`}
        style={card}
        img={data.image6.childImageSharp.fluid}
      />
      <CardFlipped
        heading={`Marketing solutions`}
        text={`In the event that the return on investment from your business is not good, we re-arrange things correctly and then build plans and strategies that help you achieve the highest return on investment from your business.`}
        backgroundText={`Marketing solutions`}
        style={card}
        img={data.image5.childImageSharp.fluid}
      />
      <Card
        heading={`Interfaces`}
        text={`We design interfaces for large stores and malls with the best international materials.`}
        backgroundText={`Interfaces`}
        style={card}
        img={data.image7.childImageSharp.fluid}
      />
    </div>
  )
}
export default Cards
