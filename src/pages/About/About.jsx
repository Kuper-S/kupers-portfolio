import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  background-color: #1c1c1c;
  color: #fff;
  padding: 60px 0;

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-title {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 60px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .intro {
    font-size: 24px;
    line-height: 1.5;
    margin-bottom: 30px;
  }

  .personality {
    font-size: 24px;
    line-height: 1.5;
    margin-bottom: 30px;
  }

  .pixel-art {
    /* Add your pixel art styles here */
  }

  .cta {
    font-size: 24px;
    margin-top: 30px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;

function About() {
  return (
    <AboutSection id="about" className="retro">
      <div className="container">
        <h2 className="section-title">Who I Am</h2>
        <div className="row">
          <div className="col-md-6">
            <p className="intro">Hey there! I'm a self-taught programmer who's been learning and coding for over 1.5 years now. I'm passionate about programming and love learning new things every day. I'm proficient in several programming languages and tools, including Python, JavaScript, React, C++, MongoDB, and MySQL.</p>
            <p className="personality">But enough about programming! Let's talk about me. I'm a funny and easygoing person who loves to take on challenges and work with people. I'm a great team player and always enjoy being part of a collaborative project. I can handle pressure and tight deadlines with ease, and I'm always eager to learn and use new skills.</p>
          </div>
          <div className="col-md-6">
            <div className="pixel-art">
               Add some retro gaming pixel art here 
            </div>
          </div>
        </div>
        <p className="cta">If you want to know more about me or my work, don't hesitate to get in touch!</p>
      </div>
    </AboutSection>
  );
}

export default About;
