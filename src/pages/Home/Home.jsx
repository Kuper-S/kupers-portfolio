import React, {useState} from 'react';
import RetroButtons from '../../components/RetroButtons';
import Animations  from '../../components/Animation/Animations';
import styled, { keyframes } from 'styled-components';
import Mario from '../../assets/annimation/super-mario-mario.gif';

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


const move = keyframes`
  from {
    transform: translate(0, 0);
  }

  to {
    transform: translate(-10px, -10px);
  }
`;

const GitImage = styled.img`
  position: sticky;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  animation: ${move} 1s ease-in-out infinite alternate;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;


const Home = () => {
  const [isAnimating, setIsAnimating] = React.useState(false);
  
  const handleFightClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 3000); // Close the animation after 3 seconds
  };
  
  return (
    <HomeContainer>
     {isAnimating && <Animations />}
      <HeroText>Welcome to My Retro Portfolio</HeroText>
      <GitImage src={Mario} alt="git image" />
      <LinesContainer>
        <Line />
        <p>Welcome to my retro-themed portfolio!</p>
        <Line />
      </LinesContainer>
      <RetroButtons handleFightClick={handleFightClick}/>
    </HomeContainer>
  );
};

export default Home;
