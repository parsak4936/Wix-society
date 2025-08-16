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
      {/* LEFT SIDE — TEXT */}
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
          <span className="">
            {t("A bookworm, a science nerd, and a dreamer at heart.")}
          </span>
        </h1>

        <ProfileDescription lang={i18n.language}>
          <p>
            {t(
              "With a foundation in computer engineering, I’ve spent the past two years exploring React JS/Native, weaving together art, storytelling, and data to craft meaningful digital experiences. My curiosity is endless — from writing and creating audiobooks, to analyzing data and designing intuitive interfaces. I bridge creativity and logic to transform ideas into something both beautiful and functional."
            )}
          </p>

          <SmallImageSection>
            <BackgroundShape />
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
              {t("Originally from")}{" "}
              <span className="highlight-text">{t("Iran")}</span>,{" "}
              {t("now based in")}{" "}
              <span className="highlight-text">{t("Italy")}</span>.
              <br />
              {t("I thrive at the intersection of")}{" "}
              <span className="highlight-text">
                {t("technology, design, and data")}
              </span>
              .
            </SmallProfileText>
          </SmallImageSection>
        </ProfileDescription>
      </ProfileInfo>

      {/* RIGHT SIDE — IMAGE + SKILL GRID + SOCIALS */}
      <ProfileImage>
        <img src={Profileimage1} alt={t("Profile")} />
        <ExperienceGrid>
          <motion.div whileHover={{ scale: 1.1 }}>{t("Web Developer")}</motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>{t("Data Scientist")}</motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>{t("Story Writer")}</motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>{t("Content Creator")}</motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>{t("INFJ 2w3")}</motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>{t("Explorer")}</motion.div>
        </ExperienceGrid>

        <Line />
        <Social>
          <div className="social-icons">
            {[
              {
                href: "https://www.instagram.com/parsak.exe/",
                icon: <AiOutlineInstagram />,
                label: "Instagram Profile",
              },
              {
                href: "https://www.linkedin.com/in/parsa-kazemi-230253257/",
                icon: <FaLinkedin />,
                label: "LinkedIn Profile",
              },
              {
                href: "https://t.me/Parsakazemi",
                icon: <FaTelegramPlane />,
                label: "Telegram Channel",
              },
              {
                href: "https://www.youtube.com/@betterwix",
                icon: <FaYoutube />,
                label: "YouTube Channel",
              },
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
      </ProfileImage>
    </ProfileContainer>
  );
}

/* ---------- STYLES ---------- */
const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 2rem;
  text-align: center;

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    text-align: left;
    padding: 4rem 10%;
  }
`;

const ProfileImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  img {
    width: 100%;
    max-width: 20rem;
    aspect-ratio: 1 / 1;
    border-radius: 12%;
    object-fit: cover;
  }
`;

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  text-align: center;
 
  div {
    background: #018367;
    padding: 0.8rem 1rem;
    border-radius: 12px;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s ease-in-out;
    cursor: default;
  }
`;

const Line = styled.div`
  width: 150px;
  height: 2px;
  background: #018367;
  margin: 0.5rem auto;
`;

const ProfileInfo = styled.div`
  h1 {
    font-size: clamp(1.8rem, 3vw, 3rem);
    line-height: 1.2;
    margin-bottom: 1.2rem;
  }

  .highlight-text {
    color: #018367;
    font-weight: bold;
  }
`;

const ProfileDescription = styled.div`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  line-height: 1.6;
  margin-top: 1rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
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
  gap: 1rem;
  margin-top: 2rem;

  img {
    width: 8rem;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1.2rem;
  }
`;

const SmallProfileText = styled.p`
  font-size: 1rem;
  margin: 0;
  line-height: 1.5;
`;

const Social = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .social-icons {
    display: flex;
    gap: 1.5rem;
  }
`;
