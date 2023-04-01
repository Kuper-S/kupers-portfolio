import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 50px 0;
  background-color: #1c1c1c;
  color: #fff;
`;

const SkillCard = styled.div`
  width: 200px;
  height: 200px;
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.2);
  position: relative;
  overflow: hidden;

  &:hover .skill-icon {
    transform: rotate(360deg);
  }

  &:hover .skill-name {
    animation: ${fadeIn} 0.5s ease-in-out forwards;
  }
`;

const SkillIcon = styled.div`
  font-size: 5rem;
  margin-bottom: 20px;
  transition: transform 0.5s ease-in-out;
  color: #fff;

  &:hover {
    cursor: pointer;
  }
`;

const SkillName = styled.div`
  font-size: 1.5rem;
  text-align: center;
  position: absolute;
  bottom: -50px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
`;

const Skills = () => {
  return (
    <SkillsContainer>
      <SkillCard>
        <SkillIcon className="skill-icon">🚀</SkillIcon>
        <SkillName className="skill-name">React</SkillName>
      </SkillCard>
      <SkillCard>
        <SkillIcon className="skill-icon">🐍</SkillIcon>
        <SkillName className="skill-name">Python</SkillName>
      </SkillCard>
      <SkillCard>
        <SkillIcon className="skill-icon">🌐</SkillIcon>
        <SkillName className="skill-name">HTML/CSS</SkillName>
      </SkillCard>
    </SkillsContainer>
  );
};

export default Skills;
