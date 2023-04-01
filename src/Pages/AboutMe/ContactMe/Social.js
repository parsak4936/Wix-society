import React from "react";
import { Link } from "react-router-dom";
import './Social.css'
import { AiOutlineInstagram } from "react-icons/ai";
import styled from "styled-components";
import {
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaTwitterSquare,
} from "react-icons/fa";
export default function Social() {
  const Social = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    p {
      font-size: 0.9rem;
      @media (max-width: 690px) {
        font-size: 0.7rem;
      }
    }

    .social-icons {
      display: flex;
      align-items: center;
      gap: 1rem;
      span {
        width: 2.3rem;
        height: 2rem;
        clip-path: polygon(
          25% 0%,
          75% 0%,
          100% 50%,
          75% 100%,
          25% 100%,
          0% 50%
        );
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
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  `;
  return (
    <div className="contact-info">
      <div className="address">
        <h4 style={{ marginRight: "2rem" }}>Address:</h4>
        <p>shahid babaee blvd, Keshavarz-e Ba Haghighat ave,No 28</p>
      </div>
      <div className="social-links">
        <h4 style={{ marginRight: "2rem" }}>Connect with Me:</h4>
        <Social>
          <div className="social-icons">
            <span>
              <a href="/">
                <AiOutlineInstagram />
              </a>
            </span>
            <span>
              <a href="/">
                <FaLinkedin />
              </a>
            </span>
            <span>
              <a href="/">
                <FaTwitterSquare />
              </a>
            </span>
            <span>
              <Link to="">
                <FaYoutube />
              </Link>
            </span>
          </div>
        </Social>
      </div>
    </div>
  );
}
