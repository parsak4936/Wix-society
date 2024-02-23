import React, { useEffect, useRef, useState, useCallback } from "react";

const AudioPlayer = ({ src, volume }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = useCallback(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.volume = volume;

      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Error playing audio:", error);
          });
      }
    }
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;

    const handleBeforeUnload = () => {
      if (isPlaying) {
        audio.currentTime = 0;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    const isFirstVisit = sessionStorage.getItem("isFirstVisit") === null;
    const isReload = performance.navigation.type === 1;

    if (isFirstVisit || isReload) {
      playAudio();
      sessionStorage.setItem("isFirstVisit", "false");
    }

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isPlaying, playAudio]);

  const handleButtonClick = () => {
    if (!isPlaying) {
      playAudio();
    }
  };

  return (
    <>
      <button
        onClick={handleButtonClick}
        style={{ position: "absolute", left: "-9999px" }}
      >
        Play Audio
      </button>
      <audio ref={audioRef} style={{ display: "none" }} controls>
        <source src={src} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
};

export default AudioPlayer;
