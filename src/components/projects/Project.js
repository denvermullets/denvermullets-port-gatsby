import React from "react"
import styled from "styled-components"
import { H3, MediumText } from "../styles/TextStyles"
import LiveDemo from "../buttons/LiveDemo"
import RepoBtn from "../buttons/RepoBtn"
import SiteImage from "../animations/SiteImage"

// we're going to take in props w/all the information
export default function Project() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>Wax Chromatics.</Title>
          <Description>
            Vinyl record collection management app that utilizes the Discogs
            API, OAuth, React.js, and Ruby on Rails.
          </Description>
          <ButtonGrid>
            <LiveDemo title="Demo" />
            <RepoBtn title="Frontend" />
            <RepoBtn title="Backend" />
          </ButtonGrid>
        </TextWrapper>
        <SiteImage url="/images/animations/waxchromatics.png" />
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: #292929;
  width: 100%;
`
const ContentWrapper = styled.div`
  max-width: 1234px;
  /* margin: top right // bottom left */
  margin: 0 auto;
  /* padding: top right // bottom left */
  padding: 100px 30px;

  display: grid;
  grid-template-columns: 550px auto;
`

const TextWrapper = styled.div`
  max-width: 450px;
  display: grid;
  gap: 30px;
`
const Title = styled(H3)`
  color: white;
`
const Description = styled(MediumText)`
  color: white;
  font-size: 17px;
  line-height: 130%;
`
const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: 115px 155px 150px;
`
