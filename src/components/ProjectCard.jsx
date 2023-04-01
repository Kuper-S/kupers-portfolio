import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  cursor: pointer;
  width: 300px;
  max-height: 450px;
  border-radius: 8px;
  border: 4px solid #b3346c;
  background-color: #000;
  position: relative;
  overflow: hidden;
  transition: height 0.3s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    border: 2px solid #ffc4dd;
    border-radius: 8px;
  }

  &::after {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    width: calc(100% + 20px);
    height: calc(100% + 20px);
    z-index: -2;
    border: 2px solid #ffc4dd;
    border-radius: 8px;
  }

  &.open {
    height: 1000px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2px;
  color: #fff;
  text-align: center;
`;

const CardTitle = styled.h2`
  font-family: 'VT323', monospace ;
  font-size: 24px;
  margin: 10px 0;
  text-shadow: 2px 2px #000; /* Add a shadow to the title */
`;

const CardDescription = styled.p`
  font-size: 16px;
  margin-top: 4px;
  padding : 20px;
  margin-bottom: 20px;
   /* Add some spacing between title and description */
`;

const CardLink = styled.a`
  font-size: 16px;
  margin-top: 20px;

  color: #f0c040;
  text-decoration: none;
  text-shadow: 1px 1px #000; /* Add a shadow to the link */
  transition: color 0.2s;

  &:hover {
    color: #fff;
  }
`;

const ProjectCard = ({ title, description, image, link }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.height = 'auto';
    } else {
      contentRef.current.style.height = '0';
    }
  }, [isOpen]);

  

  return (
    <CardContainer
      
      
    >
      <CardImage src={image} alt={title} />
      <CardContent ref={contentRef}>
      {link && <CardLink href={link}>View Project</CardLink>}
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        
        

      </CardContent>
    </CardContainer>
  );
};

export default ProjectCard;
