import React from "react"
import "../styles/global.css"

import Layout from "~components/layout"
import SEO from "~components/seo"
import Hero from "~components/cards/hero"
import Cards from "~components/cards/cards"

import Clients from "~components/clients"
import BannerSmall from "../components/banners/bannersmall"
import BannerThree from "../components/banners/banner-three"
import Form from "../components/form"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Clients />
    <BannerSmall
      header={`Provide real value`}
      text={`We know how to deliver your message`}
    />
    <Cards />
    {/* <CardThree />
    <CardFour /> */}
    <BannerSmall
      header={`Let us handle your project professionally.`}
      text={`Achieve your business goals with endless professionalism.`}
    />
    <BannerThree />
    <Form />
  </Layout>
)

export default IndexPage
