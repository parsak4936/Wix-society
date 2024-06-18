import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WritingData from "../Writings/WritingData";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Writing = ({ searchQuery, sortOrder }) => {
  const { t } = useTranslation();
  const [visibleItems, setVisibleItems] = useState([]);
  const [lastScrollY, setLastScrollY] = useState(0);
  const writingData = WritingData();
  useEffect(() => {
    let filteredData = writingData.filter(
      (item) =>
        t(item.title).toLowerCase().includes(searchQuery.toLowerCase()) ||
        t(item.summary).toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortOrder === "newest") {
      filteredData = filteredData.sort(
        (a, b) => parseInt(b.date) - parseInt(a.date)
      );
    } else if (sortOrder === "oldest") {
      filteredData = filteredData.sort(
        (a, b) => parseInt(a.date) - parseInt(b.date)
      );
    }

    setVisibleItems(filteredData.slice(0, 6));
  }, [searchQuery, sortOrder, t,writingData]);

  const loadMoreItems = useCallback(() => {
    setVisibleItems((prevItems) => [
      ...prevItems,
      ...writingData.slice(prevItems.length, prevItems.length + 6),
    ]);
  }, [writingData]);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        loadMoreItems();
      }
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY, loadMoreItems]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleReadMore = (index) => {
    setVisibleItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, expanded: !item.expanded } : item
      )
    );
  };

  const handleWannaReadIt = (title) => {
    alert(t(`Please email me if you want to read the full story of "${title}"`));
  };

  return (
    <WritingContainer>
      <AnimatePresence>
        {visibleItems.map((item, index) => (
          <Card
            key={item.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ImageContainer>
              <Image src={item.image} alt={t(item.title)} />
              <Tag>{item.date}</Tag>
            </ImageContainer>
            <Info>
              <Title>{t(item.title)}</Title>
              <Summary>
                {item.expanded ? t(item.summary) : `${t(item.summary).slice(0, 100)}...`}
              </Summary>
              <ButtonContainer>
                {item.expanded && (
                  <Button onClick={() => handleWannaReadIt(item.title)}>
                    {t("Wanna Read It?")}
                  </Button>
                )}
                {item.summary.length > 100 && (
                  <ReadMoreButton onClick={() => handleReadMore(index)}>
                    {item.expanded ? t("Read Less") : t("Read More")}
                  </ReadMoreButton>
                )}
              </ButtonContainer>
            </Info>
          </Card>
        ))}
      </AnimatePresence>
    </WritingContainer>
  );
};

export default Writing;

const WritingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center; /* تغییر برای وسط‌چین کردن کارت‌ها */
  padding: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled(motion.div)`
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  flex: 1 1 calc(33% - 40px);
  padding: 0;
      animation: wave44 3s infinite alternate;

  @media (max-width: 768px) {
    max-width: 90%;
    flex: none;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  padding: 10px; /* فاصله از اطراف */
  box-sizing: border-box;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px; /* بوردر ریدیوس */
`;

const Info = styled.div`
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Tag = styled.span`
  background: #01be96;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.8rem;
  position: absolute;
  bottom: 10px; /* تنظیم برای نصف داخل و نصف بیرون تصویر */
  left: 15px;
  transform: translateY(50%);
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-weight: bold;
  color: rgb(45, 45, 58);
`;

const Summary = styled.p`
  font-size: 1rem;
  color:rgb(45, 45, 58);
;
  margin-bottom: 20px;
  text-align: justify;
`;

const ButtonContainer = styled.div`
  text-align: center; /* وسط‌چین کردن دکمه‌ها */
`;

const ReadMoreButton = styled.button`
  background: #01be96;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  display: block;
  margin: 10px auto;

  &:hover {
    background: #019c7a;
       

  }
`;

const Button = styled.button`
  background: none;
  color: rgb(45, 45, 58);
  padding: 10px 20px;
  border: #fff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s;
  margin: 10px auto;
    animation: wave44 3s infinite alternate;

  &:hover {
    background: #01be96;
    color:white;
     animation: wave1 3s infinite alternate, wave3 5s infinite alternate;
  }
`;
