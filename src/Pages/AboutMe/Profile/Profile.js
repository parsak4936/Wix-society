import React from "react";
import Profileimage1 from "../../../Assets/Profile/Parsa.jpg";
import SmallProfileImage from "../../../Assets/Profile/small.jpg";
import "./Profile.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedin, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function Profile() {
  const waveVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  
  const letterVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  
  return (
    <ProfileContainer>
      <ProfileInfo>
        <h1>
          Hello! <br /> I'm{" "}
          <motion.span
            className="highlight-text"
            variants={waveVariants}
            initial="initial"
            animate="animate"
          >
            {"Parsa".split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.span>
          <br />
          <span className="highlight-text">Book worm and science nerd</span>
        </h1>
        <ProfileDescription>
          <p>
            Welcome! I'm Parsa, a product designer and Webflow developer. I
            intertwine my love for literature, art, and technology to craft
            unique digital experiences. I’m passionate about data science,
            storytelling, travel, and creating impactful content.
          </p>

          <SmallImageSection>
            <BackgroundShape></BackgroundShape>
            <motion.img
              src={SmallProfileImage}
              alt="Small Profile"
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
            <p>
              Based in <span className="highlight-text">Bangladesh</span>
              <br />
              I'm also a{" "}
              <span className="highlight-text">Webflow developer</span>.
            </p>
          </SmallImageSection>
        </ProfileDescription>
      </ProfileInfo>

      <ProfileImage>
        <img src={Profileimage1} alt="Profile" />
        <Experience>
          <h2>Content creator</h2>
          <p>Web Developer</p>
          <p>Data Science</p>

          <Line />
          <Social>
            <div className="social-icons">
              {[
                {
                  href: "https://www.instagram.com/parsak.exe/",
                  icon: <AiOutlineInstagram />,
                },
                {
                  href: "https://www.linkedin.com/in/parsa-kazemi-230253257/",
                  icon: <FaLinkedin />,
                },
                { href: "https://t.me/Slihouette", icon: <FaTelegramPlane /> },
                {
                  href: "https://www.youtube.com/channel/UC31aBZ8280jBRyEtk1pzzZg",
                  icon: <FaYoutube />,
                },
              ].map((social, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, rotate: 180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <a href={social.href}>{social.icon}</a>
                </motion.span>
              ))}
            </div>
          </Social>
        </Experience>
      </ProfileImage>
    </ProfileContainer>
  );
}

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  gap: 20px; /* Add gap between items */

  @media screen and (min-width: 998px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
    padding: 0 10%;
  }
`;

const ProfileImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  flex: 1; /* Add flex property */

  img {
    width: 100%; /* Make image responsive */
    max-width: 20rem; /* Set maximum width */
    height: auto; /* Maintain aspect ratio */
    border-radius: 10%;
    animation: wave1 3s infinite alternate, wave2 4s infinite alternate,
      wave3 5s infinite alternate;
  }

  @media (max-width: 640px) {
    margin-top: 2rem;
  }
`;

const Experience = styled.div`
  text-align: center;
  margin-top: 1rem;

  h2 {
    font-size: 1.5rem;
    margin: 0;
  }

  p {
    font-size: 1rem;
    margin: 0;
  }
`;

const Line = styled.div`
  width: 150px;
  height: 2px;
  background: #01be96;
  margin: 0.5rem auto;
`;

const ProfileInfo = styled.div`
  max-width: 100%;
  padding: 20px;
  margin: 20px;
  flex: 1; /* Add flex property */

  h1 {
    padding-left: 20px;
    margin: 20px;
  }

  @media screen and (min-width: 1000px) {
    max-width: 50%;
    margin-right: 0;
    margin-bottom: 0;
  }
`;

const ProfileDescription = styled.div`
  text-align: left;
  padding: 20px;

  margin: 20px;
`;

const BackgroundShape = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  z-index: -1;
`;

const SmallImageSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  position: relative;

  img {
    width: 10rem;
    height: 10rem;
    border-radius: 80%;
    margin-right: 10px;
    z-index: 1;
    animation: wave1 3s infinite alternate, wave3 5s infinite alternate;
  }

  p {
    margin: 0;
    font-size: 1rem;
  }
`;

const Social = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    span {
      width: 2.5rem;
      height: 2.5rem;
      background-color: transparent;
      border: 0px solid #01be96;
      border-radius: 30%;
      position: relative;
      transition: transform 400ms ease-in-out, background-color 0.3s, color 0.3s;
      cursor: pointer;

      &:hover {
        transform: rotate(360deg);
        background-color: #01be96;
        color: #fff;
      }

      svg {
        color: #01be96;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: color 0.3s;
      }

      &:hover svg {
        color: #fff;
      }
    }
  }
`;

