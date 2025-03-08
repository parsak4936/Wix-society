import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import HeaderLogo from "../../Assets/Logo/Logo1.webp";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isInitialAnimationDone, setIsInitialAnimationDone] = useState(undefined);
  const [bar, setBar] = useState(undefined);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const initialAnimation = {
    hidden: { x: "-100%", opacity: 0, rotate: 0 },
    visible: { x: "0%", opacity: 1, rotate: [0, 360] },
  };

  const repeatAnimation = {
    rotate: 360,
  };

  useEffect(() => {
    if (isInitialAnimationDone ==undefined) {
      const interval = setInterval(() => {
        setIsInitialAnimationDone(false);
        setTimeout(() => {
          setIsInitialAnimationDone(true);
        }, 1000);
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [isInitialAnimationDone]);

  const handleLinkClick = () => {
    setBar(undefined);
  };

  return (
<Container bar={bar ? "true" : undefined} lang={i18n.language}>
      <Logo>
        <StyledLink to="/" onClick={handleLinkClick}>
          <motion.span
            className="green"
            initial="hidden"
            animate="visible"
            variants={initialAnimation}
            transition={{ duration: 1 }}
            onAnimationComplete={() => setIsInitialAnimationDone(true)}
          >
            <motion.img
              src={HeaderLogo}
              alt="BigCo Inc. logo"
              style={{ height: "60px" }}
              animate={isInitialAnimationDone ? repeatAnimation : {}}
              transition={{
                duration: 8,
                repeat: isInitialAnimationDone ? Infinity : 0,
                repeatType: "loop",
              }}
            />
          </motion.span>
        </StyledLink>
        <span>
          <StyledLink to="/" className="important" onClick={handleLinkClick}>
            {t("WIXLOOP")}
          </StyledLink>
        </span>
      </Logo>

      <Nav bar={bar}>
        <span>
          <StyledLink
            to="/"
            className={location.pathname === "/" ? "active" : ""}
            onClick={handleLinkClick}
          >
            {t("Home")}
          </StyledLink>
        </span>
        <span>
          <StyledLink
            to="/archive"
            className={location.pathname === "/archive" ? "active" : ""}
            onClick={handleLinkClick}
          >
            {t("archive")}
          </StyledLink>
        </span>
        <span>
          <StyledLink
            to="/travel"
            className={location.pathname === "/travel" ? "active" : ""}
            onClick={handleLinkClick}
          >
            {t("Travel")}
          </StyledLink>
        </span>
        <span>
          <StyledLink
            to="/aboutme"
            className={location.pathname === "/aboutme" ? "active" : ""}
            onClick={handleLinkClick}
          >
            {t("About Me")}
          </StyledLink>
        </span>
      </Nav>

      <div onClick={() => setBar(!bar)} className="bars">
        <div className={`bar ${bar ? "active" : ""}`}></div>
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  direction: ${(props) => (props.lang === "fa" ? "rtl" : "ltr")};
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.lang === "fa" ? "flex-start" : "space-between")};
  gap: ${(props) => (props.lang === "fa" ? "2rem" : "20rem")};

  width: 80%;
    margin: ${(props) => (props.lang === "fa" ? " 0px 15% 20% 10%" : "0px 50px 10% 10%")};

  
  padding: 1.5rem 0;
  position: absolute;
  z-index: 10;
  background: none;

  .bars {
    display: none;
  }
  @media (max-width: 1024px) {
    gap: ${(props) => (props.lang === "fa" ? "3rem" : "4rem")};
  }

  @media (max-width: 640px) {
     .bars {
  width: 40px;
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
}

.bar {
  position: absolute;
  width: 30px;
  height: 3px;
  background-color: ${(props) => (props.bar ? "#000" : "#fff")};
  transition: all 400ms ease-in-out;
}

.bar::before,
.bar::after {
  content: "";
  width: 30px;
  height: 3px;
  background-color: ${(props) => (props.bar ? "#000" : "#fff")};
  position: absolute;
  transition: all 400ms ease-in-out;
}

.bar::before {
  
  transform: ${(props) => (props.bar ? "rotate(45deg) translate(0px, 0px)" : "translateY(-10px)")};
}

.bar::after {
  
  transform: ${(props) => (props.bar ? "rotate(-45deg) translate(0px, 0px)" : "translateY(10px)")};
}

.bar.active {
  background-color: transparent; /* مخفی کردن خط وسط */
}
  }

  @media (max-width: 385px) {
    gap: ${(props) => (props.lang === "fa" ? "1rem" : "2rem")};
  }
`;

const Nav = styled.div`
  color: #fff;
  display: flex;
  align-items: center;

  @media (max-width: 640px) {
    position: fixed;
    flex-direction: column;
    background-color: #f0f0f0;
    inset: 0;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    gap: 2rem;
    font-weight: 700;
    height: ${(props) => (props.bar ? "100vh" : 0)};
    transition: height 400ms ease-in-out;
    overflow: hidden;
    z-index: 10;
  }

  span {
    margin-left: ${(props) => (props.lang === "fa" ? "1rem" : "2rem")};
    margin-right: ${(props) => (props.lang === "fa" ? "0" : "1rem")};

    body.lang-fa & {
      @media (min-width: 641px) {
        margin-left: ${(props) => (props.lang === "fa" ? "1rem" : "2rem")};
      }
    }

    a {
      color: ${(props) => (props.bar ? "#000" : "#fff")} !important;
      text-decoration: none !important;
      font-weight: 400 !important;
      position: relative !important;

      :before {
        content: "" !important;
        position: absolute !important;
        left: 0 !important;
        right: 0 !important;
        bottom: -5px !important;
        height: 2px !important;
        background-color: #000 !important;
        transform: scale(0) !important;
        transform-origin: right !important;
        transition: transform 400ms ease-in-out !important;
      }

      :hover:before {
        z-index: 10 !important;
        transform: scale(1) !important;
        transform-origin: left !important;
      }

      :hover {
        opacity: 0.7 !important;
      }

      &.active {
        color: #018367 !important;
        font-weight: bold !important;
      }
    }
  }
`;


const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  span {
    font-size: 1.8rem;
  }

  h1 {
    font-weight: 600;
    font-size: 1.2rem;
  }
`;

 
const StyledLink = styled(Link)`
  color: white !important;
  text-decoration: none !important;
  &.active {
    color: #018367 !important;
    font-weight: bold !important;
  }
`;
