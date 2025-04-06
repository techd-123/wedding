import styled from "styled-components";
import Group from "../assets/images/Group.png";
const Section = styled.div``;

const Container = styled.div`
  max-width: 1600px;
  margin: auto;
  padding: 10px;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
`;

const Logo = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
`;
const Nav = styled.ul`
  display: flex;
  gap: 30px;
`;
const NavList = styled.li`
  list-style: none;
  font-weight: 700;
  font-size: 16px;
`;
const HeaderButton = styled.div`
  display: flex;
  gap: 10px;
`;
const Img = styled.img``;
const Text = styled.h2``;

const Button = styled.button`
  padding: 13.5px 24px 13.89px 24px;
  border-radius: 50px;
  background-color: #2f1d41;
  color: #ffffff;
  border: none;
`;
const LoginButton = styled(Button)`
  background-color: #ff6b6b;
`;

const NavBar = () => {
  return (
    <Section>
      <Container>
        <Header>
          <Logo>
            <Img src={Group} />
            <Text>PLAN A</Text>
          </Logo>

          <Nav>
            <NavList>Home</NavList>
            <NavList>Events</NavList>
            <NavList>Vendors</NavList>
            <NavList>Services</NavList>
            <NavList>About Us</NavList>
          </Nav>

          <HeaderButton>
            <Button>Sign up</Button>
            <LoginButton>Login </LoginButton>
          </HeaderButton>
        </Header>
      </Container>
    </Section>
  );
};

export default NavBar;
