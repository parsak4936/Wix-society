import React, { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import RandomIcon from "./components/RandomIcon/RandomIcon ";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import "./Pages/Home.css";
import styled, { StyleSheetManager } from 'styled-components';

import { AudioProvider } from "./Context/AudioContext";
import GlobalAudioPlayer from "./components/AudioPlayer/GlobalAudioPlayer";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Banner/Header";
import LanguageSwitcher from "./components/translator/LanguageSwitcher ";
import { useTranslation } from "react-i18next";

// Route-level code splitting: heavy pages (e.g. the MapLibre travel map) load on demand
const Home = lazy(() => import("./Pages/Home"));
const Aboutme = lazy(() => import("./Pages/AboutMe/Aboutme"));
const Portfolio = lazy(() => import("./Pages/Portfolio/Portfolio"));
const Travels = lazy(() => import("./Pages/Travel/Travels"));

const RouteFallback = styled.div`
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  &::after {
    content: "";
    width: 40px;
    height: 40px;
    border: 4px solid rgba(1, 131, 103, 0.25);
    border-top-color: #018367;
    border-radius: 50%;
    animation: app-spin 0.9s linear infinite;
  }
  @keyframes app-spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
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

  /* Respect users who prefer less motion — also a big paint/CPU saving */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.001ms !important;
      scroll-behavior: auto !important;
    }
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

const ROUTE_TITLES = {
  "/": "BetterWix — Parsa Kazemi",
  "/Portfolio": "Portfolio — BetterWix",
  "/travel": "Travels — BetterWix",
  "/aboutme": "About Me — BetterWix",
};

const NotFoundWrap = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  gap: 0.5rem;
  h1 {
    font-size: clamp(4rem, 12vw, 8rem);
    margin: 0;
    color: #018367;
  }
  p {
    color: #bbb;
    font-size: 1.1rem;
  }
  a {
    margin-top: 1rem;
    padding: 0.7rem 1.4rem;
    background: #018367;
    color: #fff;
    border-radius: 10px;
    text-decoration: none;
    transition: background 0.3s;
  }
  a:hover {
    background: #00a37a;
  }
`;

const NotFound = () => (
  <NotFoundWrap>
    <h1>404</h1>
    <p>This page wandered off the map.</p>
    <Link to="/">Back home</Link>
  </NotFoundWrap>
);

const AnimatedRoutes = () => {
  const { scrollYProgress } = useScroll();

  const location = useLocation();
  const [showTransition, setShowTransition] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      ROUTE_TITLES[location.pathname] || "BetterWix — Parsa Kazemi";
  }, [location.pathname]);

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
        <Suspense fallback={<RouteFallback />}>
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
              path="/Portfolio"
              element={
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={pageTransition}
                >
                  <Portfolio/>
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
            <Route
              path="*"
              element={
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={pageTransition}
                >
                  <NotFound />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
        </Suspense>
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
