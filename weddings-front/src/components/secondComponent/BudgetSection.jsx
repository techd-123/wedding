import React from "react";
import styled from "styled-components";
import { FaWallet, FaMoneyBillWave } from "react-icons/fa";

// -------- Styled Components --------
const Container = styled.section`
  padding: 40px 20px;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  min-width: 280px;
`;

const Right = styled.div`
  flex: 2;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 5px;
`;

const SubTitle = styled.p`
  font-size: 15px;
  color: #555;
  margin-bottom: 20px;
`;

const DonutChart = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: conic-gradient(
    #ff4d4d 0% 20%,
    #feca57 20% 35%,
    #fab1a0 35% 45%,
    #00cec9 45% 60%,
    #ffeaa7 60% 70%,
    #81ecec 70% 80%,
    #a29bfe 80% 90%,
    #fd79a8 90% 100%
  );
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DonutCenter = styled.div`
  width: 110px;
  height: 110px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Amount = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const HowText = styled.div`
  font-size: 12px;
  color: #666;
`;

const CustomizeBtn = styled.button`
  background-color: #ff7a7a;
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  margin-top: 15px;
  cursor: pointer;
  font-size: 14px;
`;

const StatBox = styled.div`
  flex: 1;
  border-right: 1px solid #eee;
  padding-right: 20px;

  &:last-child {
    border: none;
  }

  @media (max-width: 768px) {
    border: none;
    padding: 0;
  }
`;

const StatLabel = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #444;
  gap: 8px;
`;

const StatValue = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin: 8px 0;
`;

const DetailLink = styled.div`
  font-size: 13px;
  color: #ff7a7a;
  cursor: pointer;
`;

const StatSub = styled.div`
  font-size: 13px;
  color: #777;
`;

const Divider = styled.hr`
  margin: 30px 0 20px;
  border: none;
  border-top: 1px solid #eee;
`;

const Legend = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
`;

const Dot = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) => props.color || "#000"};
  margin-right: 6px;
`;

const SeeAll = styled.div`
  color: #007bff;
  font-size: 13px;
  margin-left: auto;
  cursor: pointer;
`;

// -------- Component --------
const BudgetSection = () => {
  return (
    <Container>
      <Top>
        <Left>
          <Title>Budget</Title>
          <SubTitle>
            Find your kind of place for the celebration to go down.
          </SubTitle>

          <DonutChart>
            <DonutCenter>
              <Amount>₹15,60,270</Amount>
              <HowText>How we calculate</HowText>
            </DonutCenter>
          </DonutChart>

          <CustomizeBtn>Customize Budget</CustomizeBtn>
        </Left>

        <Right>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
            <StatBox>
              <StatLabel>
                <FaWallet /> ESTIMATED BUDGET
              </StatLabel>
              <StatValue>₹15,60,270</StatValue>
              <DetailLink>Detailed Budget</DetailLink>
            </StatBox>

            <StatBox>
              <StatLabel>
                <FaMoneyBillWave /> FINAL COST
              </StatLabel>
              <StatValue>₹ 0</StatValue>
              <StatSub>Paid: ₹ 0 &nbsp;&nbsp; Pending: ₹ 0</StatSub>
            </StatBox>
          </div>

          <Divider />

          <Legend>
            <LegendItem>
              <Dot color="#ff4d4d" /> Catering
            </LegendItem>
            <LegendItem>
              <Dot color="#feca57" /> Venues
            </LegendItem>
            <LegendItem>
              <Dot color="#00cec9" /> Events
            </LegendItem>
            <LegendItem>
              <Dot color="#fab1a0" /> Jewelry
            </LegendItem>
            <LegendItem>
              <Dot color="#81ecec" /> Wedding accessories
            </LegendItem>
            <LegendItem>
              <Dot color="#ffeaa7" /> Transportation
            </LegendItem>
            <LegendItem>
              <Dot color="#a29bfe" /> Catering
            </LegendItem>
            <LegendItem>
              <Dot color="#fd79a8" /> Entertainments
            </LegendItem>
            <SeeAll>See all</SeeAll>
          </Legend>
        </Right>
      </Top>

      <Divider />
    </Container>
  );
};

export default BudgetSection;
