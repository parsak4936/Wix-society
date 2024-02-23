import React from "react";
// import { useHistory } from 'react-router-dom';
import "./PdfCard.css";
const PdfCard = ({ title, description, year, writers, image, fileName }) => {
  // const history = useHistory();

  const handleLanguageClick = (language) => {
    // Navigate to the PDFReader component with the selected language and file name
    // history.push(`/pdf-reader/${language}/${fileName}`);
  };

  return (
    <div className="media-gallery">
      <div className="media-item">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{year}</p>
        <p>{writers}</p>
        <button onClick={() => handleLanguageClick("english")}>
          Open English PDF
        </button>
        <button onClick={() => handleLanguageClick("persian")}>
          Open Persian PDF
        </button>
      </div>
    </div>
  );
};

export default PdfCard;
