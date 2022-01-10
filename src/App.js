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

import Dolly from "./components/Dolly";
import JordanOne from "./components/JordanOne";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

function App() {
  const [scene, setScene] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const divStyles = {
    "background-color": "orange",
    height: "10vh",
    width: "20vw",
    display: "flex",
    "justify-content": "center",
    position: "absolute",
    "z-index": "2",
  };

  return (
    <>
      <AnimatePresence>
        {scene === 1 && (
          <motion.div
            className="test"
            style={divStyles}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 300 }}
            exit={{ opacity: 0, y: 800 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            <h1>🍩</h1>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="canvas">
        <Suspense fallback={null}>
          <Canvas camera={{ position: [0, 2, 6] }}>
            <Suspense fallback={<Loader />}>
              <Sky />
              <Dolly
                scene={scene}
                isTransitioning={isTransitioning}
                setIsTransitioning={setIsTransitioning}
                setScene={setScene}
              />
              <JordanOne position={[0, 0, -14]} />
              <ambientLight intensity={0.9} />
            </Suspense>
          </Canvas>
        </Suspense>
        <button
          onClick={() => {
            setIsTransitioning(true);
          }}
        >
          update
        </button>
      </div>
    </>
  );
}

export default App;
