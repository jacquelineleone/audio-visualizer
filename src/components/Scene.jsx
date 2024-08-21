import { Blob } from "./shapes/Blob";
import { OrbitControls } from "@react-three/drei";

export const Scene = () => {
  return (
    <>
      <Blob position={[0, 0, 0]} size={[2, 20]} />
      <OrbitControls enableZoom={false} />
    </>
  );
};
