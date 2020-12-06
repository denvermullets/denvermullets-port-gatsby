import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Caption2 } from "../styles/TextStyles"

// we're utilizing css grid to handle alignment inside the button which lets us
// have flexibility when we want to animate elements separately in the button
export default function ViewProjects(props) {
  return (
    <Link to="#">
      <Wrapper>
        <IconWrapper>
          <Icon src="/images/icons/squares.svg" />
        </IconWrapper>
        <Title>{props.title}</Title>
      </Wrapper>
    </Link>
  )
}

// wrapper is basic button styling
// grid template columns takes each column size, currently only 2 columns
const Wrapper = styled.div`
  width: 200px;
  height: 61px;
  /* padding: 12px; */
  padding: 8px;
  background: linear-gradient(220.46deg, #06efb1 3.63%, #15ade0 96.85%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 1px 3px rgba(255, 255, 255, 0.1),
    inset 0px 0px 0px 0.5px rgba(0, 255, 206, 0.63);
  border-radius: 6px;
  gap: 5px;

  display: grid;
  grid-template-columns: 53px auto;
  align-items: center;

  transition: 0.4s cubic-bezier(0.21, 0.61, 0.35, 1);

  :hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
      0px 15px 15px rgba(255, 255, 255, 0.05),
      inset 0px 0px 0px 0.5px rgba(0, 255, 206, 0.63);
    transform: translateY(-3px);
  }
`

const Title = styled(Caption2)`
  color: white;
`
const Icon = styled.img`
  width: 30px;
  height: 30px;
`
const IconWrapper = styled.div`
  /* width: 30px;
  height: 30px; */
  /* background: linear-gradient(220.46deg, #ffe099 3.63%, #ef436b 96.85%); */
  /* border-radius: 50%; */
  display: grid;
  justify-content: center;
  justify-self: center;
  align-content: center;
`
