import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import HeroSection from "../components/sections/HeroSection"
import ProjectSection from "../components/sections/ProjectSection"

function IndexPage() {
  return (
    <Layout>
      <SEO title="@denvermullets" />
      <HeroSection />
      <ProjectSection />
    </Layout>
  )
}

export default IndexPage
