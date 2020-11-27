import React from "react"
import styled from "styled-components"

export default function MockupAnimation() {
  return (
    <Wrapper>
      <div className="light" />
      <div className="vscode" />
      <div className="chrome" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  perspective: 5000;
  /* perspective-origin: top left; */

  // select all div elements to transform
  div {
    transform: rotateY(-10deg) rotateX(20deg);
    transform-origin: bottom left;
  }

  * {
    transition: 2.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  // select all div's hover state
  :hover div {
    transform: rotateY(0deg) rotateX(0deg);
    /* & is selecting self, so parent div node then we select each classname */
    &.vscode {
      transition-delay: 0.05s;
    }
    &.chrome {
      transition-delay: 0.2s;
      transform: translate(-45px, 20px);
    }

    :hover {
      filter: brightness(108%) saturate(110%);
    }
  }

  .vscode {
    position: absolute;
    width: 580px;
    height: 357.37px;
    left: 0px;
    top: 0px;

    background: url("/images/animations/vscode.svg"),
      linear-gradient(
        220.46deg,
        rgba(6, 239, 177, 0.6) 3.63%,
        rgba(21, 173, 224, 0.6) 96.85%
      );
    backdrop-filter: blur(15px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 5px;
  }

  .chrome {
    position: absolute;
    width: 580px;
    height: 357.37px;
    left: 120px;
    top: 54px;

    background: url("/images/animations/chrome.svg"),
      linear-gradient(
        220.46deg,
        rgba(6, 239, 177, 0.5) 3.63%,
        rgba(21, 173, 224, 0.5) 96.85%
      );
    backdrop-filter: blur(6px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 5px;
  }

  .light {
    position: absolute;
    width: 453px;
    height: 162px;
    left: 104px;
    top: 111px;

    background: rgba(255, 255, 255, 0.55);
    filter: blur(35px);
  }
`
