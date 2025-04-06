import React from "react";
import styled from "styled-components";
import cakeImg from "../assets/images/image 3.svg"; // Replace with your actual image path

const Card = styled.div`
  background-color: #fde047; /* Yellow */
   /* Top-left & Bottom-right rounded */
  padding: 2rem;
  max-width: 400px;
  color: #111827;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  font-family: "Poppins", sans-serif;
  border-radius: 120px;
`;

const TextBox = styled.div`
  z-index: 2;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const CTA = styled.a`
  font-weight: 700;
  color: #111827;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Image = styled.img`
  width: 100%;
  max-height: 180px;
  object-fit: contain;
  margin-top: 1rem;
`;

const CakeCard = () => {
  return (
    <Card>
      <TextBox>
        <Title>
          Taste our Best <br />
          Cakes
        </Title>
        <Description>
          Indulge in the finest cakes crafted by top bakers! From elegant
          wedding cakes to delightful custom creations, explore a variety of
          flavors and designs that make every celebration sweeter. 🍰✨
        </Description>
        <CTA href="#">CONTACT BAKERS →</CTA>
      </TextBox>
      <Image src={cakeImg} alt="Wedding Cake" />
    </Card>
  );
};

export default CakeCard;
