import React, { useState, useEffect, useCallback } from "react";
import Carousel from "./Carousel";
import ContentBox from "./ContentBox";
import styled from "styled-components";
import useEducationData from "./EducationData"; // تغییر در import
import { useTranslation } from "react-i18next"; // اضافه کردن ترجمه

const Education = () => {
  const educationData = useEducationData();

  const { t } = useTranslation();
  const [selectedCard, setSelectedCard] = useState(educationData[0]); // انتخاب دیفالت دایره اول
  const [currentIndex, setCurrentIndex] = useState(0); // اضافه کردن اندیس فعلی
  const [key, setKey] = useState(0); // اضافه کردن کلید یکتا برای هر دایره

  const handleNextClick = useCallback(() => {
    const nextIndex = (currentIndex + 1) % educationData.length;
    setSelectedCard(educationData[nextIndex]);
    setCurrentIndex(nextIndex);
    setKey(key + 1); // به روز رسانی کلید یکتا
  }, [currentIndex, key, educationData]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 20000);
    return () => clearInterval(interval);
  }, [handleNextClick]);

  const handleCardClick = (card, index) => {
    setSelectedCard(card);
    setCurrentIndex(index);
    setKey(key + 1); // به روز رسانی کلید یکتا
  };

  return (
    <Container>
      <TitleContainer>
        <span className="green">{t("Education")}</span>
        <h1>{t("All of the certifications and graduations")}</h1>
      </TitleContainer>
      <Carousel onCardClick={handleCardClick} currentIndex={currentIndex} />
      {selectedCard && <ContentBox key={key} selectedCard={selectedCard} />}
    </Container>
  );
};

export default Education;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;
  text-align: center;
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 1rem;

  span {
    font-weight: 500;
    text-transform: uppercase;
    color: #01be96;
  }

  h1 {
    padding-top: 1rem;
    text-transform: capitalize;
    color: #fff;
  }
`;
