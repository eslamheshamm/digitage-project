import React from "react"
import "../styles/global.css"

import Layout from "~components/layout"
import SEO from "~components/seo"
import CardOne from "~components/cards/card-one"
import CardTwo from "~components/cards/card-two"
import CardThree from "~components/cards/card-three"
import CardFour from "../components/cards/card-four"

import Clients from "~components/clients"
import BannerOne from "../components/banners/banner-one"
import BannerTwo from "../components/banners/banner-two"
import BannerThree from "../components/banners/banner-three"
import Form from "../components/form"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CardOne />
    <Clients />
    <BannerOne />
    <CardTwo />
    <CardThree />
    <CardFour />
    <BannerTwo />
    <BannerThree />
    <Form />
  </Layout>
)

export default IndexPage
