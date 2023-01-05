import React from "react";
import styled from "styled-components";
import { H3, MediumText } from "../styles/TextStyles";
import LiveDemo from "../buttons/LiveDemo";
import RepoBtn from "../buttons/RepoBtn";
import SiteImage from "../animations/SiteImage";

// we're going to take in props w/all the information
export default function Project(props) {
  const { title, bio, front, back, image, url, buttonTitle } = props;
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>{title}</Title>
          <Description>{bio}</Description>
          <ButtonGrid>
            {url && <LiveDemo title="Website" url={url} />}
            {front && (
              <RepoBtn
                title={buttonTitle ? buttonTitle : "Frontend"}
                url={front}
              />
            )}
            {back && <RepoBtn title="Backend" url={back} />}
          </ButtonGrid>
        </TextWrapper>
        <SiteImage url={image} />
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #292929;
  width: 100%;
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  /* margin: top right // bottom left */
  margin: 0 auto;
  /* padding: top right // bottom left */
  padding: 100px 30px;

  display: grid;
  grid-template-columns: 550px auto;
`;

const TextWrapper = styled.div`
  max-width: 450px;
  display: grid;
  gap: 30px;
`;

const Title = styled(H3)`
  color: white;
`;

const Description = styled(MediumText)`
  color: white;
  font-size: 17px;
  line-height: 130%;
`;

const ButtonGrid = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;
