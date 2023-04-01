import React from "react";
import {
  FaPython,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaMusic,
  FaSketch,
  FaGamepad,
  FaPalette,
  FaCompass,
  FaFirstAid,
  FaTrophy,
  FaBasketballBall,
  FaDumbbell,
  FaUsers,
  FaTree,
  FaLayerGroup,
  FaBrain,
  FaUser,
  FaPen,
  FaTwitch,
  FaVideo,
  FaBook,
  FaPencilAlt,
} from "react-icons/fa";
import { GiPawHeart,GiFamilyTree } from "react-icons/gi";
import { BiPalette } from "react-icons/bi";


import { DiJqueryLogo } from "react-icons/di";
import "./Hobbies.css";

export default function Hobbies() {
  return (
    <div className="skills-container">
      <h2 className="section-title">Hobbies and Interests</h2>
      <div className="skill-icons">
        <div className="skill">
          <FaMusic className="icon" />
          <h3>Music</h3>
        </div>
        {/* ............................................... */}
        <div className="skill">
          <FaPencilAlt className="icon" />
          <h3>Writing </h3>
        </div>
        {/* ............................................... */}
        <div className="skill">
          <FaGamepad className="icon" />
          <h3> VideoGame</h3>
        </div>
        {/* ............................................... */}
        <div className="skill">
          <BiPalette className="icon" />
          <h3> Designing</h3>
        </div>{" "}
        {/* ............................................... */}
        <div className="skill">
          <FaBook className="icon" />
          <h3> Reading Book</h3>
        </div>{" "}
        {/* ............................................... */}
        <div className="skill">
          <FaVideo className="icon" />
          <h3> Editing Video</h3>
        </div>{" "}
        {/* ............................................... */}
        <div className="skill">
          <FaTwitch className="icon" />
          <h3> streaming</h3>
        </div>{" "}
        {/* ............................................... */}
        <div className="skill">
          <FaPen className="icon" />
          <h3> content creation</h3>
        </div>{" "}
        {/* ............................................... */}
        <div className="skill">
          <FaUser className="icon" />
          <h3> INFJ</h3>
        </div>{" "}
        {/* ............................................... */}
        <div className="skill">
          <FaBrain className="icon" />
          <h3> logic</h3>
        </div>{" "}
        {/* ............................................... */}
        <div className="skill">
          <FaLayerGroup className="icon" />
          <h3> multi aspect</h3>
        </div>{" "}
        {/* ............................................... */}
        <div className="skill">
          <FaPalette className="icon" />
          <h3> Art</h3>
        </div>{" "}
        {/* ............................................... */}
        <div className="skill">
          <FaCompass className="icon" />
          <h3> adventure</h3>
        </div>
        {/* ............................................... */}
        <div className="skill">
          <FaTree className="icon" />
          <h3> nature lover</h3>
        </div>
        {/* ............................................... */}
        <div className="skill">
          <GiPawHeart className="icon" />
          <h3> animal lover</h3>
        </div>
        {/* ............................................... */}
        <div className="skill">
          <FaUsers className="icon" />
          <h3> psychology</h3>
        </div>
        {/* ............................................... */}
        <div className="skill">
          <FaDumbbell className="icon" />
          <h3> workout</h3>
        </div>
        {/* ............................................... */}
        <div className="skill">
          <FaBasketballBall className="icon" />
          <h3> basketball</h3>
        </div>
        {/* ............................................... */}
        <div className="skill">
          <FaTrophy className="icon" />
          <h3> challenger</h3>
        </div>
        {/* ............................................... */}
        <div className="skill">
          <GiFamilyTree className="icon" />
          <h3> family lover</h3>
        </div>
        {/* ............................................... */}
        <div className="skill">
          <FaFirstAid className="icon" />
          <h3> survivalist</h3>
        </div>
      </div>
    </div>
  );
}

// challenger: FaTrophy
// workout: FaDumbbell
// basketball: FaBasketballBall
// family lover: FaFamily
// survivalist: FaFirstAid
// nature lover: FaTree
// animal lover: GiPawHeart
