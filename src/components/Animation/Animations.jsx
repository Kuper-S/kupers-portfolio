import React, { useState } from 'react';
import styled from 'styled-components';

// Import your animation images
import streetFighterGif from '../../assets/annimation/ryu-ken.gif';
import superMarioGif from '../../assets/annimation/super-mario-mario.gif';
const AnimationContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 50px;
  width: 400px;
  height: 400px;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  z-index: 100;
`;

const Animations = () => {

    return (
      <>
        <AnimationContainer backgroundImage={streetFighterGif}></AnimationContainer>
      </>
    );
  };

export default Animations;
