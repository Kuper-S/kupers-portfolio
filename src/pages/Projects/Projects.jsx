import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../../components/ProjectCard';

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const projects = [
  {
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae nunc vel nisl varius suscipit. Donec euismod enim eget velit scelerisque, at iaculis quam volutpat.',
    image: 'https://via.placeholder.com/300x250.png?text=Project+1'
  },
  {
    title: 'Project 2',
    description: 'Phasellus tempor, lorem et faucibus fringilla, velit velit convallis tellus, vel maximus mi tortor eget mi. Donec a arcu vel elit tincidunt ullamcorper.',
    image: 'https://via.placeholder.com/300x250.png?text=Project+2'
  },
  {
    title: 'Project 3',
    description: 'Sed at aliquam ipsum. Etiam vitae erat et elit bibendum sollicitudin. Proin et malesuada metus. Maecenas accumsan libero eget pharetra ornare.',
    image: 'https://via.placeholder.com/300x250.png?text=Project+3'
  },
];

const Project = () => {
  return (
    <>
      <h1>My Projects</h1>
      <ProjectsContainer>
        {projects.map((project, index) => (
          <ProjectCard key={index} title={project.title} description={project.description} image={project.image} />
        ))}
      </ProjectsContainer>
      <button>HOME</button>
    </>
  );
};

export default Project;
