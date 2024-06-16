import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const animationVariants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.5 } },
  },
};

const getRandomAnimation = () => {
  const animations = ["slideInFromRight", "slideInFromLeft", "slideInFromBottom"];
  return animations[Math.floor(Math.random() * animations.length)];
};

const ContentBox = ({ selectedCard }) => {
  const randomAnimation = getRandomAnimation();

  return (
    <ContentContainer
      as={motion.div}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={animationVariants[randomAnimation]}
    >
      <ProgressBarContainer>
        <ProgressBar />
      </ProgressBarContainer>
      <Profile>
        <ProfileMask>
          <motion.img 
            src={selectedCard.avatar} 
            alt="Profile"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
        </ProfileMask>
      </Profile>
      <ContentDetails
        as={motion.div}
        initial="hidden"
        animate="visible"
        variants={animationVariants.fadeIn}
      >
        <Title>{selectedCard.title}</Title>
        <SchoolYear>{selectedCard.school} - {selectedCard.year}</SchoolYear>
        <Details>
          <p>{selectedCard.details}</p>
          {selectedCard.Address && <p><strong>Address:</strong> {selectedCard.Address}</p>}
          {selectedCard.grade && <p><strong>Grade:</strong> {selectedCard.grade}</p>}
        </Details>
        <LinksContainer
          as={motion.div}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {selectedCard.Website && <Button href={selectedCard.Website} target={selectedCard.Website} rel="noopener noreferrer">Website</Button>}
          {selectedCard.EECLinks && <Button href={selectedCard.EECLinks} target={selectedCard.EECLinks} rel="noopener noreferrer">Entry Exam Certificate</Button>}
          {selectedCard.Certification && <Button href={selectedCard.Certification} target={selectedCard.Certification} rel="noopener noreferrer">Certification</Button>}
          {selectedCard.trans && <Button href={selectedCard.trans} target={selectedCard.trans} rel="noopener noreferrer">Transcripts</Button>}
        </LinksContainer>
      </ContentDetails>
    </ContentContainer>
  );
};

export default ContentBox;

const ContentContainer = styled(motion.div)`
  position: relative;
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
  animation: wave1 3s infinite alternate, wave2 4s infinite alternate, wave3 5s infinite alternate;
`;

const ProgressBarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.2);
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f0ab0c;
  animation: progress 20s linear infinite;
  
  @keyframes progress {
    0% { width: 0; }
    100% { width: 100%; }
  }
`;

const ProfileMask = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 50%;
  border: 3px solid #01be96;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0%;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const ContentDetails = styled(motion.div)`
  text-align: center;
  padding-top: 50px; /* Add padding to account for the profile image */
`;

const Title = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
    color:#fff;

   margin: 10px 0;
`;

const SchoolYear = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 10px 0;
      color:#01be96;

`;

const Details = styled.div`
  text-align: left;
  width: 100%;
    

  p {
    margin: 10px 0;
color:#fff;  }
`;

const LinksContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const Button = styled.a`
  background-color: #01be96;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  margin: 5px 0;
  transition: background-color 0.3s;

  &:hover {
    background-color: #019c7a;
  }
`;

const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
