import React, { useState } from "react";
import styled from "styled-components";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import {
  AiOutlineInstagram,
} from "react-icons/ai";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { Slide, Zoom } from "react-awesome-reveal";
import { FaLinkedinIn, FaTwitterSquare, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = (event) => {
    event.preventDefault();
        setShowAlert(true);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  
  return (
    <Container id="footer">
      <Profile>
        <Slide direction="left" delay={1}>
          <h1>Anything Else ? then Contact me</h1>
        </Slide>
        <div className="address">
          <Slide direction="left">
            <h3>feel free to send me your criticizes!</h3>
          </Slide>
        </div>
        <div className="links">
          <Slide direction="left">
            <h1>Contact me directly:</h1>
          </Slide>
          <div>
            <span>
              <FiPhoneCall />
            </span>
            <Slide direction="left">
              <a href="tel:+4733378901">+39 351 377 0836</a>
            </Slide>
          </div>
          <div>
            <Slide direction="left">
              <span>
                <HiOutlineMailOpen />
              </span>
            </Slide>
            <Slide>
              <a href="wixloop.contact@gmail.com">Wixloop.contact@gmail.com</a>
            </Slide>
          </div>
        </div>
        <div className="profiles">
          <Slide direction="left">
            <h1>Check my profiles</h1>
          </Slide>
          <div className="icons">
            <Zoom>
              <span>
                <a href="https://www.instagram.com/wixloop.exe/">
                  <AiOutlineInstagram />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="https://www.linkedin.com/in/parsa-kazemi-230253257/">
                  <FaLinkedinIn />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <Link to="https://www.youtube.com/channel/UC31aBZ8280jBRyEtk1pzzZg">
                  <FaYoutube />
                </Link>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="https://twitter.com/4936Parsa">
                  <FaTwitterSquare />
                </a>
              </span>
            </Zoom>
          </div>
        </div>
      </Profile>
      <Form>
        <Slide direction="right">
          <form>
            <div className="name">
              <span>
                <CgProfile />
              </span>
              <input type="text" placeholder="Fullname..." />
            </div>
            <div className="email">
              <span>
                <MdAlternateEmail />
              </span>
              <input type="email" placeholder="Email..." />
            </div>
            <div className="message">
              <span className="messageIcon">
                <FiMail />
              </span>
              <textarea cols="30" rows="10" placeholder="your message here..."></textarea>
            </div>

            <button onClick={handleButtonClick}>Submit</button>
          </form>
        </Slide>
      </Form>
      {/* Overlay for the alert */}
      {showAlert && (
        <Overlay>
          <Dialog>
            <Message>Your message has been sent, if there were no contact for 3 work days,contact Via other social medias</Message>
            <CloseButton onClick={closeAlert}>Close</CloseButton>
          </Dialog>
        </Overlay>
      )}
    </Container>
  );
};

export default Footer;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);  
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Dialog = styled.div`
  background-color: black;
  padding: 20px;
  border-radius: 5px;
`;

const Message = styled.p`
  font-size: 18px;
`;

const CloseButton = styled.button`
  background-color: #01be96;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const Container = styled.div`
  margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
    padding: 2rem 0; /* Adjust padding as needed */
  }
`;
const Profile = styled.div`
  flex: 1;
  .address {
    padding: 1rem 0;
    h1 {
      font-size: 1.2rem;
    }

    p {
      width: 60%;
      padding-top: 0.5rem;
      @media (max-width: 650px) {
        width: 100%;
      }
    }
  }

  .links {
    h1 {
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      span {
        background-color: #3e3e3e;
        width: 2rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
      }

      a {
        font-size: 1rem;
        margin-bottom: 0.5rem;
        text-decoration: none;
        color: lightgray;
        :hover {
          color: orange;
        }
      }
      @media (max-width: 650px) {
        a {
          font-size: 0.7rem;
        }
      }
    }
  }

  .profiles {
    h1 {
      font-size: 1.2rem;
      padding: 1rem 0;
    }

    .icons {
      display: flex;
      align-items: center;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        border-radius: 50px;

        :hover {
          background-color: orange;
        }

        a {
          margin-top: 0.2rem;
          color: #fff;
        }
      }
    }
  }
`;
const Form = styled.div`
  flex: 1;
  h1 {
    font-size: 1.3rem;
    padding-bottom: 0.7rem;
  }

  form {
    background-color: #191923;
    padding: 0.8rem;
    border-radius: 5px;
    .name,
    .email,
    .message {
      display: flex;
      border: 1px solid gray;
      margin-bottom: 0.5rem;
      input,
      textarea {
        width: 100%;
        border: none;
        outline: none;
        color: #fff;
        background-color: transparent;
        padding: 1rem 0.5rem;
      }
      span {
        background-color: #3e3e3e;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .messageIcon {
        align-items: flex-start;
        padding-top: 0.5rem;
      }
    }

    button {
      width: 5rem;
      height: 1.8rem;
      background-color: #01be96;
      border: none;
      border-radius: 5px;
      filter: drop-shadow(0px 4px 5px #01be9551);
      cursor: pointer;
      :hover {
        filter: drop-shadow(0px 6px 9px #01be9551);
      }
    }
  }
`;
