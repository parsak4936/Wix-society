import React from "react";
import styled from "styled-components";

const AboutMeText = () => {
  return (
    <Container>
      <Title>About Me</Title>
      <Content>
        <p>
          I am a Master's student studying in Italy, specializing in computer
          engineering. As a dedicated member of the Faviran team, my journey as
          a front-end developer and graphic designer has been enriched with
          valuable experiences. Proficient in React JS, Figma, and React Native,
          I bring over two years of expertise to the field, always ready to
          embrace challenging projects and committed to continuous learning and
          growth.
        </p>
        <p>
          My unique perspective, cultivated through a deep understanding of
          various subjects, empowers me to excel in crafting user interfaces,
          writing compelling narratives, and navigating the complexities that
          life presents.
        </p>
        <p>
          Committed to delivering high-quality results, I channel my hard work
          and determination to constantly enhance my skills and knowledge. Even
          during my leisure, I find solace in playing Dark Souls, drawing
          inspiration from the game's lessons in perseverance and overcoming
          obstacles.
        </p>
      </Content>
    </Container>
  );
};

export default AboutMeText;
const Container = styled.div`
  line-height: 1.6;
  margin: 1rem;
 
  text-align: justify;
  padding: 1rem; /* Adjusted padding for smaller screens */
  border-radius: 10px;
  box-shadow: 0px 10px 10px rgba(1, 190, 150, 0.2);

  @media (max-width: 768px) {
    line-height: 1.8;
    padding: 0rem;
    

  }
`;

const Title = styled.h3`
  display: flex;
  flex-direction: column;
  background-color: rgba(1, 190, 150, 0.2);
  align-items: center;
  justify-content: center;
  line-height: 1.6;
  margin: 1rem;
  text-align: justify;
  padding: 1rem; /* Adjusted padding for smaller screens */
  color: #01be96;
  font-weight: 500;
  filter: drop-shadow(0px 10px 10px #01be96);

  :hover {
    filter: drop-shadow(0px 10px 10px #01be9570);
  }

  @media (max-width: 768px) {
    line-height: 1.8;
    padding: 0rem;
  }
`;
const Content = styled.div`
  margin-top: 1.5rem;
  background-color: rgba(0, 0, 0, 0.2); /* Greenish tint with low opacity */

  p {
    margin-bottom: 1rem;
    color: #fff;
  }
`;
