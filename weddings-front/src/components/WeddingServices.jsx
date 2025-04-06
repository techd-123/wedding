import React from "react";
import styled from "styled-components";
import card1 from "../assets/images/image 3.svg";
import card2 from "../assets/images/image 3.svg";
import card3 from "../assets/images/image 3.svg";
import card4 from "../assets/images/image 3.svg";
import card5 from "../assets/images/image 3.svg";

const WeddingServices = () => {
  return (
    <Wrapper>
      <CardGrid>
        <Card>
          <TextContent>
            <h5>OUR SERVICES</h5>
            <h3>
              Discover Our <br /> Service
            </h3>
            <p>
              Experience the perfect blend of fun and creativity with our
              personalized wedding planning services.
            </p>
          </TextContent>
        </Card>

        {/* Card 1 */}
        <Card $bg="#2563EB">
          <TextContent>
            <h3>Photographers</h3>
            <p>
              Explore our top photographers and browse through our stunning
              galleries. Witness breathtaking moments captured by our talented
              professionals!
            </p>
            <a href="#">Explore Photographers →</a>
          </TextContent>
          <Image src={card1} alt="Photographers" />
        </Card>

        {/* Card 2 */}
        <Card $bg="#60A5FA">
          <TextContent>
            <h3>Explore Our Venues</h3>
            <p>
              Discover the perfect venue for your special event! Browse our
              curated list of stunning locations...
            </p>
            <a href="#">See Our Venues →</a>
          </TextContent>
          <Image src={card2} alt="Venues" />
        </Card>

        {/* Card 3 */}
        <Card $bg="#FCD34D" $special>
          <TextContent>
            <h3>Taste our Best Cakes</h3>
            <p>
              Indulge in the finest cakes crafted by top bakers! From elegant
              wedding cakes to custom creations...
            </p>
            <a href="#">Contact Bakers →</a>
          </TextContent>
          <Image src={card3} alt="Cakes" />
        </Card>

        {/* Card 4 */}
        <Card $bg="#A7F3D0">
          <TextContent>
            <h3>Top Makeup Artists for Your Big Day</h3>
            <p>
              Enhance your beauty with the finest makeup artists! From flawless
              bridal looks to glamorous styles...
            </p>
            <a href="#">Connect Them →</a>
          </TextContent>
          <Image src={card4} alt="Makeup" />
        </Card>

        {/* Card 5 */}
        <Card $bg="#FBCFE8">
          <TextContent>
            <h3>Party Mode</h3>
            <p>
              Discover a variety of party themes tailored to your wedding
              traditions and customs...
            </p>
            <a href="#">On the Party →</a>
          </TextContent>
          <Image src={card5} alt="Party" />
        </Card>
      </CardGrid>
    </Wrapper>
  );
};

export default WeddingServices;

const Wrapper = styled.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 cards per row */
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* stack on mobile */
  }
`;

const Card = styled.div`
  background-color: ${(props) => props.$bg || "#fff"};
  border-radius: ${(props) => (props.$special ? "60px 0 60px 0" : "1.5rem")};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  box-shadow: ${(props) =>
    props.$special ? "0 8px 24px rgba(0, 0, 0, 0.1)" : "none"};
  font-family: "Poppins", sans-serif;
`;

const TextContent = styled.div`
  h3 {
    font-size: 1.75rem;
    margin-bottom: 0.75rem;
  }

  p {
    margin-bottom: 1rem;
    font-size: 1rem;
    line-height: 1.6;
  }

  a {
    color: #000;
    font-weight: bold;
    text-decoration: none;
  }
`;

const Image = styled.img`
  width: 100%;
  max-height: 180px;
  object-fit: contain;
  margin-top: 1rem;
`;
