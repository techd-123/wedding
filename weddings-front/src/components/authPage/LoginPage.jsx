import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #ffe2e2, #fad4c0);
  padding: 20px;
`;

const FormWrapper = styled.div`
  background-color: #fff;
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  max-width: 420px;
  width: 100%;
  position: relative;
`;

const Title = styled.h2`
  text-align: center;
  color: #1f1f4e;
  margin-bottom: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 6px;
  font-size: 14px;
  color: #333;
`;

const Input = styled.input`
  padding: 12px 14px;
  border: 1px solid #ccc;
  border-radius: 12px;
  font-size: 16px;
  margin-bottom: 20px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ff6b6b;
  }
`;

const Button = styled.button`
  background-color: #ff6b6b;
  color: #fff;
  border: none;
  padding: 14px;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #e45757;
  }
`;

const Info = styled.p`
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-top: 16px;

  a {
    color: #ff6b6b;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 20px;
  color: #ff6b6b;
  cursor: pointer;
`;

const LoginPage = ({ onClose }) => {
  return (
    <Container>
      <FormWrapper>
        <CloseButton onClick={onClose}>X</CloseButton>
        <Title>Login to Your Account</Title>
        <Form>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" placeholder="you@example.com" />

          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="Enter your password" />

          <Button type="submit">Login</Button>
        </Form>
        <Info>
          Don't have an account? <a href="/register">Register here</a>
        </Info>
      </FormWrapper>
    </Container>
  );
};

export default LoginPage;
