import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export const Cube = ({ position, size, color }) => {
  const ref = useRef();
  /*useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 2;
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
  });*/

  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
