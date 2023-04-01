import React from 'react';
import styled from 'styled-components';
import Skills from './Skills';
const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
`;

const SectionHeader = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const SkillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Skill = styled.div`
  background-color: #fff;
  color: #000;
  font-size: 1rem;
  font-weight: bold;
  padding: 8px 8px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px #000;
`;

const ShortDescription = styled.p`
  font-size: 1.2rem;
  margin-top: 50px;
`;

const Hero = () => {
  return (
    <SectionContainer>
        <ShortDescription>
        My name is Avihai Kuperberg, I'm 31 years old and I'm a full stack web developer and Python developer. I have a passion for writing code and have completed several coding bootcamps and online courses to hone my skills. I'm excited to continue learning and growing in the field of Programing.
        I am a 90s kid at heart and a passionate fan of iconic games and TV shows like Dragon Ball, Pokemon, and Mario.
      </ShortDescription>
      <SectionHeader>Skills</SectionHeader>
      <SkillContainer>
        <Skill>Full Stack Web Development</Skill>
        <Skill>node.js</Skill>
        <Skill>Express</Skill>
        <Skill>Python Development</Skill>
        <Skill>JavaScript</Skill>
        <Skill>React</Skill>
        <Skill>MongoDB</Skill>
        
        <Skill>TS</Skill>
        <Skill>Embedded c++</Skill>
        <Skills/>
      </SkillContainer>
    
    </SectionContainer>
  );
};

export default Hero;
