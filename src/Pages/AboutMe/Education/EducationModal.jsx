import React from "react";
import styled from "styled-components";

const EducationModal = ({ selectedCard, handleCloseModal }) => {
  if (!selectedCard) return null;

  return (
    <ModalOverlay>
      <Modal>
        <CloseButton onClick={handleCloseModal}>×</CloseButton>
        <ImageContainer>
          <img src={selectedCard.avatar} alt="avatar" />
        </ImageContainer>
        <ContentContainer>
          <ModalTitle>{selectedCard.title}</ModalTitle>
          <SchoolYear>
            {selectedCard.school} - {selectedCard.year}
          </SchoolYear>
          <Details>
            <p>{selectedCard.details}</p>
            {selectedCard.Address && (
              <p><strong>Address:</strong> {selectedCard.Address}</p>
            )}
            {selectedCard.grade && (
              <p><strong>Grade:</strong> {selectedCard.grade}</p>
            )}
          </Details>
          <LinksContainer>
            {selectedCard.Website && (
              <Button href={selectedCard.Website} target="_blank" rel="noopener noreferrer">Website</Button>
            )}
            {selectedCard.EECLinks && (
              <Button href={selectedCard.EECLinks} target="_blank" rel="noopener noreferrer">Entry Exam Certificate</Button>
            )}
            {selectedCard.Certification && (
              <Button href={selectedCard.Certification} target="_blank" rel="noopener noreferrer">Certification</Button>
            )}
            {selectedCard.trans && (
              <Button href={selectedCard.trans} target="_blank" rel="noopener noreferrer">Transcripts</Button>
            )}
          </LinksContainer>
        </ContentContainer>
      </Modal>
    </ModalOverlay>
  );
};

export default EducationModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  overflow: visible; /* Allow overflow to be visible */
  position: relative;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px; /* Ensure there's enough space around the modal */

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
  position: absolute;
  top: 15px;
  right: 15px;

  &:hover {
    color: #ff0000;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  top: -50px;
  left: calc(50% - 50px); /* Centers the image */
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 50%;
  border: 3px solid #fff;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1010; /* Ensure the image is above other elements */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContentContainer = styled.div`
  margin-top: 60px; /* Increased margin to ensure it does not overlap with the image */
  width: 100%;
  text-align: center;
`;

const ModalTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  color: #01be96;
  margin: 10px 0;
`;

const SchoolYear = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 10px 0;
`;

const Details = styled.div`
  text-align: left;
  width: 100%;

  p {
    margin: 10px 0;
    color: #333;
  }
`;

const LinksContainer = styled.div`
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
