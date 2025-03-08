import React, { useState } from "react";
import { IoIosQuote } from "react-icons/io";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const ClientSlider = (props) => {
  const { t } = useTranslation();
  const { name, position, img_url, stars, disc } = props.item;
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to render stars
  const renderStars = (rating) => {
    const filledStars = Math.floor(rating);
    const starsArray = [];
    for (let i = 0; i < 5; i++) {
      if (i < filledStars) {
        starsArray.push(<StarFilled key={i} />);
      } else {
        starsArray.push(<StarOutlined key={i} />);
      }
    }
    return starsArray;
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Container>
      <Header>
        <span className="quote">
          <IoIosQuote />
        </span>
        <div>{renderStars(stars)}</div>
      </Header>
      <Body>
        <AnimatePresence>
          {isExpanded ? (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              {t(disc)}
            </motion.div>
          ) : (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {t(disc.substring(0, 100))}...
            </motion.div>
          )}
        </AnimatePresence>
        {disc.length > 100 && (
          <ReadMoreButton onClick={toggleExpand}>
            {isExpanded ? t("Read Less") : t("Read More")}
          </ReadMoreButton>
        )}
      </Body>
      <Footer>
        <img src={img_url} alt={t(name)} />
        <div className="details">
          <h1>{t(name)}</h1>
          <p>{t(position)}</p>
        </div>
      </Footer>
    </Container>
  );
};

export default ClientSlider;

const Container = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  padding: 2rem 1.5rem;
  margin: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  border-radius: 15px;
  animation: wave44 3s infinite alternate;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  .quote {
    font-size: 3rem;
    color: #018367;
    opacity: 0.7;
  }
`;

const StarFilled = styled(AiFillStar)`
  color: #ffcd3c;
  font-size: 1.5rem;
  filter: drop-shadow(0 0 0.75rem orange);
`;

const StarOutlined = styled(AiOutlineStar)`
  color: #fff;
  font-size: 1.5rem;
  filter: drop-shadow(0 0 0.75rem orange);
`;

const Body = styled.div`
  font-size: 1rem;
  color: #ddd;
  text-align: justify;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
`;

const ReadMoreButton = styled.button`
  background: #018367;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  display: block;
  margin: 10px auto 0 auto;
  transition: background 0.3s ease;

  &:hover {
    background: #019c7a;
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    object-fit: cover;
  }

  h1 {
    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;
    @media (max-width: 580px) {
      font-size: 1rem;
    }
    @media (max-width: 538px) {
      font-size: 0.9rem;
    }
  }

  p {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
    @media (max-width: 538px) {
      font-size: 0.8rem;
    }
  }
`;
