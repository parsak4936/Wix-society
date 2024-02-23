import React from "react";
import {
  FaPython,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaTasks,
  FaLaptopCode,
  FaCode,
  FaRobot,
  FaSmile,
  FaTrophy,
  FaChartLine,
  FaUsers,
  FaFilePowerpoint,
  FaFileExcel,
  FaFileWord,
  FaSketch,
  FaGithub,
} from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import "./Skills.css";
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
} from "react-icons/si";

export default function Skills() {
  return (
    <div className="skills-container">
      <h2 className="section-title">Skills</h2>
      <div className="skill-icons">
        <div className="skill">
          <FaPython className="icon" />
          <h3>Python</h3>
        </div>
        <div className="skill">
          <FaFigma className="icon" />
          <h3>Figma</h3>
        </div>
        <div className="skill">
          <FaHtml5 className="icon" />
          <h3>HTML</h3>
        </div>
        <div className="skill">
          <FaCss3Alt className="icon" />
          <h3>CSS</h3>
        </div>
        <div className="skill">
          <FaJsSquare className="icon" />
          <h3>JavaScript</h3>
        </div>
        <div className="skill">
          <DiJqueryLogo className="icon" />
          <h3>jQuery</h3>
        </div>

        {/* ............................................... */}
        <div className="skill">
          <FaReact className="icon" />
          <h3>ReactJS</h3>
        </div>
        {/* ............................................... */}
        <div className="skill">
          <FaGithub className="icon" />
          <h3>GitHub</h3>
        </div>
        {/* ............................................... */}
        <div className="skill">
          <FaSketch className="icon" />
          <h3>Graphic Design</h3>
        </div>
        {/* ............................................... */}
        <div className="skill">
          <SiAdobephotoshop className="icon" />
          <h3>Photoshop</h3>
        </div>
        {/* ............................................... */}
        <div className="skill">
          <SiAdobeillustrator className="icon" />
          <h3>Illustrator</h3>
        </div>
        {/* ............................................... */}
        <div className="skill">
          <SiAdobeaftereffects className="icon" />
          <h3>After Effect</h3>
        </div>
        {/* ............................................... */}
        <div className="skill">
          <SiAdobepremierepro className="icon" />
          <h3>Primiere pro</h3>
        </div>
        {/* ............................................... */}
        <div className="skill">
          <FaFileWord className="icon" />
          <h3>Word</h3>
        </div>
        {/* ............................................... */}
        <div className="skill">
          <FaFileExcel className="icon" />
          <h3>Excel</h3>
        </div>
        {/* ............................................... */}
        <div className="skill">
          <FaFilePowerpoint className="icon" />
          <h3>Power Point</h3>
        </div>
        {/* ............................................... */}
        <div className="skill">
          <FaUsers className="icon" />
          <h3> Team Work</h3>
        </div>
        {/* ............................................... */}
        <div className="skill">
          <FaChartLine className="icon" />
          <h3> Networking</h3>
        </div>
        {/* ............................................... */}
        <div className="skill">
          <FaTrophy className="icon" />
          <h3> Challenger</h3>
        </div>
        {/* ............................................... */}
        <div className="skill">
          <FaSmile className="icon" />
          <h3> Friendly</h3>
        </div>
        {/* ............................................... */}
        <div className="skill">
          <FaRobot className="icon" />
          <h3> Open AI</h3>
        </div>
        {/* ............................................... */}
        <div className="skill">
          <FaCode className="icon" />
          <h3> web Development</h3>
        </div>
        {/* ............................................... */}
        <div className="skill">
          <FaLaptopCode className="icon" />
          <h3> Software Development</h3>
        </div>
        {/* ............................................... */}
        <div className="skill">
          <FaTasks className="icon" />
          <h3> Management </h3>
        </div>
      </div>
    </div>
  );
}
