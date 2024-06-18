import React, { useRef } from "react";
import Profile from "./Profile/Profile";
// import Profile2 from "./Profile/Profile2";
import Education from "./Education/Education";
import Clients from "../../components/Clients/Clients";
import Skills from "./Skills/SkillsAndHobbies";
import headervideo from "../../Assets/backgrounds/Header4.mp4";
import "./Aboutme.css"; // Import the CSS file
import ProgressIndicator from "../../components/ProgressIndicator/ProgressIndicator";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Aboutme = () => {
  const { t } = useTranslation();
  const videoRef = useRef(null);

  function handlePlay() {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }

  const sections = [
    { id: "section-1", icon: "home" },
    { id: "education-section", icon: "education" },
    { id: "clients-section", icon: "clients" },
    { id: "skills-section", icon: "skills" },
  ];

  return (
    <div className="aboutme-container">
      <ProgressIndicator sections={sections} />

      <Section id="section-1" className="section-1">
        <VideoWrapper className="video-wrapper">
          <div className="overlay23"></div>
          <video
            id="background-video"
            loop
            autoPlay
            muted
            onEnded={(e) => e.target.play()}
          >
            <source src={headervideo} type="video/mp4" />
            {t("Your browser does not support the video tag.")}
          </video>
          <HeaderWrapper>
            <Profile />
          </HeaderWrapper>
        </VideoWrapper>
      </Section>

      <div id="section-a1" className="section-a1">
        <div className="video-wrapper">
          <video
            ref={videoRef}
            id="background-video"
            className="background-video"
            loop
            autoPlay
            muted
            onEnded={(e) => e.target.play()}
            onPlay={handlePlay}
          >
            <source src={headervideo} type="video/mp4" />
            {t("Your browser does not support the video tag.")}
          </video>
        </div>
      </div>
      <div id="education-section">
        <Education />
      </div>
      <div id="clients-section">
        <Clients />
      </div>
      <div id="skills-section">
        <Skills />
      </div>
    </div>
  );
};

export default Aboutme;

const HeaderWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 90px;

  @media (max-width: 850px) {
    padding: 10px;
  }

  @media (max-width: 450px) {
    padding: 5px;
    margin-bottom: 30%; /* Ensure sufficient space at the bottom */
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
