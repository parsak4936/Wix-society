import React from "react";
import Profileimage1 from "../../../Assets/Profile/Parsa.jpg";
import SmallProfileImage from "../../../Assets/Profile/small.jpg";
import "./Profile.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedin, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Profile() {
  const { t, i18n } = useTranslation();

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
      <ProfileInfo lang={i18n.language}>
        <h1>
          {t("Hello!")} <br /> {t("I'm")}{" "}
          <motion.span
            className="highlight-text"
            variants={waveVariants}
            initial="initial"
            animate="animate"
          >
            {t("Parsa")
              .split("")
              .map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
          </motion.span>
          <br />
          <span className="highlight-text">
            {t("Book worm and science nerd")}
          </span>
        </h1>
        <ProfileDescription lang={i18n.language}>
          <p>
            {t(
              "With a specialized focus in computer engineering, I have dedicated the past two years to mastering React JS/ Native. I blend my passions for literature, art, and technology to create distinctive digital experiences. My journey is driven by an insatiable curiosity and a commitment to exploring and demystifying the complexities of the digital world.."
            )}
          </p>

          <SmallImageSection>
            <BackgroundShape></BackgroundShape>
            <motion.img
              src={SmallProfileImage}
              alt={t("Small Profile")}
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
            <SmallProfileText lang={i18n.language}>
              {t("based in ,")}{" "}
              <span className="highlight-text">{t("Italy")}</span>
              <br />
              {t("with a focus onfront-end development and graphic design")}{" "}
              <span className="highlight-text">{t("And obsessed with Data Analysis ")}</span>.
            </SmallProfileText>
          </SmallImageSection>
        </ProfileDescription>
      </ProfileInfo>

      <ProfileImage>
        <img src={Profileimage1} alt={t("Profile")} />
        <Experience lang={i18n.language}>
          <h2>{t("Content creator")}</h2>
          <p>{t("Data Science")}</p>

          <p>{t("Web Developer")}</p>

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
  direction: ltr;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  gap: 20px;

  @media screen and (min-width: 998px) {
    flex-direction: row;
    justify-content: space-between;
    body.lang-fa {
      text-align: right;
    }
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
  flex: 1;

  img {
    width: 100%;
    max-width: 20rem;
    height: auto;
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
    text-align: ${(props) => (props.lang === "fa" ? "right" : "left")};
  }

  p {
    font-size: 1rem;
    margin: 0;
    text-align: ${(props) => (props.lang === "fa" ? "right" : "left")};
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
  flex: 1;

  h1 {
    padding-left: 20px;
    margin: 20px;
    text-align: ${(props) => (props.lang === "fa" ? "right" : "left")};
  }

  @media screen and (min-width: 1000px) {
    max-width: 50%;
    margin-right: 0;
    margin-bottom: 0;
  }
`;

const ProfileDescription = styled.div`
  padding: 20px;
  line-height: 1.8;
  margin: 20px;
  text-align: ${(props) => (props.lang === "fa" ? "right" : "left")};
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
  line-height: 1.8;
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

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    img {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
`;

const SmallProfileText = styled.p`
  margin: 0;
  font-size: 1rem;
  text-align: ${(props) => (props.lang === "fa" ? "right" : "left")};
  @media screen and (max-width: 768px) {
    text-align: center;
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
