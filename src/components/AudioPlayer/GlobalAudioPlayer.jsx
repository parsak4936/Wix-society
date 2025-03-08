import React, { useContext, useEffect, useRef, useState } from 'react';
import { useScroll, motion } from 'framer-motion';
import { AudioContext } from '../../Context/AudioContext';
import bgMusic from './BGMusix.mp3';
import './GlobalAudioPlayer.css';
import { FaPlay, FaPause, FaStop } from 'react-icons/fa'; // وارد کردن آیکون‌ها

const GlobalAudioPlayer = () => {
  const { scrollYProgress } = useScroll();
  const { audioRef, canvasRef, status, handleAudioStart, handleAudioPause, handleAudioStop, audioContext, sourceNode } = useContext(AudioContext);
  const lastDataArrayRef = useRef(null);
  const [volume, setVolume] = useState(0.4);
  const animationFrameId = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); // وضعیت پخش

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume, audioRef]);

  useEffect(() => {
    if (status === 'active' && sourceNode && canvasRef.current && audioRef.current) {
      const analyser = audioContext.createAnalyser();
      sourceNode.connect(analyser);
      analyser.connect(audioContext.destination);
      analyser.fftSize = 2048;

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      const canvasCtx = canvasRef.current.getContext('2d');
      const WIDTH = canvasRef.current.width;
      const HEIGHT = canvasRef.current.height;

      const draw = () => {
        animationFrameId.current = requestAnimationFrame(draw);
        if (status === 'active') {
          analyser.getByteTimeDomainData(dataArray);
          lastDataArrayRef.current = dataArray.slice();
        } else if (lastDataArrayRef.current) {
          dataArray.set(lastDataArrayRef.current);
        }

        canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

        canvasCtx.lineWidth = 2;
        canvasCtx.strokeStyle = 'rgb(1, 190, 150)';
        canvasCtx.beginPath();

        drawNormalVisualizer(canvasCtx, dataArray, WIDTH, HEIGHT);

        canvasCtx.stroke();
      };

      draw();

      return () => cancelAnimationFrame(animationFrameId.current);
    }
  }, [status, sourceNode, audioContext, canvasRef, audioRef]);

  const drawNormalVisualizer = (canvasCtx, dataArray, WIDTH, HEIGHT) => {
    const sliceWidth = WIDTH * 1.0 / dataArray.length;
    let x = 0;

    for (let i = 0; i < dataArray.length; i++) {
      const v = dataArray[i] / 128.0;
      const y = (v * HEIGHT) / 2;

      if (i === 0) {
        canvasCtx.moveTo(x, y);
      } else {
        canvasCtx.lineTo(x, y);
      }

      x += sliceWidth;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: '100vh' },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 50,
        delay: 0.5,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { delay: 1, duration: 0.5 } },
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      handleAudioPause();
    } else {
      handleAudioStart();
    }
    setIsPlaying(!isPlaying);
  };

  const handleStop = () => {
    handleAudioStop();
    setIsPlaying(false);
  };

  return (
    <>
      <motion.div
        className="scroll-progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <motion.div
        className="audio-player-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <audio ref={audioRef} src={bgMusic} loop onPlay={() => console.log('Audio playing')} />
        <div className="audio-controls">
          <motion.button
            onClick={handlePlayPause}
            className="audio-control-button"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </motion.button>
          <motion.button
            onClick={handleStop}
            className="audio-control-button"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            aria-label="Stop audio" 
          >
            <FaStop />
          </motion.button>
          <motion.input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            className="volume-slider"
            whileHover={{ scale: 1.1 }}
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          />
        </div>
      </motion.div>
    </>
  );
};

export default GlobalAudioPlayer;
