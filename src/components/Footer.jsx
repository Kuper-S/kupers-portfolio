import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #1c1c1c;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.p`
  font-size: 14px;
  text-align: center;
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2023 Avihai Kuperberg | All rights reserved</FooterText>
    </FooterContainer>
  );
};

export default Footer;