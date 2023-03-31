import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  width: 300px;
  height: 350px;
  background-color: #000;
  border-radius: 10px;
  box-shadow: 0 0 10px #000;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  color: #fff;
  text-align: center;
`;

const CardTitle = styled.h2`
  font-family: 'PressStart2P', cursive;
  font-size: 24px;
  margin: 10px 0;
`;

const CardDescription = styled.p`
  font-size: 16px;
`;

const ProjectCard = ({ title, description, image }) => {
  return (
    <CardContainer>
      <CardImage src={image} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </CardContainer>
  );
};

export default ProjectCard;
