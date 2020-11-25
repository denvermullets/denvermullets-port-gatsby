import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Caption2 } from "../styles/TextStyles"

// we're utilizing css grid to handle alignment inside the button which lets us
// have flexibility when we want to animate elements separately in the button
export default function ViewProjects(props) {
  return (
    <Link to="/page-2">
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
  padding: 10px;
  background: linear-gradient(220.46deg, #06efb1 3.63%, #15ade0 96.85%);
  box-shadow: 0px 5px 10px rgba(9, 228, 186, 0.15);
  border-radius: 18px;
  gap: 5px;

  display: grid;
  grid-template-columns: 53px auto;
  align-items: center;
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
