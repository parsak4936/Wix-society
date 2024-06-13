import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import HeaderLogo from "../../Assets/Logo/Logo1.png";
import { motion } from "framer-motion";

const Header = () => {
  const [isInitialAnimationDone, setIsInitialAnimationDone] = useState(false);
  const [bar, setBar] = useState(false);
  const location = useLocation(); // گرفتن مسیر فعلی

  const initialAnimation = {
    hidden: { x: "-100%", opacity: 0, rotate: 0 },
    visible: { x: "0%", opacity: 1, rotate: [0, 360] }
  };

  const repeatAnimation = {
    rotate: 360
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
              repeatType: "loop"
            }}
          />
        </motion.span>
        <span>
          <StyledLink to="/">WIXLOOP</StyledLink>
        </span>
      </Logo>
      <Nav bar={bar}>
        <span>
          <StyledLink to="/" className={location.pathname === "/" ? "active" : ""}>Home</StyledLink>
        </span>
        <span>
          <StyledLink to="/aboutme" className={location.pathname === "/aboutme" ? "active" : ""}>About Me</StyledLink>
        </span>
      </Nav>
      <div onClick={() => setBar(!bar)} className="bars">
        <div className="bar"></div>
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  width: 80%;
  margin: 0 auto;
  padding: 1.5rem 0;
  position: relative;
  animation: header 500ms ease-in-out;
  z-index: 100;
  @media (max-width: 840px) {
    width: 90%;
  }
  .bars {
    display: none;
  }
  @media (max-width: 640px) {
    .bars {
      width: 40px;
      height: 40px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      z-index: 100;
      .bar {
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: ${(props) => (props.bar ? "transparent" : "#fff")};
        transition: all 400ms ease-in-out;
        :before,
        :after {
          content: "";
          width: 100%;
          height: 2px;
          background-color: #fff;
          position: absolute;
        }

        :before {
          z-index: 100;
          transform: ${(props) =>
            props.bar ? "rotate(45deg)" : "translateY(10px)"};
          transition: all 400ms ease-in-out;
        }

        :after {
          z-index: 100;
          transform: ${(props) =>
            props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
          transition: all 400ms ease-in-out;
        }
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

const Nav = styled.div`
  @media (max-width: 640px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color: #01be96;
    inset: 0;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    gap: 2rem;
    font-weight: 700;
    height: ${(props) => (props.bar ? "100vh" : 0)};
    transition: height 400ms ease-in-out;
    overflow: hidden;
    z-index: 100;
  }
  span {
    margin-left: 1rem;
    a {
      color: #fff;
      text-decoration: none;
      font-weight: 400;
      position: relative;
      :before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -5px;
        height: 2px;
        background-color: #fff;
        transform: scale(0);
        transform-origin: right;
        transition: transform 400ms ease-in-out;
      }
      :hover:before {
        z-index: 100;
        transform: scale(1);
        transform-origin: left;
      }
      :hover {
        opacity: 0.7;
      }
      &.active {
        color: #01be96; /* رنگ متفاوت برای لینک فعال */
        font-weight: bold; /* وزن متفاوت برای لینک فعال */
      }
    }
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &.active {
    color: #01be96;
    font-weight: bold;
  }
`;
