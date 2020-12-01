import React from "react"
import styled from "styled-components"

export default function WavyLines() {
  return (
    <Wrapper>
      <Background />
      <Wave src="/images/waves/wave1.svg" />
      <Wave src="/images/waves/wave2.svg" />
      <Wave src="/images/waves/wave3.svg" />
      <Wave src="/images/waves/wave4.svg" />
      <Wave src="/images/waves/wave5.svg" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`

const Wave = styled.img`
  position: absolute;
  z-index: -1;
  top: 300px;
  left: -35%;
  transition: 2.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  /* any size larger than this and you'll see ends of svg path so let's move it over */
  @media only screen and (min-width: 1650px) {
    left: -2%;
  }
`
const Background = styled.div`
  background: #292929;
  position: absolute;
  width: 100%;
  height: 800px;
  z-index: -1;
`
