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

import useAppStore from "./stores/useAppStore";

import ProductEditor from "./pages/ProductEditor";

import Dolly from "./components/Dolly";
import JordanOne from "./components/JordanOne";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

function App() {
  const AppStore = useAppStore();

  return (
    <>
      <ProductEditor />
      <div className="canvas">
        <Suspense fallback={null}>
          <Canvas camera={{ position: [0, 2, 6] }}>
            <Suspense fallback={<Loader />}>
              <Sky />
              <Dolly />
              <JordanOne position={[0, 0.725, -14]} />
              <ambientLight intensity={0.9} />
            </Suspense>
          </Canvas>
        </Suspense>
        <button
          onClick={() => {
            AppStore.backPress();
          }}
        >
          back
        </button>
        <button
          onClick={() => {
            AppStore.forwardPress();
          }}
        >
          forward
        </button>
      </div>
    </>
  );
}

export default App;
