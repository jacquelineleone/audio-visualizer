import React, { createContext, useState, useRef, useContext } from "react";
import * as THREE from "three";

const AudioContext = createContext();

export const useAudio = () => useContext(AudioContext);

export const AudioProvider = ({ children }) => {
  const [audioAnalyser, setAudioAnalyser] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSound, setIsSound] = useState(false);

  const audioRef = useRef(new THREE.Audio(new THREE.AudioListener()));

  const handleAudioLoad = (buffer) => {
    const sound = audioRef.current;
    sound.setBuffer(buffer);
    sound.play();
    setIsPlaying(true);
    setIsSound(true);

    const analyser = new THREE.AudioAnalyser(sound, 64);
    setAudioAnalyser(analyser);
  };

  const toggleAudio = () => {
    if (audioRef.current.isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <AudioContext.Provider
      value={{
        audioAnalyser,
        handleAudioLoad,
        toggleAudio,
        isPlaying,
        isSound,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};
