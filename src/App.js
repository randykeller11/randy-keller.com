import "./App.css";
import React, { Suspense, useState, useEffect } from "react";
import {
  useGLTF,
  useProgress,
  Html,
  OrbitControls,
  Sky,
} from "@react-three/drei";

import { Canvas, useFrame } from "@react-three/fiber";
import { motion, AnimatePresence } from "framer-motion";

import ProductEditor from "./pages/ProductEditor";

import Dolly from "./components/Dolly";
import JordanOne from "./components/JordanOne";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

function App() {
  const [scene, setScene] = useState(0);
  const [isTransForward, setIsTransForward] = useState(false);
  const [isTransBack, setIsTransBack] = useState(false);

  const cardStyles = {
    "background-color": "orange",
    height: "20vh",
    width: "60vw",
    left: "20vw",
    display: "flex",
    "flex-flow": "column",
    "justify-content": "space-between",
    "text-align": "center",
    position: "absolute",
    "z-index": "2",
    "border-radius": "30px",
    padding: "1rem",
  };

  const colorCardStyles = {
    border: "2px solid black",
    height: "27.5vh",
    width: "70vw",
    left: "13vw",
    display: "flex",
    "flex-flow": "column",
    "justify-content": "space-between",
    position: "absolute",
    "z-index": "2",
    "border-radius": "30px",
    padding: "1rem",
  };

  return (
    <>
      <ProductEditor
        scene={scene}
        isTransBack={isTransBack}
        isTransForward={isTransForward}
      />
      <div className="canvas">
        <Suspense fallback={null}>
          <Canvas camera={{ position: [0, 2, 6] }}>
            <Suspense fallback={<Loader />}>
              <Sky />
              <Dolly
                scene={scene}
                isTransForward={isTransForward}
                setIsTransForward={setIsTransForward}
                isTransBack={isTransBack}
                setIsTransBack={setIsTransBack}
                setScene={setScene}
              />
              <JordanOne position={[0, 0.65, -14]} />
              <ambientLight intensity={0.9} />
            </Suspense>
          </Canvas>
        </Suspense>
        <button
          onClick={() => {
            setIsTransBack(true);
          }}
        >
          back
        </button>
        <button
          onClick={() => {
            setIsTransForward(true);
          }}
        >
          forward
        </button>
      </div>
    </>
  );
}

export default App;
