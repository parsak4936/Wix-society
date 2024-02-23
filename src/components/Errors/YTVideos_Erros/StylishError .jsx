// StylishError.js

import React from "react";
import "./StylishError.css"; // Import the CSS file for styling

const StylishError = ({ message }) => {
  return (
    <div className="stylish-error-container">
      <div className="error-icon">&#9888;</div>
      <div className="error-message">{message}</div>
    </div>
  );
};

export default StylishError;
