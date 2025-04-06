import styled from "styled-components";
import youtubeIcon from "../assets/images/youtube.svg";
import listImage1 from "../assets/images/youlist.svg";
import listImage2 from "../assets/images/Listitem.svg";

const Container = styled.div`
  max-width: 1800px;
  margin: 0 auto;
  padding: 4rem 0;
`;

const MainContainer = styled.div`
  display: flex;
`;

const Section = styled.div`
  width: 50%;
  height: 700px;
  background-size: cover;
  background-position: center;
  position: relative; 
`;

const FirstSection = styled(Section)`
  background-image: url(${listImage1});
`;

const SecondSection = styled(Section)`
  background-image: url(${listImage2});
`;

const YoutubeIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  z-index: 2;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;

const Youtube = () => {
  return (
    <Container>
      <MainContainer>
        <FirstSection>
          <YoutubeIcon src={youtubeIcon} alt="YouTube 1" />
        </FirstSection>
        <SecondSection>
          <YoutubeIcon src={youtubeIcon} alt="YouTube 2" />
        </SecondSection>
      </MainContainer>
    </Container>
  );
};

export default Youtube;
