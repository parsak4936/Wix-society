import React, { useRef } from "react";
import Profile from "./Profile/Profile";
// import Profile2 from "./Profile/Profile2";

import Header from "../../components/Banner/Header";
import Education from "./Education/Education";
import Clients from "../../components/Clients/Clients";
import Skills from "./Skills/SkillsAndHobbies";
import headervideo from "../../Assets/backgrounds/Header4.mp4";
 
import "./Aboutme.css"; // Import the CSS file
import ProgressIndicator from "../../components/ProgressIndicator/ProgressIndicator";

const Aboutme = () => {
  const videoRef = useRef(null);

  function handlePlay() {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }

  const sections = [
    { id: "section-a1", icon: "home" },
    { id: "education-section",  icon: "education" },
    { id: "clients-section",  icon: "clients" },
    { id: "skills-section", icon: "skills" },
  ];

  return (
    <div className="aboutme-container">
      <ProgressIndicator sections={sections} />
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
            Your browser does not support the video tag.
          </video>
          <div className="overlay23"></div>
          <Header />
 
          <Profile />

          {/* <Profile2 /> */}
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
 