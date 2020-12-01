import React from "react"
import styled from "styled-components"
import Project from "../projects/Project"

export default function ProjectSection() {
  return (
    <Wrapper>
      <Project />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  background: #292929;
  width: 100%;
`
