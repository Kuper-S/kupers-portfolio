import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../../components/ProjectCard';

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #1c1c1c;
  min-height: calc(100vh - 120px);
`;

const CoolParagraph = styled.p`
  color: #fff;
  font-size: 24px;
  margin-top: 50px;
  text-align: center;
  text-shadow: 1px 1px #000;
`;


const projects = [
  {
    title: 'plan It',
    description: "Welcome to my social event planning app! This platform is designed to make it easier for you to plan, track, invite, and manage social meetings and events.",
    image: 'https://via.placeholder.com/300x250.png?text=Project+1',
    link: 'https://github.com/Kuper-S/plan-it-Full-Project'
  },
  {
    title: 'STM32 Project',
    description: 'STM32 Project to control dc motor speed and acceleration and direction with c++ and STM32CubeIDE',
    image: 'https://via.placeholder.com/300x250.png?text=Project+2',
    link: 'https://github.com/Kuper-S/STM32Dicovery_dc_motor_control'
  },
  {
    title: 'Perfumery',
    description: 'This App is a social media platform for perfumery lovers. It allows users to share their perfumes and get feedback from other users.',
    image: 'https://via.placeholder.com/300x250.png?text=Project+3',
    link: 'https://github.com/Kuper-S/STM32Dicovery_dc_motor_control'
    
  },
];

const Project = () => {
  return (
    <>
      <h1>My Projects</h1>
      <ProjectsContainer>
        {projects.map((project, index) => (
          <ProjectCard key={index} title={project.title} description={project.description} image={project.image} link={project.link} />
        ))}
        <CoolParagraph>Check out more of my cool ideas and projects on my <a href="https://github.com/Kuper-S">GitHub</a> account!</CoolParagraph>

      </ProjectsContainer>
    </>
  );
};

export default Project;
