import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {  FaGraduationCap, FaEnvelope, FaUserFriends, FaUserTie } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaCodeFork } from "react-icons/fa6";
const iconMap = {
  home: <FaUserTie  />,
  education: <FaGraduationCap />,
  clients: <FaUserFriends   />,
  skills: <FaCodeFork  />,
   Contact: <FaEnvelope />,
  // Add more icons as needed
};

const ProgressIndicator = ({ sections, iconSize = '1.2rem', position = 'left' }) => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5 // 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sections]);

  const handleClick = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <IndicatorContainer
      position={position}
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {sections.map((section, index) => (
        <Dot
          key={index}
          onClick={() => handleClick(section.id)}
          isActive={activeSection === section.id}
        >
          <IconContainer style={{ fontSize: iconSize }}>
            {iconMap[section.icon]}
          </IconContainer>
        </Dot>
      ))}
    </IndicatorContainer>
  );
};

export default ProgressIndicator;

const IndicatorContainer = styled(motion.div)`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7); /* Low opacity black background */
  padding: 0.5rem;
  border-top-right-radius: 20px; /* Rounded corner top right */
  border-bottom-right-radius: 20px; /* Rounded corner bottom right */
  ${(props) => (props.position === 'left' ? 'left: 0;' : 'right: 20px;')}
  top: 30%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;

  @media (max-width: 768px) {
    ${(props) => (props.position === 'left' ? 'left: 0;' : 'right: 10px;')}
  }
`;

const Dot = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${(props) => (props.isActive ? '#f0ab0c' : '#01be96')};
  border-radius: 50%;
  margin: 10px 0;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.2rem;
  box-shadow: ${(props) => (props.isActive ? '0 0 10px 5px rgba(1, 190, 150, 0.5)' : 'none')};

  &:hover {
    background-color: #028f75;
  }

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 1rem;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const containerVariants = {
  initial: { x: '-100vw' },
  animate: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 10,
    },
  },
};
