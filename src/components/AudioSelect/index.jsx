import * as THREE from "three";
import { useAudio } from "../../context/AudioContext";
import styles from "./style.module.scss";

import play from "../../assets/icons/play.svg";
import pause from "../../assets/icons/pause.svg";

export const AudioSelect = () => {
  const { handleAudioLoad, toggleAudio, isPlaying, isSound } = useAudio();

  const handleChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const audioURL = URL.createObjectURL(file);

    const audioLoader = new THREE.AudioLoader();
    audioLoader.load(audioURL, (buffer) => {
      handleAudioLoad(buffer);
    });
  };

  console.log(isSound)

  return (
    <div className={styles.container}>
      <div id="audio" className={styles.selector}>
        <section className={styles.customInput}>
          <label htmlFor="audioUpload">Choose a song</label>
          <input
            type="file"
            id="audioUpload"
            accept="audio/*"
            onChange={handleChange}
          />
        </section>

        <button onClick={toggleAudio} className={!isSound ? styles.blocked : null}>
          <img
            src={isPlaying ? pause : play}
            alt={isPlaying ? "pause" : "play"}
          />
        </button>
      </div>
    </div>
  );
};
