import React, { useContext } from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedin, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import profileimage from "../../Assets/Profile/WixProfile2.jpeg";
import { AudioContext } from "../../Context/AudioContext";
import { motion } from "framer-motion";
import italy from "../../Assets/Icons/italy.png";
import iran from "../../Assets/Icons/iran.png";
import infj from "../../Assets/Icons/INFJ.png";
import gemini from "../../Assets/Icons/gemini2.png";
import email from "../../Assets/Icons/communication.png";
import hungary from "../../Assets/Icons/hungary.png";
import ukraine from "../../Assets/Icons/ukraine.png";
import turkey from "../../Assets/Icons/turkey.png";
import circle from "../../Assets/Icons/circle.png";
import russia from "../../Assets/Icons/russia.png";
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
                {t("Explore the Archive to find my whole lifetime activities.")}
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
          <h2>{t("Favorite countries")}</h2>
          <Line />
          <motion.div
            className="favorite-countries"
            style={{ display: "flex", gap: "10px", marginBottom: "20px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {[ukraine, iran, italy, russia, hungary, circle, turkey].map(
              (flag, index) => (
                <img
                  key={index}
                  src={flag}
                  alt={t(`Flag ${index}`)}
                  style={{ width: "30px" }}
                />
              )
            )}
          </motion.div>
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
  padding-top: 1rem;
  width: 80%;
  position: relative;
  min-height: 100%;
  max-width: 1280px;
  margin: auto;
  z-index: 1;
  gap: 2rem;
  align-items: flex-start;

  @media (max-width: 840px) {
    width: 90%;
    flex-direction: column;
    align-items: center;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  padding-top: 50px;

  @media (max-width: 840px) {
    padding: 0;
  }
  flex-direction: column;
  align-items: center;
`;

const MiddleColumn = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; // Add relative positioning to contain the absolute CanvasWrapper
  z-index: 1; // Ensure content is above the CanvasWrapper
  padding-top: 0.2rem; // Adjust padding to better center content vertically
  @media (max-width: 840px) {
    padding-top: 0;
  }
`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  @media (max-width: 840px) {
    padding: 0;
  }
`;

const InfoText = styled.div`
  text-align: center;
  p {
    margin: 0.5rem 0;
    font-size: 1.2rem;
    color: white;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .favorite-countries {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
    margin-top: 20px;

    img {
      width: 30px;
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;

const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileMask = styled.div`
  width: 15rem;
  height: 20rem;
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
    font-size: 1rem;
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: " Quicksand", serif;
    color: white;
  }
`;

const Description = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;

  p {
    font-weight: 300;
    font-size: 1.1rem;
    margin: 0.5rem 0;
    color: white;
    max-width: 80%;
  }
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const SkillButton = styled.span`
  color: #01be96;
  border: 2px solid #01be96;
  padding: 0.4rem 0.7rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #01be96;
    color: #fff;
  }

  @media (max-width: 640px) {
    font-size: 0.8rem;
    padding: 0.3rem 0.5rem;
  }
`;

const LearnMoreButton = styled.button`
  padding: 0.7rem 2rem;
  cursor: pointer;
  margin-top: 20px;
  background-color: #01be96;
  border: none;
  color: #fff;
  font-weight: 500;
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
      border: 0px solid #01be96;
      border-radius: 30%;
      position: relative;
      cursor: pointer;

      &:hover {
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
const Line = styled.div`
  width: 100%;
  height: 2px;
  background: #01be96;
  margin: 0.5rem auto;
`;
