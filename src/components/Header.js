import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Logo = styled.h1`
  font-family: 'Pacifico', cursive;
  font-size: 36px;
  margin: 0;
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 20px;
  }
`;

const NavLink = styled.a`
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #f0c040;
  }
`;

const IconLink = styled.a`
  font-size: 24px;
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #f0c040;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Kuper's Portfolio</Logo>
      <NavLinks>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">Projects</NavLink>
        <NavLink href="#">About</NavLink>
        <NavLink href="#">Contact</NavLink>
        <IconLink href="#"><FaGithub /></IconLink>
        <IconLink href="#"><FaLinkedin /></IconLink>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
