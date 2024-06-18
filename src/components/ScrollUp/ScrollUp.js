import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollUp.css";
import { motion } from "framer-motion";

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
    <motion.div
      className="scroll-up"
      animate={{ opacity: showScroll ? 1 : 0, y: showScroll ? 0 : 50 }}
      transition={{ duration: 0.5 }}
      onClick={scrollTop}
    >
      <FaArrowUp />
    </motion.div>
  );
};

export default ScrollUp;
