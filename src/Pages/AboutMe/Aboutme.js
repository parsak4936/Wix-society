import React from "react";
import styled from "styled-components";
import { useRef } from "react";

import Profile from "./Profile/Profile";
import Header from "../../components/Banner/Header";
import "./Aboutme.css";
// import Social from "./ContactMe/Social";
import AboutMeText from "./AboutmeText.js/AboutMeText";
import Education from "./Education/Education";
import Clients from "../../components/Clients/Clients";
// import Archive from "../../components/Archive/Archive";
import Skills from "./Skills/Skills";
import Hobbies from "./Hobbies/Hobbies";
import headervideo from "../../Assets/backgrounds/header2.mp4";
import Servicesvideo from "../../Assets/backgrounds/services.mp4";

function Aboutme() {
  function handlePlay() {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }
  const videoRef = useRef(null);

  return (
    <div className="aboutme-container">
      <Banner className="section-a1">
        <div className="overlay1"></div>
        <video
          ref={videoRef}
          id="background-video"
          loop
          autoPlay
          muted
          onPlay={handlePlay}
        >
          <source src={headervideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Header />
        <Profile />
      </Banner>

      <div className="section-a2">
        <div className="video-awrapper">
          <div className="aoverlay"></div>

          <video id="background-video-services" loop autoPlay muted>
            <source src={Servicesvideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <AboutMeText />
        </div>
      </div>

      {/* <Social />   */}
      <Education />
      {/* <Archive /> */}
      <Clients />
      <Skills />
      <Hobbies />
    </div>
  );
}

export default Aboutme;

const Banner = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
