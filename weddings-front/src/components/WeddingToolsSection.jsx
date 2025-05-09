import React from "react";
import styled from "styled-components";
import GroupImage from "../assets/img/Group 32 1.svg";

import {
  FaClipboardList,
  FaDollarSign,
  FaMapMarkerAlt,
  FaUserFriends,
  FaBell,
  FaHandshake,
} from "react-icons/fa";
const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;
const Section = styled.section`
  display: flex;
  padding: 60px 20px;
  align-items: center;
  gap: 40px;
`;
const Main = styled.div`
  background: #fff8f2;
`;
const Left = styled.div`
  flex: 1 1 500px;
`;

const Title = styled.h2`
  font-size: 32px;
  color: #1f1f4e;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #444;
  line-height: 1.6;
`;

const Right = styled.div`
  flex: 1 1 300px;
`;

const SingleImage = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`;

// ---------- Features ----------
const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-top: 50px;
`;

const FeatureCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

const IconBox = styled.div`
  background: ${(props) => props.bg || "#eee"};
  padding: 12px;
  border-radius: 12px;
  color: #fff;
  font-size: 18px;
`;

const FeatureText = styled.div``;

const FeatureTitle = styled.h4`
  font-size: 16px;
  margin: 0 0 6px;
  color: #1f1f4e;
`;

const FeatureDesc = styled.p`
  font-size: 14px;
  color: #666;
`;

const WeddingToolsSection = () => {
  const features = [
    {
      icon: <FaClipboardList />,
      bg: "#ff6b6b",
      title: "Personalized Dashboard",
      desc: "Organize every wedding detail",
    },
    {
      icon: <FaDollarSign />,
      bg: "#ff6b6b",
      title: "Budget & Expense Tracker",
      desc: "Organize every wedding detail",
    },
    {
      icon: <FaMapMarkerAlt />,
      bg: "#ff6b6b",
      title: "Live Tracking & Updates",
      desc: "Organize every wedding detail",
    },
    {
      icon: <FaHandshake />,
      bg: "#f4c542",
      title: "Vendor Booking System",
      desc: "Find top-rated vendors to bring your vision to life.",
    },
    {
      icon: <FaUserFriends />,
      bg: "#f4c542",
      title: "Guest List & RSVP Manager",
      desc: "Streamline invitations, track responses, and more.",
    },
    {
      icon: <FaBell />,
      bg: "#f4c542",
      title: "Live Chat & Notifications",
      desc: "Get instant updates and manage guests on the go.",
    },
  ];

  return (
    <Main>
      <Container>
        <Section>
          <Left>
            <Title>The Only Wedding Planning Tool You’ll Ever Need</Title>
            <Description>
              Plan, organize, and track your wedding stress-free with our
              all-in-one dashboard. Manage vendors, guests, and your budget—all
              in one place!
            </Description>
            <FeaturesGrid>
              {features.map((f, idx) => (
                <FeatureCard key={idx}>
                  <IconBox bg={f.bg}>{f.icon}</IconBox>
                  <FeatureText>
                    <FeatureTitle>{f.title}</FeatureTitle>
                    <FeatureDesc>{f.desc}</FeatureDesc>
                  </FeatureText>
                </FeatureCard>
              ))}
            </FeaturesGrid>
          </Left>
          <Right>
            <SingleImage src={GroupImage} alt="Wedding" />
          </Right>
        </Section>
      </Container>
    </Main>
  );
};

export default WeddingToolsSection;
