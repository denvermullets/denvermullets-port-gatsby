import React from "react"
import styled from "styled-components"
import MockupAnimation from "../animations/MockupAnimation"
import ViewProjects from "../buttons/ViewProjects"
import { H1, MediumText } from "../styles/TextStyles"

export default function HeroSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>Hi. I'm Ryan.</Title>
          <Description>
            I'm a fullstack developer, designer and photographer. I love working
            with <br /> Javascript, Ruby, and React.
          </Description>
          <ViewProjects title="My Projects" />
        </TextWrapper>
        <MockupAnimation />
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: #292929;
  overflow: hidden;
`
// margin: top/bottom left/right
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 175px 30px;

  display: grid;
  grid-template-columns: 425px auto;
`

// css grid using gap instead of margins provides extra flexibility for mobile
const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
`
const Title = styled(H1)`
  color: white;
`
const Description = styled(MediumText)`
  color: white;
  font-size: 17px;
  line-height: 130%;
`
