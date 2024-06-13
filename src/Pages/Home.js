import React from "react";
import styled from "styled-components";
import Header from "../components/Banner/Header";
import ProfComponent from "../components/Banner/ProfComponent";
import headervideo from "../Assets/backgrounds/Header5.mp4";
import "./Home.css";
 
const Home = () => {
  return (
    <Container>
       <Section id="section-1" className="section-1">
        <VideoWrapper className="video-wrapper">
          <Overlay className="overlay"></Overlay>
          <video
            id="background-video"
            loop
            autoPlay
            muted
            onEnded={(e) => e.target.play()}
          >
            <source src={headervideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <HeaderWrapper>
            <Header />
            <ProfComponent />
          </HeaderWrapper>
        </VideoWrapper>
      </Section>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-bottom: 0%; /* Default padding for larger screens */

  @media (max-width: 450px) {
    padding-bottom: 1%; /* Increased padding for phone screens */
  }
`;

const Section = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const VideoWrapper = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 0;
  flex: 1;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

const HeaderWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (max-width: 850px) {
    padding: 10px;
  }

  @media (max-width: 450px) {
    padding: 5px;
    margin-bottom: 30%; /* Ensure sufficient space at the bottom */
  }
`;
