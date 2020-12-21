import React from "react"
import styled from "styled-components"
import Project from "../projects/Project"
import { portfolio } from "../../data/portfolioData"

export default function ProjectSection() {
  return (
    <Wrapper id="projects">
      {portfolio.map((port, index) => (
        <Project
          title={port.name}
          bio={port.bio}
          front={port.frontend}
          back={port.backend}
          image={port.image}
          url={port.website}
          key={index}
        />
      ))}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  background: #292929;
  width: 100%;
`
