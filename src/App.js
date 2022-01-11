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
  const [isTransForward, setIsTransForward] = useState(false);
  const [isTransBack, setIsTransBack] = useState(false);

  const divStyles = {
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

  return (
    <>
      <AnimatePresence>
        {scene === 1 && !isTransBack && !isTransForward && (
          <motion.div
            className="card"
            style={divStyles}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 0.8, y: 50 }}
            exit={{ opacity: 0, y: 800 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            <div className="card__heading" style={{ height: "3vh" }}>
              <h1>Custom Product Editors</h1>
            </div>
            <div className="card__body">
              <h3>
                Give your users the freedom to design your products how they
                would like them. This level of customizability is possible with
                just about any 3D file type and does not require multiple 3D
                files.{" "}
              </h3>
            </div>
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
                isTransForward={isTransForward}
                setIsTransForward={setIsTransForward}
                isTransBack={isTransBack}
                setIsTransBack={setIsTransBack}
                setScene={setScene}
              />
              <JordanOne position={[0, 0.75, -14]} />
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
