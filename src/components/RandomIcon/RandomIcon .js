import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./RandomIcon.css"; // برای استایل‌های سفارشی
import react from "../../Assets/Icons/React.png";
import book from "../../Assets/Icons/book.png";
import animals from "../../Assets/Icons/wild-animals.png";
import ukraine from "../../Assets/Icons/ukraine.png";
import turkey from "../../Assets/Icons/turkey.png";
import russia from "../../Assets/Icons/russia.png";
import playlist from "../../Assets/Icons/playlist.png";
import science from "../../Assets/Icons/science-report.png";
import earth from "../../Assets/Icons/planet-earth.png";
import italy from "../../Assets/Icons/italy.png";
import iran from "../../Assets/Icons/iran.png";
import hungary from "../../Assets/Icons/hungary.png";
import camera from "../../Assets/Icons/camera.png";
import circle from "../../Assets/Icons/circle.png";
import code from "../../Assets/Icons/code.png";
import writing from "../../Assets/Icons/copy-writing.png";
import destination from "../../Assets/Icons/destination.png";
import family from "../../Assets/Icons/family.png";
import guitar from "../../Assets/Icons/guitar.png";

const icons = [
  <img
    src={russia}
    alt="custom icon 1"
    style={{ width: "50px", height: "50px" }}
  />,
  <img
    src={react}
    alt="custom icon 1"
    style={{ width: "50px", height: "50px" }}
  />,
  <img
    src={guitar}
    alt="custom icon 1"
    style={{ width: "50px", height: "50px" }}
  />,
  <img
    src={family}
    alt="custom icon 1"
    style={{ width: "50px", height: "50px" }}
  />,
  <img
    src={destination}
    alt="custom icon 1"
    style={{ width: "50px", height: "50px" }}
  />,
  <img
    src={writing}
    alt="custom icon 1"
    style={{ width: "50px", height: "50px" }}
  />,
  <img
    src={code}
    alt="custom icon 1"
    style={{ width: "50px", height: "50px" }}
  />,
  <img
    src={circle}
    alt="custom icon 1"
    style={{ width: "50px", height: "50px" }}
  />,
  <img
    src={camera}
    alt="custom icon 1"
    style={{ width: "50px", height: "50px" }}
  />,
  <img
    src={hungary}
    alt="custom icon 1"
    style={{ width: "50px", height: "50px" }}
  />,
  <img
    src={iran}
    alt="custom icon 1"
    style={{ width: "50px", height: "50px" }}
  />,
  <img
    src={italy}
    alt="custom icon 1"
    style={{ width: "50px", height: "50px" }}
  />,
  <img
    src={science}
    alt="custom icon 1"
    style={{ width: "50px", height: "50px" }}
  />,
  <img
    src={earth}
    alt="custom icon 1"
    style={{ width: "50px", height: "50px" }}
  />,
  <img
    src={playlist}
    alt="custom icon 1"
    style={{ width: "50px", height: "50px" }}
  />,
  <img
    src={turkey}
    alt="custom icon 1"
    style={{ width: "50px", height: "50px" }}
  />,
  <img
    src={ukraine}
    alt="custom icon 1"
    style={{ width: "50px", height: "50px" }}
  />,
  <img
    src={animals}
    alt="custom icon 1"
    style={{ width: "50px", height: "50px" }}
  />,
  <img
    src={book}
    alt="custom icon 1"
    style={{ width: "50px", height: "50px" }}
  />,
];

const RandomIcon = () => {
  const [iconsList, setIconsList] = useState([]);

  useEffect(() => {
    const handleClick = (event) => {
      const randomIcon = icons[Math.floor(Math.random() * icons.length)];
      const newIcon = {
        id: Date.now(), // برای یکتایی آیکون‌ها
        icon: randomIcon,
        position: { top: event.clientY, left: event.clientX },
      };

      setIconsList([...iconsList, newIcon]);

      // بازنشانی آیکون بعد از مدتی
      setTimeout(() => {
        setIconsList((current) =>
          current.filter((item) => item.id !== newIcon.id)
        );
      }, 100);
    };

    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [iconsList]);

  const variants = {
    initial: { y: 0, opacity: 1 },
    animate: {
      y: -50,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      y: 500,
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeIn",
      },
    },
  };

  return (
    <div>
      <AnimatePresence>
        {iconsList.map(({ id, icon, position }) => (
          <motion.div
            key={id}
            className="icon"
            style={{ top: position.top, left: position.left }}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
          >
            {icon}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default RandomIcon;
