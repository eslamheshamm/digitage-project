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
  <script
        dangerouslySetInnerHTML={{
          __html: `
          (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "k7zbh2xpdn");
        `,
        }}
      />

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
