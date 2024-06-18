import React, { useState, useEffect, useCallback, useMemo } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
  import { useTranslation } from "react-i18next";
 

 

 const images = [];
 
 for (let i = 1; i <= 43; i++) {
  try {
    images.push(require(`../../../Assets/Archive/Photoes/${i}.jpg`));
  } catch (e) {
    console.error(`Could not load image: ../../../Assets/Archive/Photoes/${i}.jpg`);
    images.push(null); // push null if image is not found
  }
}

 
const Photos = ({ searchQuery, sortOrder }) => {
  const { t } = useTranslation();
  const [visibleItems, setVisibleItems] = useState([]);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageInfo, setSelectedImageInfo] = useState({});
  const [loadedImages, setLoadedImages] = useState({});

  const PhotoData = useMemo(() => [
  {
    id: 1,
    image: images[0],
    date: "2022",
    age: 45,
    title: t("Zanjan Camping"),
    summary: t("Last day of university in Zanjan, Iran"),
  },
  {
    id: 2,
    image: images[1],
    date: "2002",
    age: 15,
    title: t("Bros Before Hoes"),
    summary: t("Daily hangout with the boys and practicing photography"),
  },
  {
    id: 3,
    image: images[2],
    date: "2005",
    age: 27,
    title: t("Sky on My Last Birthday in Iran"),
    summary: t("My 24th birthday was the last one I had with the boys"),
  },
  {
    id: 4,
    image: images[3],
    date: "2002",
    age: 15,
    title: t("A Bit of Beauty"),
    summary: t("Mr. Nima is a true gentleman"),
  },
  {
    id: 5,
    image: images[4],
    date: "1999",
    age: 25,
    title: t("Ocean of Clouds #1"),
    summary: t("Random adventure in the middle of nowhere around Qazvin"),
  },
  {
    id: 6,
    image: images[5],
    date: "2005",
    age: 25,
    title: t("Ocean of Clouds #2"),
    summary: t("Random adventure in the middle of nowhere around Qazvin"),
  },
  {
    id: 7,
    image: images[6],
    date: "2006",
    age: 25,
    title: t("Ocean of Clouds #3"),
    summary: t("Random adventure in the middle of nowhere around Qazvin"),
  },
  {
    id: 8,
    image: images[7],
    date: "2005",
    age: 25,
    title: t("Anzali Ocean - Iran"),
    summary: t("Random adventure in the middle of nowhere around Qazvin"),
  },
  {
    id: 9,
    image: images[8],
    date: "2005",
    age: 25,
    title: t("Ocean of Clouds #4"),
    summary: t("Random adventure in the middle of nowhere around Qazvin"),
  },
  {
    id: 10,
    image: images[9],
    date: "2005",
    age: 25,
    title: t("A Bit of Me"),
    summary: t("Mr. Nima was trying to mimic my photography style"),
  },
  {
    id: 11,
    image: images[10],
    date: "2005",
    age: 25,
    title: t("Ocean of Clouds #5"),
    summary: t("An adventure in the wild"),
  },
  {
    id: 12,
    image: images[11],
    date: "2023",
    age: 25,
    title: t("Messina Food Festival 2023"),
    summary: t("Best food I have ever tried"),
  },
  {
    id: 13,
    image: images[12],
    date: "2023",
    age: 25,
    title: t("Sadegh Portrait"),
    summary: t("First day of moving to Messina"),
  },
  {
    id: 14,
    image: images[13],
    date: "2023",
    age: 25,
    title: t("Mysterious Church"),
    summary: t("Hiking led to a famous church in the north of Messina"),
  },
  {
    id: 15,
    image: images[14],
    date: "2023",
    age: 25,
    title: t("Christmas 2023"),
    summary: t("First experience of Christmas, season of love and new decorations"),
  },
  {
    id: 16,
    image: images[15],
    date: "2023",
    age: 25,
    title: t("Cyberpunk IRL"),
    summary: t("Bike exhibition in Messina, 2023"),
  },
  {
    id: 17,
    image: images[16],
    date: "2023",
    age: 25,
    title: t("Poor in Look - Rich in Experience"),
    summary: t("Driver was old and poor, but kind and famous"),
  },
  {
    id: 18,
    image: images[17],
    date: "2023",
    age: 25,
    title: t("Cozy House"),
    summary: t("Helping Sia move to a new place, saw this lovely house"),
  },
  {
    id: 19,
    image: images[18],
    date: "2023",
    age: 25,
    title: t("Papardo in Anime #1"),
    summary: t("Papardo showing me some anime vibes"),
  },
  {
    id: 20,
    image: images[19],
    date: "2023",
    age: 25,
    title: t("Papardo in Anime #2"),
    summary: t("Papardo showing me some anime vibes"),
  },
  {
    id: 21,
    image: images[20],
    date: "2023",
    age: 25,
    title: t("Mana - Daughter of Messina"),
    summary: t("Adventuring new places with my friend Mana, Christmas 2023"),
  },
  {
    id: 22,
    image: images[21],
    date: "2023",
    age: 25,
    title: t("Kind Ghost"),
    summary: t("A bus decorated for Christmas vibes"),
  },
  {
    id: 23,
    image: images[22],
    date: "2023",
    age: 25,
    title: t("My Christmas Gift 2023"),
    summary: t("A bus decorated for Christmas vibes"),
  },
  {
    id: 24,
    image: images[23],
    date: "2023",
    age: 25,
    title: t("Redbull Secret Study Room #1"),
    summary: t("The day after a breakup, time for new adventures and challenging my comfort zone"),
  },
  {
    id: 25,
    image: images[24],
    date: "2023",
    age: 25,
    title: t("Redbull Secret Study Room #2"),
    summary: t("Books really work, hung out with Maviva, a famous Italian influencer"),
  },
  {
    id: 26,
    image: images[25],
    date: "2023",
    age: 25,
    title: t("Wall of Memories"),
    summary: t("This image was an achievement for me, I won - a day with a famous guy, as Mr. Nobody"),
  },
  {
    id: 27,
    image: images[26],
    date: "2023",
    age: 25,
    title: t("Dreams - AI Generated"),
    summary: t("Wanderer in the outland, daydreaming of the apocalypse"),
  },
  {
    id: 28,
    image: images[27],
    date: "2023",
    age: 25,
    title: t("Hamid in Fallout - AI Generated"),
    summary: t("Cyberpunk + Hamid + my imagination + GPT = masterpiece"),
  },
  {
    id: 29,
    image: images[28],
    date: "2023",
    age: 25,
    title: t("Solaris in Wonderland - AI Generated"),
    summary: t("Just playing with my favorite stream photos"),
  },
  {
    id: 30,
    image: images[29],
    date: "2023",
    age: 25,
    title: t("Mahmood the Door Breaker"),
    summary: t("He will be mad at me, but that night was the beginning of everything new for all of us"),
  },
  {
    id: 31,
    image: images[30],
    date: "2023",
    age: 25,
    title: t("Hamid's Moment"),
    summary: t("First image someone took of me - Hamid"),
  },
  {
    id: 32,
    image: images[31],
    date: "2023",
    age: 25,
    title: t("Lost in Thoughts"),
    summary: t("My father, thinking of how he should get rid of us :)"),
  },
  {
    id: 33,
    image: images[32],
    date: "2023",
    age: 25,
    title: t("My First Love - I Miss You - AI Generated"),
    summary: t("Image generated by my diary on the first day of my breakup"),
  },
  {
    id: 34,
    image: images[33],
    date: "2017",
    age: 25,
    title: t("ZNU"),
    summary: t("Beginning of a new adventure in Zanjan"),
  },
  {
    id: 35,
    image: images[34],
    date: "2023",
    age: 25,
    title: t("My Poor Little Self - AI Generated"),
    summary: t("Image of my loneliness in Messina, created from my diary by AI"),
  },
  {
    id: 36,
    image: images[35],
    date: "2023",
    age: 25,
    title: t("Two Lovers"),
    summary: t("Do you see the lovers? Those who are trying to get to each other"),
  },
  {
    id: 37,
    image: images[36],
    date: "2023",
    age: 25,
    title: t("God is Love"),
    summary: t("I believe in every god, the one entity who owns us"),
  },
  {
    id: 38,
    image: images[37],
    date: "2023",
    age: 25,
    title: t("Tell Her"),
    summary: t("Capture the moments that they will forget"),
  },
  {
    id: 39,
    image: images[38],
    date: "2023",
    age: 25,
    title: t("ZNU Water"),
    summary: t(""),
  },
  {
    id: 40,
    image: images[39],
    date: "2023",
    age: 25,
    title: t("Parham"),
    summary: t("My best companion in ZNU till the 3rd year"),
  },
  {
    id: 41,
    image: images[40],
    date: "2023",
    age: 25,
    title: t("Annunziata Photography #1"),
    summary: t("Additia's birthday was the reason I was there, one of the best memories of Messina"),
  },
  {
    id: 42,
    image: images[41],
    date: "2023",
    age: 25,
    title: t("Annunziata Photography #2"),
    summary: t("Additia's birthday was the reason I was there, one of the best memories of Messina"),
  },
  {
    id: 43,
    image: images[42],
    date: "2023",
    age: 25,
    title: t("A Bit of Me Before Disaster"),
    summary: t("Sometimes I feel pity for my old self, for the pain he went through"),
  },
], [t]);
useEffect(() => {
  let filteredData = PhotoData.filter(
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
}, [searchQuery, sortOrder, t, PhotoData]);

const loadMoreItems = useCallback(() => {
  setVisibleItems((prevItems) => [
    ...prevItems,
    ...PhotoData.slice(prevItems.length, prevItems.length + 6),
  ]);
}, [PhotoData]);

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

const handleImageClick = (image, info) => {
  setSelectedImage(image);
  setSelectedImageInfo(info);
};

const closeModal = () => {
  setSelectedImage(null);
  setSelectedImageInfo({});
};

const handleBackdropClick = (e) => {
  if (e.target === e.currentTarget) {
    closeModal();
  }
};

const handleImageLoad = (id) => {
  setLoadedImages(prevState => ({ ...prevState, [id]: true }));
};


  return (
    <div>
      <PhotoContainer>
        <AnimatePresence>
          {visibleItems.map((item, index) => (
            <PhotoCard
              key={`${item.id}-${index}`}
              className={`size${index % 100}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleImageClick(item.image, { title: t(item.title), summary: t(item.summary), date: item.date })}
            >
              {!loadedImages[item.id] && <ImagePlaceholder />}
              <Photo
                src={item.image}
                alt={t(item.title)}
                onLoad={() => handleImageLoad(item.id)}
                loaded={loadedImages[item.id]}
              />
              <YearBadge>{item.date}</YearBadge>
              <Overlay>
                <PhotoInfo>
                  <Title>{t(item.title)}</Title>
                  <Description>{t(item.summary)}</Description>
                  <Date>{item.date}</Date>
                </PhotoInfo>
              </Overlay>
            </PhotoCard>
          ))}
        </AnimatePresence>
      </PhotoContainer>

      <AnimatePresence>
        {selectedImage && (
          <Backdrop
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleBackdropClick}

          >
            <ModalContent
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <CloseButton onClick={closeModal}>
                <FaTimes />
              </CloseButton>
              <ModalImage src={selectedImage} alt="Selected" />

               <PhotoDetails>
                <Title>{selectedImageInfo.title}</Title>
                <Description>{selectedImageInfo.summary}</Description>
               </PhotoDetails>
            </ModalContent>
          </Backdrop>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Photos;



const loadingAnimation = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: #333;
  background-image: linear-gradient(90deg, #333 0px, #444 40px, #333 80px);
  background-size: 200% 100%;
  animation: ${loadingAnimation} 1.5s infinite;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

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
  display: ${props => (props.loaded ? 'block' : 'none')};
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

const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 10000; /* Increase z-index to be higher than other elements */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
`;

const ModalContent = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 80vw;
  max-height: 80vh;
  z-index: 10001; /* Ensure the modal content is above the backdrop */
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 45px; /* Add margin-top for laptop screens */

  @media (max-width: 768px) {
    max-width: 90vw; /* Increase size for mobile */
    max-height: 90vh; /* Increase size for mobile */
    margin-top: 20px; /* Adjust margin for mobile */
  }
`;


const PhotoDetails = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 10px;
  text-align: center;
  position: absolute;
  bottom: 0;

  @media (max-width: 768px) {
    position: static; /* Make static for mobile */
    order: 2; /* Ensure it appears below the image */
  }
`;


const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: black; /* Background color of the circle */
  border: none;
  color: white; /* Color of the cross */
  width: 30px; /* Width of the circle */
  height: 30px; /* Height of the circle */
  border-radius: 50%; /* Make it a circle */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem; /* Size of the cross */
  z-index: 10002; /* Ensure the button is above the modal content */
`;

const ModalImage = styled.img`
  width: auto;
  height: auto;
  max-width: 80vw;
  max-height: 80vh;
  object-fit: contain;

  @media (max-width: 768px) {
    max-width: 90vw; /* Increase size for mobile */
    max-height: 50vh; /* Adjust height for mobile */
  }
`;
