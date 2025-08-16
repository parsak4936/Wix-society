import React, { useContext } from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedin, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import profileimage from "../../Assets/Profile/WixProfile2.jpg";
import { AudioContext } from "../../Context/AudioContext";
import { motion } from "framer-motion";
import italy from "../../Assets/Icons/italy.webp";
import iran from "../../Assets/Icons/iran.webp";
import infj from "../../Assets/Icons/INFJ.webp";
import gemini from "../../Assets/Icons/gemini2.webp";
import email from "../../Assets/Icons/communication.webp";
import hungary from "../../Assets/Icons/hungary.webp";
import ukraine from "../../Assets/Icons/ukraine.webp";
import turkey from "../../Assets/Icons/turkey.webp";
import circle from "../../Assets/Icons/circle.webp";
import russia from "../../Assets/Icons/russia.webp";
import english from "../../Assets/Icons/english.jpg";

import { useTranslation } from "react-i18next";

const ProfComponent = () => {
  const { canvasRef } = useContext(AudioContext);
  const { t } = useTranslation();

  return (
    <Container id="home">
      <LeftColumn
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 360 }}
        transition={{ duration: 0.7 }}
      >
        <Profile>
          <ProfileMask>
            <motion.img
              src={profileimage}
              alt={t("Profile")}
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
          </ProfileMask>
        </Profile>
      </LeftColumn>
      <MiddleColumn
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <CanvasWrapper>
          <canvas ref={canvasRef} width="320" height="400" />
        </CanvasWrapper>
        <Content>
          <Title>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    delayChildren: 0.5,
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {"Parsa Kazemi".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {t("Welcome to my Digital Haven,")}
            </motion.h2>
          </Title>
          <Skills>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SkillButton>{t("Data Scientist")}</SkillButton>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5 }}
            >
               <SkillButton>{t("Story Writer")}</SkillButton>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5 }}
            >
              <SkillButton>{t("Content Creator")}</SkillButton>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SkillButton>{t("Web Developer")}</SkillButton>
            </motion.div>
          </Skills>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Description>
              <p>
                {t("where words weave tales and data dances.")} <br />{" "}
                {t("Dive into my world of creations and adventures.")} <br />{" "}
                {t("Explore the Portfolioto find my whole lifetime activities.")}
              </p>
            </Description>
            <Link to="/aboutme">
              <LearnMoreButton>{t("Learn More about me")}</LearnMoreButton>
            </Link>
          </motion.div>
        </Content>
      </MiddleColumn>
      <RightColumn>
        <h2>{t("Personal Info")}</h2>
        <Line />

        <InfoText>
          {[
            {
              text: t("Jun , 12, 1999 (Gemini)"),
              icon: gemini,
            },
            {
              text: t("Wixloop.contact@gmail.com"),
              icon: email,
            },
            {
              text: t("Born in Ghazvin - Iran"),
              icon: iran,
            },
            {
              text: t("Living in ME , Italy"),
              icon: italy,
            },
            {
              text: t("INFJ - A"),
              icon: infj,
            },
          ].map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              {typeof info === "string" ? (
                <p>{info}</p>
              ) : (
                <>
                  <img
                    src={info.icon}
                    alt={t("Icon")}
                    style={{ width: "30px", marginRight: "8px" }}
                  />
                  <p style={{ margin: 0 }}>{info.text}</p>
                </>
              )}
            </motion.div>
          ))}
          <h2>{t("Languages I can Speak")}</h2>
          <Line />
          <motion.div
  className="favorite-countries"
  style={{ 
    display: "flex", 
    justifyContent: "center",   // ✅ center horizontally
    alignItems: "center",       // ✅ center vertically
    gap: "10px", 
    marginBottom: "20px" 
  }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.5 }}
>
  {[iran, english, italy].map((flag, index) => (
    <img
      key={index}
      src={flag}
      alt={t(`Flag ${index}`)}
      style={{ width: "30px" }}
    />
  ))}
</motion.div>
         <Social>
  <div className="social-icons">
    {[ 
      {
        href: "https://www.instagram.com/parsak.exe/",
        icon: <AiOutlineInstagram />,
        label: "Instagram Profile"
      },
      {
        href: "https://www.linkedin.com/in/parsa-kazemi-230253257/",
        icon: <FaLinkedin />,
        label: "LinkedIn Profile"
      },
      {
        href: "https://t.me/Parsakazemi",
        icon: <FaTelegramPlane />,
        label: "Telegram Channel"
      },
      {
        href: "https://www.youtube.com/@betterwix",
        icon: <FaYoutube />,
        label: "YouTube Channel"
      }
    ].map((social, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, rotate: 180 }}
        animate={{ opacity: 1, rotate: 0 }}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <a href={social.href} aria-label={social.label}>
          {social.icon}
        </a>
      </motion.span>
    ))}
  </div>
</Social>

        </InfoText>
      </RightColumn>
    </Container>
  );
};

export default ProfComponent;

const CanvasWrapper = styled.div`
  position: absolute; // Change to absolute to cover the center part
  top: 0; // Center vertically
  left: 50%; // Center horizontally
  transform: translate(-50%, -50%); // Adjust for centering
  width: 14rem; // Increase size to cover more area
  height: 10rem; // Increase size to cover more area
  overflow: visible;

  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0; // Ensure canvas is behind the content
  }

  @media (max-width: 640px) {
    width: 24rem;
    height: 24rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap; /* ✅ allow wrapping instead of overflow */
  padding-top: 1rem;
  width: 100%;     /* ✅ full width, no overflow */
  max-width: 1280px;
  margin: auto;
  gap: 2rem;
  align-items: flex-start;

  @media (max-width: 1024px) {
    width: 95%;
    flex-direction: column; /* ✅ stack for tablets */
    align-items: center;
  }

  @media (max-width: 640px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  padding-top: 50px;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    padding-top: 20px;
  }
`;

const MiddleColumn = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  padding-top: 0.5rem;

  @media (max-width: 1024px) {
    width: 100%;   /* ✅ fit smaller devices */
    padding-top: 0;
  }
`;
const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;

  @media (max-width: 1024px) {
    padding-top: 20px;
   }
`;

const InfoText = styled.div`
  text-align: center;

  p {
    margin: 0.5rem 0;
    font-size: 1.1rem;
    color: white;
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: "Roboto", sans-serif;
    line-height: 1.6;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  }

  h2 {
    font-size: 1.5rem;
   font-family: "Roboto", sans-serif;
    color: white;
    margin-bottom: 0.5rem;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 640px) {
    
    h2 { font-size: 1.2rem; }
  }
`;

const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileMask = styled.div`
  width: 25rem;
  height:30rem;
  margin-bottom: 1rem;
  display: flex;
  border-radius: 10% 10% 90% 90%; /* Change this to achieve the desired shape */

  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    width: 90%;
    height: 90%;
    border-radius: 10% 10% 90% 90%; /* Change this to achieve the desired shape */

    object-fit: cover;
    transition: transform 400ms ease-in-out;
    animation: wave1 3s infinite alternate, wave2 4s infinite alternate,
      wave3 5s infinite alternate;
  }

  &:hover img {
    transform: scale(1.1);
  }

  @media (max-width: 640px) {
    width: 12rem;
    height: 16rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  text-align: center;

  @media (max-width: 640px) {
    text-align: center;
  }
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: 1rem;

  h1 {
    font-size: 2.5rem;
    font-family: 'Playfair Display', serif;
    letter-spacing: 2px;
    color: white;
  }
  h2 {
     
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: "Roboto", sans-serif;
    color: white;
  }
`;

const Description = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
    font-family: "Roboto", sans-serif;
  p {
     font-size: 1.1rem;
    margin: 0.7rem 0;
    color: white;
    max-width: 90%;
  }
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const SkillButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 150px;   /* Ensures consistent width */
  height: 45px;       /* Ensures consistent height */
  padding: 0.5rem 1rem;
  border: 2px solid #018367;
  border-radius: 8px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
 
  color: #018367;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #018367;
    color: #fff;
  }

  @media (max-width: 640px) {
    min-width: 120px;  /* Smaller on mobile */
    height: 40px;
    font-size: 0.9rem;
  }
`;

const LearnMoreButton = styled.button`
  padding: 0.7rem 2rem;
  cursor: pointer;
  margin-top: 20px;
  background-color: #018367;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-weight: 500;
      font-family: "Roboto", sans-serif;

  filter: drop-shadow(0px 10px 10px #01be9551);
  transition: background-color 0.3s, filter 0.3s;
  animation: wave1 3s infinite alternate;
  &:hover {
    background-color: #019a78;
    filter: drop-shadow(0px 10px 10px #019a7851);
  }
`;

const Social = styled.div`
  margin-top: 1.5rem;
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
      border: 0px solid #018367;
      border-radius: 30%;
      position: relative;
      cursor: pointer;

      &:hover {
        background-color: #018367;
        color: #fff;
      }

      svg {
        color: #018367;
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
const Line = styled.div`
  width: 100%;
  height: 2px;
  background: #018367;
  margin: 0.5rem auto;
`;
