import React from 'react';
import styled from 'styled-components';

// ---------- styled parts ----------
const Wrapper = styled.section`
  background: #faf1d9;
  padding: 60px 20px;
  display: flex;
  justify-content: center;
`;

const Grid = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1000px;
  width: 100%;
`;

const Card = styled.div`
  width: 380px;
  background: #fff;
  border-radius: 12px;
  border: 1px solid #dcdcdc;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  box-shadow: 0 0 0 rgba(0,0,0,0);
  transition: box-shadow .25s;

  &:hover {
    box-shadow: 0 8px 18px rgba(0,0,0,.08);
  }

  @media (max-width: 420px) {
    width: 100%;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const Body = styled.div`
  padding: 35px 25px 45px;
`;

const Title = styled.h3`
  font-size: 22px;
  margin: 0 0 12px;
`;

const Sub = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #555;
  margin: 0 0 35px;
  white-space: pre-line; /* supports \n */
`;

const Btn = styled.button`
  background: #ff6d6d;
  color: #fff;
  border: none;
  border-radius: 28px;
  padding: 10px 50px;
  font-size: 15px;
  cursor: pointer;
  transition: background .2s;

  &:hover {
    background: #ff5959;
  }
`;

// ---------- data ----------
const promos = [
  {
    img: 'https://i.ibb.co/mSZJ46k/website.jpg',
    title: 'Website',
    text: 'Personalized websites and custom\nURLs for your wedding',
  },
  {
    img: 'https://i.ibb.co/Y38t5DQ/cards.jpg',
    title: 'Invitation Cards',
    text: 'Choose a design to match your theme\nAdd your event details',
  },
];

// ---------- component ----------
const PromoCards = () => (
  <Wrapper>
    <Grid>
      {promos.map(({ img, title, text }) => (
        <Card key={title}>
          <Img src={img} alt={title} />
          <Body>
            <Title>{title}</Title>
            <Sub>{text}</Sub>
            <Btn>Get Started</Btn>
          </Body>
        </Card>
      ))}
    </Grid>
  </Wrapper>
);

export default PromoCards;
