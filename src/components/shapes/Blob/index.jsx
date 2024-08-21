import * as THREE from "three";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAudio } from "../../../context/AudioContext";
import fragmentShader from "./fragmentShader";
import vertexShader from "./vertexShader";

export const Blob = ({ position, size }) => {
  const ref = useRef();
  const { audioAnalyser } = useAudio();

  const uniforms = useMemo(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.3 },
      u_frequency: { value: 0 },
    };
  }, []);

  useFrame((state) => {
    if (ref.current && audioAnalyser) {
      uniforms.u_time.value = 0.4 * state.clock.getElapsedTime();
      ref.current.material.uniforms.u_intensity.value = THREE.MathUtils.lerp(
        ref.current.material.uniforms.u_intensity.value,
        1.5,
        0.02
      );

      // update audio frequency in uniform
      ref.current.material.uniforms.u_frequency.value =
        audioAnalyser.getAverageFrequency() / 256.0;
    }
  });

  return (
    <mesh ref={ref} scale={1.5} position={position}>
      <icosahedronGeometry args={size} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        wireframe
      />
    </mesh>
  );
};
