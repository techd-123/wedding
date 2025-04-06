import React from "react";
import styled from "styled-components";

const Section = styled.div`
  background-color: #fff5e1;
`;

const Container = styled.section`
  max-width: 1200px;
  margin: auto;

  padding: 4rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 600;
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const VendorButton = styled.button`
  background-color: black;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  min-width: 130px;

  &:hover {
    opacity: 0.85;
  }
`;

const VendorSection = () => {
  const vendorTypes = [
    "Rentals",
    "Beauty",
    "Bridal Salons",
    "Videographers",
    "Florists",
    "Venues",
    "Wedding Planners",
    "Florists",
    "View all",
  ];

  return (
    <Section>
      <Container>
        <Title>Build your vendor team</Title>
        <ButtonGrid>
          {vendorTypes.map((type, index) => (
            <VendorButton key={index}>{type}</VendorButton>
          ))}
        </ButtonGrid>
      </Container>
    </Section>
  );
};

export default VendorSection;
