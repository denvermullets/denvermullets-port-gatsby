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
    backdrop-filter: blur(12px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 5px;
  }

  .light {
    position: absolute;
    width: 345px;
    height: 162px;
    left: 212px;
    top: 111px;

    background: rgba(255, 255, 255, 0.35);
    filter: blur(115px);
  }
`
