import styled from "styled-components";
import Star from "../assets/images/star.png";
import LightBox from "../assets/images/lightbox.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Section = styled.div`
  background-color: #ffd16630;
`;
const Wrapper = styled.div`
  background-color: #feef79;
  margin-top: 20px;
  border-radius: 0px 0px 80px 80px;
`;
const Container = styled.div``;
const HeaderButton = styled.div`
  display: flex;
  gap: 10px;
`;
const Button = styled.button`
  padding: 13.5px 24px 13.89px 24px;
  border-radius: 50px;
  background-color: #2f1d41;
  color: #ffffff;
  border: none;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 60vh;
  position: relative;
  gap: 20px;
  max-width: 1000px;
  margin: auto;
  padding: 10px;
`;

const Content = styled.div`
  position: relative;
  display: inline-block;
`;
const Img = styled.img``;
const ImgContainer = styled.div`
  position: absolute;
  top: -60px;
  left: 10px;
`;

const HeadText = styled.h1`
  margin: 0;
  padding-left: 15px;
  display: inline-block;
  font-size: 65px;
  color: #211f54;
  font-weight: 700;
`;

const ParaText = styled.p`
  /* max-width: 1000px; */
  color: #6e7191;
  font-size: 20px;
  font-weight: 700;
`;
const LoginButton = styled(Button)`
  background-color: #ff6b6b;
`;
const ImgDiv = styled.div``;
const UnlineBtn = styled(Button)`
  background: none;
  color: #2f1d41;
  text-align: center;
  padding: 10px;
  font-size: 15px;
  font-weight: 700;
`;
const ButtonDiv = styled.div`
  margin-top: 10px;
  display: flex;
`;
const TextDiv = styled.div`
  margin-top: 30px;
  text-align: start;
`;
const SecondWrapper = styled.div`
  max-width: 1190px;
  margin: auto;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
`;
const ButtonSecond = styled.div`
  display: flex;
  align-items: center;
`;
const MainText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
const WedText = styled(HeadText)`
  font-size: 198px;
  color: #b0babf;
  font-weight: 700;
`;
const HeroPage = () => {
  return (
    <Section>
      <Wrapper>
        <Container>
          <Main>
            <Content>
              <ImgContainer>
                <Img src={Star} alt="Star" />
              </ImgContainer>

              <HeadText>
                Weddings, Events, Meetups & <br /> Conferences{" "}
              </HeadText>
            </Content>
            <ParaText>
              "Bringing Your Dream Wedding to Life – Anywhere in the World! ✨💍
              We specialize in planning, designing, and crafting unforgettable
              weddings for global clients. Whether it's an intimate ceremony or
              a grand celebration, we make your special day magical—no matter
              where you are!"
            </ParaText>
            <HeaderButton>
              <LoginButton>Explore More</LoginButton>
            </HeaderButton>
          </Main>
        </Container>
      </Wrapper>
      <Container>
        <SecondWrapper>
          <ImgDiv>
            <Img src={LightBox} alt="Star" />
          </ImgDiv>
          <TextDiv>
            <HeadText>
              Crafting Unforgettable wedding Parties with Creativity and Fun!
            </HeadText>
            <ParaText>
              Join us in creating a celebration your child will remember
              forever. From themed parties to enchanting decorations, we bring
              dreams to life!
            </ParaText>
            <ButtonDiv>
              <Button>CONNECT US</Button>
              <ButtonSecond>
                <UnlineBtn>CONNECT US</UnlineBtn>
                <ArrowForwardIcon />
              </ButtonSecond>
            </ButtonDiv>
          </TextDiv>
        </SecondWrapper>
        <MainText>
          <WedText>WEDDING</WedText>
        </MainText>
      </Container>
    </Section>
  );
};

export default HeroPage;
