import React, { useState, useEffect, useCallback, useMemo } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
  

 

 const images = [];
 
 for (let i = 1; i <= 20; i++) {
  try {
    images.push(require(`../../../Assets/Archive/Designs/${i}.jpg`));
  } catch (e) {
    console.error(`Could not load image: ../../../Assets/Archive/Designs/${i}.jpg`);
    images.push(null); // push null if image is not found
  }
}

 
const Design = ({ sortOrder }) => {
   const [visibleItems, setVisibleItems] = useState([]);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
   const [loadedImages, setLoadedImages] = useState({});

  const DesignData = useMemo(() => [
    {
      id: 1,
      image: images[0],
      date: "2023",
     },
    {
      id: 2,
      image: images[1],
       date: "2018",
    },
    {
      id: 3,
      image: images[2],
      date: "2023",
     },
    {
      id: 4,
      image: images[3],
      date: "2018",
     },
    {
      id: 5,
      image: images[4],
      date: "2021",
     },
    {
      id: 6,
      image: images[5],
      date: "2023",
     },
    {
      id: 7,
      image: images[6],
      date: "2023",
     },
    {
      id: 8,
      image: images[7],
      date: "2023",
     },
    {
      id: 9,
      image: images[8],
      date: "2023",
     },
    {
      id: 10,
      image: images[9],
      date: "2023",
     },
    {
      id: 11,
      image: images[10],
      date: "2023",
     },
    {
      id: 12,
      image: images[11],
      date: "2023",
      
    },
    {
      id: 13,
      image: images[12],
      date: "2020",
      
    },
    {
      id: 14,
      image: images[13],
      date: "2017",
       
    },
    {
      id: 15,
      image: images[14],
      date: "2017",
       
    },
    {
      id: 16,
      image: images[15],
      date: "2023",
     
    },
    {
      id: 17,
      image: images[16],
      date: "2023",
    
    },
    {
      id: 18,
      image: images[17],
      date: "2023",
      
    },
    {
      id: 19,
      image: images[18],
      date: "2021",
       
    },
    {
      id: 20,
      image: images[19],
      date: "2021",
      
    },
  ], []);
  
const filteredData = useMemo(() => {
  let data = DesignData 

  if (sortOrder === 'newest') {
    data = data.sort((a, b) => parseInt(b.date) - parseInt(a.date));
  } else if (sortOrder === 'oldest') {
    data = data.sort((a, b) => parseInt(a.date) - parseInt(b.date));
  }

  return data;
}, [ sortOrder, DesignData]);

useEffect(() => {
  setVisibleItems(filteredData.slice(0, 6));
}, [filteredData]);

const loadMoreItems = useCallback(() => {
  setVisibleItems((prevItems) => {
    const nextItems = DesignData.slice(prevItems.length, prevItems.length + 6);
    const uniqueItems = nextItems.filter(item => !prevItems.some(prevItem => prevItem.id === item.id));
    return [...prevItems, ...uniqueItems];
  });
}, [DesignData]);

const handleScroll = useCallback(() => {
  const currentScrollY = window.scrollY;
  console.log("ScrollY:", currentScrollY, "lastScrollY:", lastScrollY);
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
    console.log("Loading more items...");
    loadMoreItems();
  }
  setLastScrollY(currentScrollY);
}, [lastScrollY, loadMoreItems]);

useEffect(() => {
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [handleScroll]);

const handleImageClick = (image) => {
  setSelectedImage(image);
 };

const closeModal = () => {
  setSelectedImage(null);
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
              onClick={() => handleImageClick(item.image, { date: item.date })}
            >
              {!loadedImages[item.id] && <ImagePlaceholder />}
              <Photo
                src={item.image}
               
                onLoad={() => handleImageLoad(item.id)}
                loaded={loadedImages[item.id]}
              />
              <YearBadge>{item.date}</YearBadge>
              <Overlay>
                <PhotoInfo>
                 
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

              
            </ModalContent>
          </Backdrop>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Design;



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
  loading: lazy;
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
 