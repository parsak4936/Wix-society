import React from "react";
import styled from "styled-components";

const AboutMeText = () => {
  return (
    <Container>
      <Title>About Me</Title>
      <Content>
        <p>
          Hi there! I'm Parsa, a passionate Master's student based in Italy,
          with a focus on computer engineering. As a member of the Faviran team,
          I've delved deep into the realms of front-end development and graphic
          design, honing my skills in React JS, Figma, and React Native over the
          past two years.
        </p>
        <p>
          Beyond the code, I find joy in the art of storytelling and crafting
          seamless user experiences. My journey is fueled by a relentless
          curiosity and a desire to unravel the complexities of the digital
          world, one line of code at a time.
        </p>
        <p>
          When I'm not coding, you can find me immersed in the world of Dark
          Souls, drawing inspiration from its lessons in perseverance and
          overcoming challenges. Whether it's through pixels or pages, I strive
          to create meaningful connections and leave a lasting impact on the
          digital landscape.
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
