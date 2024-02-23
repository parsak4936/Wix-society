import React from "react";

const PDFReader = ({ pdfType, fileName }) => {
  const pdfPath = `/PDFReader/${pdfType}-${fileName}.pdf`;

  return (
    <div className="aboutme-container">
      <Header />
      <div>
        <div className="cyberpunk-elements-left"></div>
        <div className="cyberpunk-elements"></div>
        <div className="cyberpunk-elements-btn"></div>
        <h2>PDF Reader</h2>
        <embed
          src={pdfPath}
          type="application/pdf"
          width="100%"
          height="600px"
        />
      </div>
    </div>
  );
};

export default PDFReader;
