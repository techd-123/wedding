import React from "react";
import styled from "styled-components";

const Section = styled.div`
  background-color: #1c1c1c;
  color: white;
  border-radius: 30px;
  padding: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1200px;
  margin: auto;
`;

const StatBox = styled.div`
  text-align: center;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0;
  }

  p {
    font-size: 1rem;
    color: #b0b0b0;
    margin-top: 10px;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 60px;
  background-color: #4b4b4b;
`;

const InfoSection = () => {
  return (
    <Section>
      <StatBox>
        <h1>11,500+</h1>
        <p>weddings</p>
      </StatBox>

      <Divider />

      <StatBox>
        <h1>100+</h1>
        <p>locations</p>
      </StatBox>

      <Divider />

      <StatBox>
        <h1>200+</h1>
        <p>Sessions</p>
      </StatBox>

      <Divider />

      <StatBox>
        <h1>8HR</h1>
        <p>Workshops</p>
      </StatBox>
    </Section>
  );
};

export default InfoSection;
