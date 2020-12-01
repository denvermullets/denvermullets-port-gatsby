import React from "react"
import styled from "styled-components"

export default function SiteImage(props) {
  return (
    <Wrapper>
      <SiteSample url={props.url} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  perspective: 5000;

  // select all div elements to transform
`

const SiteSample = styled.div`
  position: absolute;
  width: 480px;
  height: 282px;
  left: 0px;
  top: 0px;
  background: url(${props => props.url});
  background-size: 480px;
`
