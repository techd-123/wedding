import React, { useState } from "react";
import styled from "styled-components";


import img1 from "../assets/images/accordion.svg";
import img2 from "../assets/images/accordion.svg";
import img3 from "../assets/images/accordion.svg";
import img4 from "../assets/images/accordion.svg";


const images = [img1, img2, img3, img4];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <AccordionContainer>
      {images.map((img, index) => (
        <AccordionCard
          key={index}
          $src={img}
          $isActive={activeIndex === index}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <Overlay>{`Card ${index + 1}`}</Overlay>
        </AccordionCard>
      ))}
    </AccordionContainer>
  );
};

export default Accordion;
const AccordionContainer = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  gap: 30px;
`;

const AccordionCard = styled.div`
  flex: ${({ $isActive }) => ($isActive ? "4" : "1")};
  background-image: ${({ $src }) => `url(${$src})`};
  background-size: cover;
  background-position: center;
  position: relative;
  transition: flex 0.4s ease;
  cursor: pointer;

  &:hover {
    z-index: 2;
  }
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.6);
`;
