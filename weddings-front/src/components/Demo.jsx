// WeddingServices.jsx
import React from "react";
import styled from "styled-components";
import card1 from "../src/assets/images/image 3.svg";
import card2 from "../src/assets/images/image 3.svg";
import card3 from "../src/assets/images/image 3.svg";
import card4 from "../src/assets/images/image 3.svg";
import card5 from "../src/assets/images/image 3.svg";

const Container = styled.section`
  padding: 60px 30px;
  background: white;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  margin-bottom: 40px;
`;

const Subtitle = styled.p`
  font-size: 12px;
  letter-spacing: 1px;
  color: #333;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin: 10px 0;
`;

const Description = styled.p`
  font-size: 16px;
  color: #444;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 30px;
`;

const Card = styled.div`
  background-color: ${(props) => props.bg || "#eee"};
  border-radius: 30px;
  padding: 30px;
  color: ${(props) => props.text || "white"};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  min-height: 340px;
`;

const CardTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 15px;
`;

const CardText = styled.p`
  font-size: 15px;
  color: ${(props) => props.subText || "#f1f1f1"};
`;

const CardLink = styled.a`
  margin-top: 20px;
  display: inline-block;
  font-weight: bold;
  font-size: 14px;
  color: ${(props) => props.linkColor || "white"};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const CardImage = styled.img`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 100px;
`;

const Demo = () => {
  const cards = [
    {
      title: "Photographers",
      text: "Explore our top photographers and browse through our stunning galleries. Witness breathtaking moments captured by our talented professionals!",
      link: "EXPLORE PHOTOGRAPHERS →",
      image: card1,
      bg: "#2f80ed",
    },
    {
      title: "Explore Our Venues",
      text: "Discover the perfect venue for your special event! Browse our curated list of stunning locations, from elegant banquet halls to scenic outdoor spaces.",
      link: "SEE OUR VENUES →",
      image: card2,
      bg: "#84bcd3",
    },
    {
      title: "Taste our Best Cakes",
      text: "Indulge in the finest cakes crafted by top bakers! Explore a variety of flavors and designs that make every celebration sweeter.",
      link: "CONTACT BAKERS →",
      image: card3,
      bg: "#f9e248",
      textColor: "#111",
      linkColor: "#111",
    },
    {
      title: "Top Makeup Artists for Your Big Day",
      text: "Enhance your beauty with the finest makeup artists! From flawless bridal looks to glamorous event styles.",
      link: "CONNECT THEM →",
      image: card4,
      bg: "#cce5c6",
      textColor: "#111",
      linkColor: "#111",
    },
    {
      title: "Party Mode",
      text: "Discover a variety of party themes tailored to your wedding traditions and customs. Celebrate your special day in your unique style!",
      link: "ON THE PARTY →",
      image: card5,
      bg: "#f9d2e0",
      textColor: "#111",
      linkColor: "#111",
    },
  ];

  return (
    <Container>
      <Header>
        <Subtitle>OUR SERVICES</Subtitle>
        <Title>Discover Our Service</Title>
        <Description>
          Experience the perfect blend of fun and creativity with our
          personalized wedding planning services.
        </Description>
      </Header>

      <Grid>
        {cards.map((card, index) => (
          <Card key={index} bg={card.bg} text={card.textColor}>
            <div>
              <CardTitle>{card.title}</CardTitle>
              <CardText subText={card.textColor}>{card.text}</CardText>
              <CardLink linkColor={card.linkColor}>{card.link}</CardLink>
            </div>
            <CardImage src={card.image} alt={card.title} />
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default Demo;
