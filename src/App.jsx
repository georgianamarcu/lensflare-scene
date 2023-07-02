import "./App.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { Loader, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Overlay from "./Overlay";

function App() {
  return (
    <>
      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{
          fov: 45,
        }}
        gl={{ stencil: false, antialias: false, depth: false }}
      >
        <Scene />
      </Canvas>
      <Loader />
      <Overlay />
    </>
  );
}

export default App;
