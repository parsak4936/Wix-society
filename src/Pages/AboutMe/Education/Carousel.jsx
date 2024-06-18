import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import useEducationData from "./EducationData"; // تغییر در import
import { motion } from "framer-motion";

const Carousel = ({ onCardClick, currentIndex }) => {
  const scrollRef = useRef(null);
  const educationData = useEducationData();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = currentIndex * scrollRef.current.offsetWidth;
    }
  }, [currentIndex]);

  const handlePrevClick = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= scrollRef.current.offsetWidth;
      const prevIndex = currentIndex === 0 ? educationData.length - 1 : currentIndex - 1;
      onCardClick(educationData[prevIndex], prevIndex);
    }
  };

  const handleNextClick = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollRef.current.offsetWidth;
      const nextIndex = (currentIndex + 1) % educationData.length;
      onCardClick(educationData[nextIndex], nextIndex);
    }
  };

  return (
    <CarouselContainer>
      <Arrow onClick={handlePrevClick}>{"<"}</Arrow>
      <TimelineWrapper ref={scrollRef}>
        <Timeline>
          {educationData.map((card, index) => (
            <TimelineItem
              key={index}
              onClick={() => onCardClick(card, index)}
              as={motion.div}
              whileHover={{ scale: 1.1 }}
            >
              <TimelineDot isSelected={currentIndex === index}>
                <DotImage src={card.avatar} alt="avatar" />
              </TimelineDot>
              <DateRange>{card.year}</DateRange>
            </TimelineItem>
          ))}
        </Timeline>
      </TimelineWrapper>
      <Arrow onClick={handleNextClick}>{">"}</Arrow>
    </CarouselContainer>
  );
};

export default Carousel;

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

const Arrow = styled.div`
  cursor: pointer;
  font-size: 2rem;
  user-select: none;
  z-index: 1000;
  padding: 0 20px;
  color: #333;

  &:hover {
    color: #01be96;
  }
`;

const TimelineWrapper = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  width: 100%;
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none; /* For Internet Explorer and Edge */

  &::-webkit-scrollbar {
    display: none; /* For Chrome, Safari, and Opera */
  }
`;

const Timeline = styled.div`
  display: flex;
  transition: transform 0.3s ease;
`;

const TimelineItem = styled(motion.div)`
  display: inline-block;
  width: 150px;
  height: 200px;
  position: relative;
  margin: 20px;
  cursor: pointer;
  text-align: center;
`;

const TimelineDot = styled.div`
  width: 120px;
  height: 120px;
  background: #fff;
  border: 3px solid ${props => props.isSelected ? '#01be96' : '#191923'};
  border-radius: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

const DotImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10%;
  object-fit: cover;
`;

const DateRange = styled.span`
  display: block;
  margin-top: 10px;
  background: black;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid #01be96;
  font-size: 0.9rem;
  text-align: center;
`;
