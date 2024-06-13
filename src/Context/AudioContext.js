// AudioContext.js
import React, { createContext, useState, useRef, useEffect } from 'react';

const AudioContext = createContext();

const AudioProvider = ({ children }) => {
  const audioRef = useRef(null);
  const canvasRef = useRef(null);
  const [status, setStatus] = useState('');
  const [audioContext, setAudioContext] = useState(null);
  const [sourceNode, setSourceNode] = useState(null);

  useEffect(() => {
    if (status === 'active' && audioContext && !sourceNode) {
      const newSourceNode = audioContext.createMediaElementSource(audioRef.current);
      setSourceNode(newSourceNode);
    }
  }, [status, audioContext, sourceNode]);

  useEffect(() => {
    if (sourceNode) {
      sourceNode.connect(audioContext.destination);
      return () => {
        sourceNode.disconnect();
        setSourceNode(null);
      };
    }
  }, [sourceNode, audioContext]);

  const handleAudioStart = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setStatus('active');
      if (!audioContext) {
        const newAudioContext = new (window.AudioContext || window.webkitAudioContext)();
        setAudioContext(newAudioContext);
      }
    }
  };

  const handleAudioPause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setStatus('paused');
    }
  };

  const handleAudioStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setStatus('stopped');
    }
  };

  return (
    <AudioContext.Provider value={{ audioRef, canvasRef, status, setStatus, handleAudioStart, handleAudioPause, handleAudioStop, audioContext, sourceNode }}>
      {children}
    </AudioContext.Provider>
  );
};

export { AudioProvider, AudioContext };
