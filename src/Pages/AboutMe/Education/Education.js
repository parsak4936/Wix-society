import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EducationBg from "../../../Assets/backgrounds/education.webp"; // عکس بکگراند برای تب تحصیلات
import WorkBg from "../../../Assets/backgrounds/Projects.webp"; // عکس بکگراند برای تب سابقه کاری
import styled, { keyframes } from "styled-components";
import { useTranslation } from "react-i18next";
import { FaNetworkWired, FaUserGraduate } from "react-icons/fa";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("education");
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) =>
        prevTab === "education" ? "work" : "education"
      );
    }, 20000); // تغییر هر 20 ثانیه

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
    <Header>
      <TitleContainer>
        <span className="green">{t("Experriences")}</span>
        <h1>{t("Explore my Education and Work Experiences")}</h1>
      </TitleContainer>

      <Tabs>
        <Tab
          onClick={() => setActiveTab("education")}
          active={activeTab === "education"}
        >
          <FaUserGraduate />
          {t("education")}
        </Tab>
        <Tab
          onClick={() => setActiveTab("work")}
          active={activeTab === "work"}
        >
          <FaNetworkWired />
          {t("work")}
        </Tab>
      </Tabs>
    </Header>

    <AnimatePresence mode="wait">
      {activeTab === "education" ? (
        <MotionTab
          key="education"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          style={{ backgroundImage: `url(${EducationBg})` }}
        >
          <ProgressBorder />
          <Overlay>
            <Description>
              {t("My educational journey includes a Bachelor's degree in Computer Engineering and a Master's degree in Data Science from the University of Messina. To explore the full spectrum of my academic achievements and see how they have shaped my professional expertise, visit the archive page.")}
            </Description>
          </Overlay>
        </MotionTab>
      ) : (
        <MotionTab
          key="work"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          style={{ backgroundImage: `url(${WorkBg})` }}
        >
          <ProgressBorder />
          <Overlay>
            <Description>
              {t("My work spans across various domains, including UI design, React development, website creation, and data analysis. To delve deeper into the details of my experiences and witness the breadth of my work, visit the archive page.")}
            </Description>
          </Overlay>
        </MotionTab>
      )}
    </AnimatePresence>
  </Container>
  );
};

export default TabComponent;
const Container = styled.div`
  position: relative;
  padding: 20px;
  border-radius: 8px;
  width: 90%;

  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;

  @media (max-width: 768px) {
    width: 95%;
    padding: 10px;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const progressAnimation = keyframes`
  0% {
    width: 0;
    left: 0;
  }
  100% {
    width: 100%;
    left: 0;
  }
`;

const ProgressBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 5px;
    background-color: yellow;
    animation: ${progressAnimation} 20s linear infinite;
  }
`;

const MotionTab = styled(motion.div)`
  width: 80%;
  height: 60vh;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  animation: wave44 3s infinite alternate;

  @media (max-width: 768px) {
    width: 100%;
    height: 50vh;
  }
`;

const Overlay = styled.div`
  width: 100%;
  padding: 20px;
  height: 40%;
  color: white;
  background: rgba(0, 0, 0, 0.6);
  text-align: center;
  border-radius: 0 0 10px 10px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  padding: 10px;
  word-break: break-word;
  overflow-wrap: break-word; // اضافه شده

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 5px;
  }
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  padding: 10px;
  span {
    font-weight: 700;
    text-transform: uppercase;
    color: #018367;
  }
  h1 {
    padding-top: 1rem;
    text-transform: capitalize;
    color: #fff;
  }
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

const Tab = styled.button`
  border: none;
  border-radius: 10px;
  background: ${(props) => (props.active ? "#018367" : "none")};
  color: ${(props) => (props.active ? "#fff" : "#fff")};
  padding: 0.6rem 0.6rem;
  margin: 0.5rem;
  font-size: 1.2rem;
  cursor: pointer;
  border: ${(props) => (props.active ? "1px solid #018367" : "1px solid #fff")};
  animation: ${(props) =>
    props.active ? "wave1 3s infinite alternate" : "none"};
  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.4rem 0.4rem;
  }
`;
