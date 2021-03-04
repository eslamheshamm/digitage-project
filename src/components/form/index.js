import React from "react"
import FormInputs from "./form"
import Phone from "./assets/phone.svg"
import Email from "./assets/email.svg"
import Gps from "./assets/gps.svg"
import SocialIcons from "../social-media"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Form = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Contact.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-32 md:mt-60 mb-20 text-white  w-full">
      <div className="relative z-10">
        <div className="w-full absolute hidden lg:block -top-40 left-30 z-0 inBack">
          <div className="relative">
            <Img
              fluid={data.placeholderImage.childImageSharp.fluid}
              className="absolute z-50"
            />
            <div className="bg-primary  lg:w-32 lg:h-32 xl:w-48 xl:h-48 rounded-full absolute top-8 left-12 xl:left-20 z-0"></div>
          </div>
        </div>
        <div className=" z-10">
          <h1 className="text-2xl md:text-4xl font-header font-bold ">
            Let us handle your <br /> project, professionally.
          </h1>
          <p className="mt-8 mb-10 leading-7">
            Achieve your business goals with endless professionalism.
          </p>
          <div className="my-9">
            <div className="flex items-center mb-8">
              <Phone className="mr-5 " />
              <div>+20 155 535 4072</div>
            </div>
            <div className="flex items-center mb-8">
              <Email className="mr-5" />
              <div>info@digitagestudio.com</div>
            </div>{" "}
            <div className="flex items-cente ">
              <Gps className="mr-5" />
              <div>20 Samir Abd El-Raouf St. Nasr City, Cairo, Egypt.</div>
            </div>
          </div>
          <div>
            <SocialIcons />
          </div>
        </div>
      </div>
      <div className=" lg:col-start-2 lg:col-end-4">
        <FormInputs />
      </div>
    </section>
  )
}

export default Form
