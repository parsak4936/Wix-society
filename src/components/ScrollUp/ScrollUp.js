import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollUp.css";

const ScrollUp = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 200) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 200) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);

    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`scroll-up ${showScroll ? "show" : ""}`}
      onClick={scrollTop}
    >
      <FaArrowUp />
    </div>
  );
};

export default ScrollUp;
