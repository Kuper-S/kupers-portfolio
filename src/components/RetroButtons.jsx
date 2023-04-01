import React, {useState} from 'react';
import styled from 'styled-components';
import Animations from './Animation/Animations';

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 40px;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const Button = styled.button`
  background-color: ${props => props.bgColor};
  color: #fff;
  font-family: 'PressStart2P', cursive;
  font-size: 14px;
  text-transform: uppercase;
  padding: 12px 20px;
  margin: 10px 0;
  border: none;
  bottom: 10px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 3px 3px #000;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.hoverColor};
  }
`;

const RetroButtons = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFightClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 2000);
  };

  return (
    <>
      {isAnimating && <Animations />}
      {!isAnimating && (
        <ButtonContainer>
          <Button
            bgColor="#ff0000"
            hoverColor="#bf0000"
            onClick={handleFightClick}
          >
            Fight
          </Button>
          <Button bgColor="#00ff00" hoverColor="#00bf00">
            Restart Level
          </Button>
          <Button bgColor="#0000ff" hoverColor="#0000bf">
            Contact
          </Button>
        </ButtonContainer>
      )}
    </>
  );
};

export default RetroButtons;
