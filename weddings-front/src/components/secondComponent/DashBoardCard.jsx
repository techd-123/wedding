import React from 'react';
import styled from 'styled-components';
import { FaPen } from 'react-icons/fa';

const Container = styled.div`
  background-color: #eaf7f9;
  padding: 40px;
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  display: flex;
  padding: 20px;
  gap: 30px;
  align-items: center;
  width: 90%;
  max-width: 1000px;
`;

const Image = styled.img`
  width: 130px;
  height: 130px;
  object-fit: cover;
  border-radius: 10px;
`;

const InfoSection = styled.div`
  flex-grow: 1;
`;

const Welcome = styled.h3`
  margin: 0;
  font-size: 18px;
`;

const DateRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: gray;
  font-size: 14px;
`;

const EditText = styled.span`
  color: #ff4d4d;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const StatsRow = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 15px;
`;

const StatCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

const StatText = styled.div`
  font-size: 14px;
`;

const Circle = styled.div`
  width: 28px;
  height: 28px;
  border: 3px solid #ddd;
  border-radius: 50%;
  position: relative;

  &:after {
    content: '';
    width: 3px;
    height: 3px;
    background: red;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    right: 2px;
  }
`;

const DashboardCard = () => {
  return (
    <Container>
      <Card>
        <Image src="https://i.ibb.co/YBcz0XP/wedding-photo.jpg" alt="wedding" />
        <InfoSection>
          <Welcome>Welcome Benison Babu</Welcome>
          <DateRow>
            <span>10th of July, 2025</span>
            <EditText><FaPen size={12} /> Edit</EditText>
          </DateRow>

          <StatsRow>
            <StatCard>
              <StatText>
                <strong>Services hired</strong><br />
                0 of 18
              </StatText>
              <Circle />
            </StatCard>
            <StatCard>
              <StatText>
                <strong>Tasks completed</strong><br />
                1 of 112
              </StatText>
              <Circle />
            </StatCard>
            <StatCard>
              <StatText>
                <strong>Guests attending</strong><br />
                0 of 2
              </StatText>
              <Circle />
            </StatCard>
          </StatsRow>
        </InfoSection>
      </Card>
    </Container>
  );
};

export default DashboardCard;
