import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";
import { GiWaterRecycling } from "react-icons/gi";
import { TiDeviceDesktop, TiPrinter } from "react-icons/ti";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My Best <span className="green">Skills</span>
        </h4>
        <h1>What I Am Good At :</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={GiWaterRecycling}
            title={"Content Creator"}
            disc={`i will make media content in Instagram and youtube,no i am not an influencer,just do that for FUN!`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={TiDeviceDesktop}
            title={"FrontEnd Developer "}
            disc={`i can design any application with FIGMA and develop it with ReactJS.you can see my portfolio in the next section.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={TiPrinter}
            title={"Writing"}
            disc={
              "Since highschool,i am writing short and long stories,video transcript and Novels,papers,essays and so on..."
            }
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
