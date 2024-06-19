import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import WritingData from "../Writings/WritingData";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
 import DeathGame from "../../../Assets/Archive/Writings/DeathGame.webp";
import eykash from "../../../Assets/Archive/Writings/eykash.webp";
import lonely from "../../../Assets/Archive/Writings/lonely.webp";
import lonewarrior from "../../../Assets/Archive/Writings/lonewarrior.webp";



const Writing = ({ searchQuery, sortOrder }) => {
  const { t } = useTranslation();
  const [visibleItems, setVisibleItems] = useState([]);
  const [lastScrollY, setLastScrollY] = useState(0);

  const WritingData = useMemo(() => [
    {
      id: 1,
      image: DeathGame,
      date: '2022',
      age: 45,
      title: t('Instead of Death,Play'),
      summary: t(
        'The story of Instead of Death,Play! tells the story of a strange night in the life of a pious boy named Parsa who encounters the angel of death. Parsa is happily playing Call of Duty MW2, but when the Angel of Death comes to take his soul, he manages to trick the Angel of Death into playing with him. In the meantime, there are funny moments that show how Parsa uses the most clever methods to postpone his death and creates lasting memories for himself and even the angel of death.'
      ),
    },
    {
      id: 2,
      image: eykash,
      date: '2012',
      age: 26,
      title: t('What if...'),
      summary: t(
        'This story is about Hossein, a kind old man who lives in a warm and friendly hut. He shelters a family that is lost in the snow and cold. But the main point of the story is the presence of the ghost of a young soldier who, with his war wounds and worn uniform, guides the family to the hut and watches over them from afar. This story is a combination of memories of war, sacrifice, and the warmth of humanity in the heart of the cold winter.'
      ),
    },
    {
      id: 3,
      image: lonely,
      date: '2005',
      age: 27,
      title: t('Loneliness in the style of delegation'),
      summary: t(
        'The story (Loneliness in the style of delegation) narrates the deep loneliness of a young man named Hamed, who falls into thinking in the evening of a cold and cloudy day, in a corner of a busy and noisy street. Despite the many people passing by, Hamed feels that he is alone and no one is paying attention to him. But with the arrival of a stranger and a religious delegation passing by, a light of hope and faith is lit in his heart. In this story, religion and spirituality take Hamed\'s hand and pull him out of the well of loneliness.'
      ),
    },
    {
      id: 4,
      image: lonewarrior,
      date: '2002',
      age: 15,
      title: t('Lonely Warrior'),
      summary: t(
        'The story of Lonely Warrior tells the story of a child who falls asleep in a mosque and sees himself in the battlefield next to Imam Hussein (a.s.) and his companions. This child helps Imam Hussain (AS) in his dreams and fights bravely against the enemies. Although in reality, the child has fallen into a deep sleep, but in his imaginary world, he engages in a battle full of courage and sacrifice, and finally, when he wakes up, he has a satisfying smile on his face. Combining the elements of courage, faith and dreaming, this story takes the reader to a different and inspiring world.'
      ),
    },
  ], [t]);
  useEffect(() => {
    let filteredData = WritingData.filter(
      (item) =>
        t(item.title).toLowerCase().includes(searchQuery.toLowerCase()) ||
        t(item.summary).toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    if (sortOrder === 'newest') {
      filteredData = filteredData.sort((a, b) => parseInt(b.date) - parseInt(a.date));
    } else if (sortOrder === 'oldest') {
      filteredData = filteredData.sort((a, b) => parseInt(a.date) - parseInt(b.date));
    }
  
    setVisibleItems(filteredData.slice(0, 6));
  }, [searchQuery, sortOrder, t, WritingData]);
  
  const loadMoreItems = useCallback(() => {
    setVisibleItems((prevItems) => [
      ...prevItems,
      ...WritingData.slice(prevItems.length, prevItems.length + 6),
    ]);
  }, [WritingData]);
  
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
            <AnimatePresence>
              {item.expanded ? (
                <motion.div
                  key="expanded"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {t(item.summary)}
                </motion.div>
              ) : (
                <motion.div
                  key="collapsed"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {`${t(item.summary).slice(0, 100)}...`}
                </motion.div>
              )}
            </AnimatePresence>
          </Summary>
          <ButtonContainer>
            {item.expanded && (
              <Button onClick={() => handleWannaReadIt(item.title)}>
                {t('Wanna Read It?')}
              </Button>
            )}
            {item.summary.length > 100 && (
              <ReadMoreButton onClick={() => handleReadMore(index)}>
                {item.expanded ? t('Read Less') : t('Read More')}
              </ReadMoreButton>
            )}
          </ButtonContainer>
        </Info>
      </Card>
    ))}
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
