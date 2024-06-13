import React from "react";
import { Link } from "react-router-dom";
import "./Social.css";
import { AiOutlineInstagram } from "react-icons/ai";
import styled from "styled-components";
import { FaYoutube, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
export default function Social() {
  const Social = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem; /* Reduced the gap for better spacing */
  font-size: 1rem; /* Adjusted font size */

  @media (max-width: 690px) {
    font-size: 0.8rem; /* Adjusted font size for smaller screens */
  }

  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
  return (
    <div className="contact-info">
      <div className="social-links">
        <h4 style={{ marginRight: "2rem" }}>Connect with Me:</h4>
        <Social>
          <div className="social-icons">
            <span>
              <a href="https://www.instagram.com/wixloop.exe/">
                <AiOutlineInstagram />
              </a>
            </span>
            <span>
              <a href="https://www.linkedin.com/in/parsa-kazemi-230253257/">
                <FaLinkedin />
              </a>
            </span>
            <span>
              <a href="https://twitter.com/4936Parsa">
                <FaTwitterSquare />
              </a>
            </span>
            <span>
              <Link to="https://www.youtube.com/channel/UC31aBZ8280jBRyEtk1pzzZg">
                <FaYoutube />
              </Link>
            </span>
          </div>
        </Social>
      </div>
    </div>
  );
}
