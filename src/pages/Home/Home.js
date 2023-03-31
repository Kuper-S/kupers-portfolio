import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  background-color: #1c1c1c;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
  z-index: 0;
`;

const HeroText = styled.h1`
  font-family: 'Bungee', cursive;
  font-size: 4rem;
  text-align: center;
`;

const Subtitle = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  text-align: center;
`;


const LinesContainer = styled.div`
  font-family: 'VT323', monospace;
  font-size: 24px;
  text-align: center;
  margin: 20px;
`;

const Line = styled.div`
  border-top: 1px solid #fff;
  margin: 20px 0;
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroText>Welcome to My Retro Portfolio</HeroText>
      <LinesContainer>
        <Line />
        <p>Welcome to my retro-themed portfolio!</p>
        <Line />
      </LinesContainer>
        
    </HomeContainer>
  );
};

export default Home;
