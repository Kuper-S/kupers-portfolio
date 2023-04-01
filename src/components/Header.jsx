import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { slide as Menu } from 'react-burger-menu';

const HeaderContainer = styled.header`
  background-color: #262626;
  cursor: pointer;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

const Logo = styled.h1`
  font-family: 'PressStart2P', cursive;
  font-size: 36px;
  margin: 0;
  text-shadow: 2px 2px #000;
`;

const NavLinks = styled.nav`
  display: none;

  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    padding-right: 35px;

    & > *:not(:last-child) {
      margin-right: 20px;
    }
  }
`;

const NavLink = styled.a`
  font-family: 'PressStart2P', cursive;
  font-size: 18px;
  color: #fff;
  text-decoration: none;
  padding: 10px;
  border-radius: 20px;
  transition: background-color 0.2s;
  text-shadow: 1px 1px #000;

  &:hover {
    background-color: #f0c040;
  }
`;

const IconLink = styled.a`
  font-size: 24px;
  color: #fff;
  text-decoration: none;
  margin-left: 10px;
  text-shadow: 1px 1px #000;

  &:hover {
    color: #f0c040;
  }
`;

const MenuIcon = styled.div`
  display: none;
  position: relative;
  cursor: pointer;
  padding: 10px;
  z-index: 11;

  & > span {
    display: block;
    background-color: #fff;
    height: 3px;
    width: 25px;
    border-radius: 3px;
    margin-bottom: 5px;
  }

  @media only screen and (max-width: 767px) {
    display: block;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Super Kuper's</Logo>
      <NavLinks>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>
        <IconLink href="https://github.com/Kuper-S"><FaGithub /></IconLink>
        <IconLink href="https://www.linkedin.com/in/avihai-kuper-801a63217/"><FaLinkedin /></IconLink>
      </NavLinks>
      <MenuIcon>
        <Menu right>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </Menu>
        <span></span>
        <span></span>
        <span></span>
      </MenuIcon>
    </HeaderContainer>
  );
};

export default Header;
