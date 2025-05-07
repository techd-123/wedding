import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: white;
  border-bottom: 2px solid #0099ff;
  padding: 20px 0;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 15px;
  font-size: 14px;
  color: #333;
  cursor: pointer;

  &:hover {
    color: #0099ff;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavList>
        <NavItem>Planning Tools</NavItem>
        <NavItem>Wedding Venues</NavItem>
        <NavItem>Wedding Vendors</NavItem>
        <NavItem>Wedding Cards</NavItem>
        <NavItem>Planning Tool</NavItem>
        <NavItem>Community</NavItem>
      </NavList>
    </NavbarContainer>
  );
};

export default Navbar;
