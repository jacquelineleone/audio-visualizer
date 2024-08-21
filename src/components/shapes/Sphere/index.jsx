import { useRef } from "react";

export const Sphere = ({ position, size, color }) => {
  const ref = useRef();

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={size} />
      <meshLambertMaterial color={color} wireframe />
    </mesh>
  );
};
