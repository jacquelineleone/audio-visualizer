import { Canvas } from "@react-three/fiber";
import { Scene } from "./components/Scene";
import { AudioSelect } from "./components/AudioSelect";
import "./App.css";
import { AudioProvider } from "./context/AudioContext";

function App() {
  return (
    <AudioProvider>
      <div className="container">
        <AudioSelect />
        <Canvas id="canvas" camera={{ position: [0, 0, 8] }}>
          <Scene />
        </Canvas>
      </div>
    </AudioProvider>
  );
}

export default App;
