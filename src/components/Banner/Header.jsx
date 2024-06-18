import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import HeaderLogo from "../../Assets/Logo/Logo1.png";
import { motion } from "framer-motion";
 import { useTranslation } from "react-i18next";

const Header = () => {
  const [isInitialAnimationDone, setIsInitialAnimationDone] = useState(false);
  const [bar, setBar] = useState(false);
  const location = useLocation(); // گرفتن مسیر فعلی
  const { t } = useTranslation();

  const initialAnimation = {
    hidden: { x: "-100%", opacity: 0, rotate: 0 },
    visible: { x: "0%", opacity: 1, rotate: [0, 360] },
  };

  const repeatAnimation = {
    rotate: 360,
  };

  useEffect(() => {
    if (isInitialAnimationDone) {
      const interval = setInterval(() => {
        setIsInitialAnimationDone(false);
        setTimeout(() => {
          setIsInitialAnimationDone(true);
        }, 1000);
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [isInitialAnimationDone]);

  

  return (
    <Container bar={bar}>
      <Logo>
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
        <span>
          <StyledLink to="/" className="important">
            {t("WIXLOOP")}
          </StyledLink>
        </span>
      </Logo>

      <Nav bar={bar}>
        <span>
          <StyledLink
            to="/"
            className={location.pathname === "/" ? "active" : ""}
          >
            {t("Home")}
          </StyledLink>
        </span>
        <span>
          <StyledLink
            to="/archive"
            className={location.pathname === "/archive" ? "active" : ""}
          >
            {t("archive")}
          </StyledLink>
        </span>
        <span>
          <StyledLink
            to="/aboutme"
            className={location.pathname === "/aboutme" ? "active" : ""}
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
  direction: ltr; /* اضافه کردن direction: ltr */
  display: flex;
  align-items: center;
  justify-content: center; /* Center the header */
  gap: 40rem;
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem 0;
  position: absolute;
  z-index: 10;
  background: none; /* No background */

  .bars {
    display: none;
  }
  @media (max-width: 1024px) {
    gap: 9rem;
  }

  @media (max-width: 640px) {
 
    .bars {
      width: 40px;
      color: black !important;
      height: 40px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      z-index: 10;
      .bar {
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: ${(props) => (props.bar ? "#000" : "#fff")};

        transition: all 400ms ease-in-out;
        :before,
        :after {
          content: "";
          width: 100%;

          height: 2px;
          background-color: ${(props) => (props.bar ? "#000" : "#fff")};
          position: absolute;
        }

        :before {
          z-index: 10;
          transform: ${(props) =>
            props.bar ? "rotate(45deg)" : "translateY(10px)"};
          transition: all 400ms ease-in-out;
        }

        :after {
          z-index: 10;

          transform: ${(props) =>
            props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
          transition: all 400ms ease-in-out;
        }
      }
    }
  }

  @media (max-width: 385px) {
    gap: 2rem;
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

const Nav = styled.div`
  color: #fff;

  @media (max-width: 640px) {
    position: fixed;
    display: flex;
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
    margin-left: 1rem;

    /* استایل مخصوص برای زبان فارسی */
    body.lang-fa & {
      @media (min-width: 641px) {
        margin-left: 2rem; /* فاصله بیشتر بین لینک‌ها در زبان فارسی */
      }
    }

    a {
      color: ${(props) =>
        props.bar ? "#000" : "#fff"} !important; /* رنگ لینک‌ها در حالت لپ‌تاپ و موبایل */
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
        color: #01be96 !important; /* رنگ متفاوت برای لینک فعال */
        font-weight: bold !important; /* وزن متفاوت برای لینک فعال */
      }
    }
  }
`;

 

const StyledLink = styled(Link)`
  color: white !important;
  text-decoration: none !important;
  &.active {
    color: #01be96 !important;
    font-weight: bold !important;
  }
`;
