import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import PhotoData from '../Photoes/PhotoData';

const Photos = ({ searchQuery, sortOrder }) => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let filteredData = PhotoData.filter(item =>
      (item.title?.toLowerCase().includes(searchQuery.toLowerCase()) || 
       item.description?.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    if (sortOrder === 'newest') {
      filteredData = filteredData.sort((a, b) => parseInt(b.date) - parseInt(a.date));
    } else if (sortOrder === 'oldest') {
      filteredData = filteredData.sort((a, b) => parseInt(a.date) - parseInt(b.date));
    }

    setVisibleItems(filteredData.slice(0, 6));
  }, [searchQuery, sortOrder]);

  const loadMoreItems = useCallback(() => {
    setVisibleItems((prevItems) => [
      ...prevItems,
      ...PhotoData.slice(prevItems.length, prevItems.length + 6),
    ]);
  }, []);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        loadMoreItems();
      }
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY, loadMoreItems]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

 
  return (
    
    <PhotoContainer>
      <AnimatePresence>
        {visibleItems.map((item, index) => (
          <PhotoCard
            key={`${item.id}-${index}`}
            className={`size${index % 6}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Photo src={item.image} alt={item.title} />
            <YearBadge>{item.date}</YearBadge>
            <Overlay>
              <PhotoInfo>
                <Title>{item.title}</Title>
                <Description>{item.description}</Description>
                <Date>{item.date}</Date>
              </PhotoInfo>
            </Overlay>
          </PhotoCard>
        ))}
      </AnimatePresence>
    </PhotoContainer>
  );
};

export default Photos;

const PhotoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
  padding: 10px;

  .size0 {
    grid-row: span 2;
    grid-column: span 2;
  }

  .size1, .size2, .size3, .size4 {
    grid-row: span 1;
    grid-column: span 1;
  }

  .size5 {
    grid-row: span 2;
    grid-column: span 1;
  }
`;

const PhotoCard = styled(motion.div)`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    z-index: 2;
      animation: wave1 3s infinite alternate;

  }
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const YearBadge = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.8rem;
  z-index: 3;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s;

  ${PhotoCard}:hover & {
    opacity: 1;
      animation: wave1 3s infinite alternate;

  }
`;

const PhotoInfo = styled.div`
  text-align: center;
`;

const Title = styled.h3`
  margin: 0;
`;

const Description = styled.p`
  margin: 5px 0;
`;

const Date = styled.span`
  font-size: 0.8rem;
`;
