import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  max-width: 100%;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div``;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 6px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
`;

const StartButton = styled.button`
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 10px 22px;
  font-size: 14px;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #ff5252;
  }
`;

const Status = styled.div`
  text-align: right;
  font-size: 12px;
  margin-top: 20px;
  margin-bottom: 10px;
  color: #888;
`;

const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TaskCard = styled.div`
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 6px;
  padding: 14px;
`;

const TaskTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

const TaskLabel = styled.div`
  font-size: 12px;
  color: #888;
`;

const Footer = styled.div`
  margin-top: 15px;
  text-align: right;
`;

const PendingLink = styled.a`
  font-size: 13px;
  color: #ff4d4d;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const UpcomingTasks = () => {
  const tasks = [
    "Check if your wedding date is on an auspicious day",
    "Do you want a destination wedding?",
    "Call Friend and family Friends",
  ];

  return (
    <Container>
      <Header>
        <Left>
          <Title>Upcoming tasks</Title>
          <Subtitle>
            Confused with different task and operations? Checkout our templates
            and don’t miss out anything
          </Subtitle>
        </Left>
        <Right>
          <StartButton>Get Started</StartButton>
        </Right>
      </Header>

      <Status>0 OF 112 TASKS COMPLETED</Status>

      <TaskList>
        {tasks.map((task, index) => (
          <TaskCard key={index}>
            <TaskTitle>{task}</TaskTitle>
            <TaskLabel>Planning</TaskLabel>
          </TaskCard>
        ))}
      </TaskList>

      <Footer>
        <PendingLink>112 pending tasks &gt;</PendingLink>
      </Footer>
    </Container>
  );
};

export default UpcomingTasks;
