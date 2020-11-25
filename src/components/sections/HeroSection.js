import React from "react"
import styled from "styled-components"
import ViewProjects from "../buttons/ViewProjects"
import { H1, MediumText } from "../styles/TextStyles"

export default function HeroSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>Hi. I'm Ryan.</Title>
          <Description>
            I'm a software engineer, designer and photographer. I love working
            with Javascript, Ruby, and React.
          </Description>
          <ViewProjects title="My Projects" />
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: #292929;
`
// margin: top/bottom left/right
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
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
