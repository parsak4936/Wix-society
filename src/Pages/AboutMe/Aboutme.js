import React from "react";
import Profile from "./Profile/Profile";
import Header from "../../components/Banner/Header";
import "./Aboutme.css";
import Social from "./ContactMe/Social";
import AboutMeText from "./AboutmeText.js/AboutMeText";
import Education from "./Education/Education";
import Clients from "../../components/Clients/Clients";
import Archive from "../../components/Archive/Archive";
import Skills from "./Skills/Skills";
import Hobbies from "./Hobbies/Hobbies";
const Aboutme = () => {
  return (
    <div className="aboutme-container">
      <Header />
      <div>
        <Profile />
        <AboutMeText />
        <div className="cyberpunk-elements-left"></div>
        <div className="cyberpunk-elements"></div>
        <div className="cyberpunk-elements-btn"></div>

        <Social />
        <Education />
         
        <Archive />
        <Clients />
        <Skills />
        <Hobbies />
      </div>
    </div>
  );
};

export default Aboutme;
