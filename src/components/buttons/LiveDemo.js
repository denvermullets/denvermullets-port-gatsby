import React from "react";
import styled from "styled-components";
import { Caption2 } from "../styles/TextStyles";

// we're utilizing css grid to handle alignment inside the button which lets us
// have flexibility when we want to animate elements separately in the button
export default function LiveDemo(props) {
  return (
    // <Link to={props.url}>
    <a href={props.url} target="_blank" rel="noreferrer">
      <Wrapper>
        <IconWrapper>
          <Icon src="/images/icons/browser.svg" />
        </IconWrapper>
        <Title>{props.title}</Title>
      </Wrapper>
      {/* </Link> */}
    </a>
  );
}

// TODO: need to have props pass down if a button should exist or not
// since we're hard coding the 3 columns we should set a button to be disabled if
// there's no url provided for a 'Live Demo'

// wrapper is basic button styling
// grid template columns takes each column size, currently only 2 columns
const Wrapper = styled.div`
  width: auto;
  height: 41px;
  padding: 2px;
  background: linear-gradient(220.46deg, #06efb1 3.63%, #15ade0 96.85%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 1px 3px rgba(255, 255, 255, 0.1),
    inset 0px 0px 0px 0.5px rgba(0, 255, 206, 0.63);
  border-radius: 6px;

  display: grid;
  grid-template-columns: 40px auto;
  align-items: center;

  transition: 0.4s cubic-bezier(0.21, 0.61, 0.35, 1);

  :hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
      0px 15px 15px rgba(255, 255, 255, 0.05),
      inset 0px 0px 0px 0.5px rgba(0, 255, 206, 0.63);
    transform: translateY(-3px);
  }
`;

const Title = styled(Caption2)`
  color: white;
  padding-right: 8px;
`;
const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
const IconWrapper = styled.div`
  display: grid;
  justify-content: center;
  justify-self: center;
  align-content: center;
`;
