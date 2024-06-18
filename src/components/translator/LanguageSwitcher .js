import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const languages = [
  { code: "en", name: "EN" },
  { code: "it", name: "IT" },
  { code: "fa", name: "FA" },
  { code: "ru", name: "RU" },
];

const LanguageSwitcher = ({ position }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <SwitcherContainer position={position} variants={containerVariants} initial="initial" animate="animate">
      {languages.map((lang) => (
        <LanguageButton
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          active={currentLanguage === lang.code}
          initial={{ scale: 1 }}
          animate={{ scale: currentLanguage === lang.code ? 1.1 : 1 }} // انیمیشن تغییر اندازه برای دکمه فعال
          transition={{ duration: 0.3 }}
        >
          <IconContainer active={currentLanguage === lang.code}>
            {lang.name}
          </IconContainer>
        </LanguageButton>
      ))}
    </SwitcherContainer>
  );
};

export default LanguageSwitcher;

const SwitcherContainer = styled(motion.div)`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 0.5rem;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  ${(props) => (props.position === "left" ? "left: 0;" : "right: 0px;")}
  top: 30%;
  transform: translateX(0vw) translateZ(0px);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;

  @media (max-width: 768px) {
    ${(props) => (props.position === "left" ? "left: 0;" : "right: 0px;")}
  }
`;

const LanguageButton = styled(motion.button)`
  width: 40px;
  height: 40px;
  background-color: ${(props) => (props.active ? '#f0ab0c' : '#01be96')};
  border-radius: 50%;
  margin: 10px 0;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff !important;
  font-size: 1.2rem !important;
  box-shadow: ${(props) => (props.active ? '0 0 10px 5px rgba(1, 190, 150, 0.5)' : 'none')};

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 1rem !important;
  }
`;

const IconContainer = styled.div`
  background-color: ${(props) => (props.active ? "#F0AB0C" : "#01be96")};
  color: white;
  border-radius: 50%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  transition: background-color 0.3s, color 0.3s;
`;

const containerVariants = {
  initial: { x: '100vw' },
  animate: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 10,
    },
  },
};
