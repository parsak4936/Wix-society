import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import RandomIcon from "./components/RandomIcon/RandomIcon ";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import Aboutme from "./Pages/AboutMe/Aboutme";
import Home from "./Pages/Home";
import Archive from "./Pages/Archive/Archive";
import "./Pages/Home.css";
import Travels from "./Pages/Travel/Travels";
import styled, { StyleSheetManager } from 'styled-components';

import { AudioProvider } from "./Context/AudioContext";
import GlobalAudioPlayer from "./components/AudioPlayer/GlobalAudioPlayer";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Banner/Header";
import LanguageSwitcher from "./components/translator/LanguageSwitcher ";
import { useTranslation } from "react-i18next";
const GlobalStyle = createGlobalStyle`
  @keyframes wave1 {
    0% { box-shadow: 0 0 0 0 rgba(1, 190, 150, 0.4); }
    25% { box-shadow: 0 0 10px 10px rgba(1, 190, 150, 0.3); }
    50% { box-shadow: 0 0 20px 20px rgba(1, 190, 150, 0.2); }
    75% { box-shadow: 0 0 30px 30px rgba(1, 190, 150, 0.1); }
    100% { box-shadow: 0 0 40px 40px rgba(1, 190, 150, 0.4); }
  }

  @keyframes wave44 {
    0% { box-shadow: 0 0 0 0 rgba(1, 190, 150, 0.4); }
    25% { box-shadow: 0 0 2px 2px rgba(1, 190, 150, 0.3); }
    50% { box-shadow: 0 0 5px 5px rgba(1, 190, 150, 0.2); }
    75% { box-shadow: 0 0 10px 10px rgba(1, 190, 150, 0.1); }
    100% { box-shadow: 0 0 12px 12px rgba(1, 190, 150, 0.4); }
  }

  @keyframes wave2 {
    0% { box-shadow: 0 0 5px 5px rgba(1, 190, 150, 0.4); }
    25% { box-shadow: 0 0 15px 15px rgba(1, 190, 150, 0.3); }
    50% { box-shadow: 0 0 25px 25px rgba(1, 190, 150, 0.2); }
    75% { box-shadow: 0 0 35px 35px rgba(1, 190, 150, 0.1); }
    100% { box-shadow: 0 0 45px 45px rgba(1, 190, 150, 0.4); }
  }

  @keyframes wave3 {
    0% { box-shadow: 0 0 10px 10px rgba(1, 190, 150, 0.4); }
    25% { box-shadow: 0 0 20px 20px rgba(1, 190, 150, 0.3); }
    50% { box-shadow: 0 0 30px 30px rgba(1, 190, 150, 0.2); }
    75% { box-shadow: 0 0 40px 40px rgba(1, 190, 150, 0.1); }
    100% { box-shadow: 0 0 50px 50px rgba(1, 190, 150, 0.4); }
  }

  /* New yellow wave animation */
  @keyframes waveYellow {
    0% { box-shadow: 0 0 0 0 rgba(255, 221, 51, 0.4); }
    25% { box-shadow: 0 0 10px 10px rgba(255, 221, 51, 0.3); }
    50% { box-shadow: 0 0 20px 20px rgba(255, 221, 51, 0.2); }
    75% { box-shadow: 0 0 30px 30px rgba(255, 221, 51, 0.1); }
    100% { box-shadow: 0 0 40px 40px rgba(255, 221, 51, 0.4); }
  }
`;

const pageTransition = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const transitionEffect = {
  initial: { clipPath: "circle(0% at 50% 50%)" },
  animate: { clipPath: "circle(150% at 50% 50%)" },
  exit: { clipPath: "circle(0% at 50% 50%)" },
  transition: { duration: 1, ease: "easeInOut" },
};

const AnimatedRoutes = () => {
  const { scrollYProgress } = useScroll();

  const location = useLocation();
  const [showTransition, setShowTransition] = useState(true);

  return (
    <>
      <GlobalStyle />
      <LanguageSwitcher position="right" />

      <motion.div
        className="scroll-progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      {showTransition && (
        <motion.div
          className="route-transition-overlay"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={transitionEffect}
          onAnimationComplete={() => setShowTransition(false)}
        />
      )}
      {!showTransition && (
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={pageTransition}
                >
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/archive"
              element={
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={pageTransition}
                >
                  <Archive />
                </motion.div>
              }
            />
            <Route
              path="/travel"
              element={
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={pageTransition}
                >
                  <Travels />
                </motion.div>
              }
            />
            <Route
              path="/aboutme"
              element={
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={pageTransition}
                >
                  <Aboutme />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      )}
    </>
  );
};

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const language = i18n.language;
    document.body.classList.remove("lang-en", "lang-fa", "lang-ru", "lang-it");
    if (language.startsWith("en")) {
      document.body.classList.add("lang-en");
    } else if (language.startsWith("fa")) {
      document.body.classList.add("lang-fa");
    } else if (language.startsWith("it")) {
      document.body.classList.add("lang-it");
    } else if (language.startsWith("ru")) {
      document.body.classList.add("lang-ru");
    }
  }, [i18n.language]);

  return (
    <AudioProvider>
      <BrowserRouter>
        <Header />
        <RandomIcon />
        <ScrollUp />
        <GlobalAudioPlayer />
        <AnimatedRoutes />
      </BrowserRouter>
    </AudioProvider>
  );
};

export default App;
