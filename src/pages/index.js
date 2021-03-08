import React from "react"
import "../styles/global.css"

import Layout from "~components/layout"
import SEO from "~components/seo"
import Hero from "~components/cards/hero"
import Cards from "~components/cards/cards"

import Clients from "~components/clients/clients"
import BannerSmall from "../components/banners/bannersmall"
import BannerThree from "../components/banners/banner-three"
import Form from "../components/form"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Clients />
    <BannerSmall
      header={`Premium & Powerful Services`}
      text={`We provide the essential services you need for your business's success.`}
    />
    <Cards />
    {/* <CardThree />
    <CardFour /> */}
    <BannerSmall
      header={`Provide real value`}
      text={`We know how to deliver your message`}
    />
    <BannerThree />
    <Form />
  </Layout>
)

export default IndexPage
