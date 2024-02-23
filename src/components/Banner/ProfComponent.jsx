import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedin, FaTwitterSquare, FaYoutube } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
 import { Link } from "react-router-dom";
import profileimage from "../../Assets/Profile/WixProfile.png";
const ProfComponent = () => {
   

  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hello <span className="green">I'am</span>
          </h4>
          <h1 className="green">Parsa Kazemi</h1>
          <h3>
            Front-End Developer,Writer,Content Creator,Graphic Designer and
            Video Editor
          </h3>
          <p>
            I'm a computer engineer with a passion for art and human-related
            fields and a geek who constantly craves new adventures and
            challenges. No, I don't have ADHD but I certainly can't sit on an
            adventure for too long.
          </p>
          <Link to="/aboutme">
            <button>Learn More about me</button>
          </Link>
          <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <a href="https://www.instagram.com/parsak.exe/">
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
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img src={profileimage} alt="NOT real me,edited with midjourney !" />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
    
  }

  @media (max-width: 640px) {
    flex-direction: column;
    height: auto;  /* Remove height: 100% in mobile view */
    padding-bottom: 2rem;  /* Adjust padding as needed */
        h4, h1, h3, p {
      font-size: 1rem; /* Adjust as needed */
    }
  }
`;
const Texts = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
   
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
   

    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    

    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
   

    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
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
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;

      :hover {
        transform: rotate(360deg);
      }

      svg {
        color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`;
const Profile = styled.div`
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  
  img {
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    
    @media (max-width: 790px) {
      width: 15rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 80%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
