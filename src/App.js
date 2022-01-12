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

// -------------------page imports-----------------------------------

import Home from "./pages/Home";
import ProductEditor from "./pages/ProductEditor";

import Dolly from "./components/Dolly";

//-------------------3d model imports---------------------------
import AvatarTyping from "./components/AvatarTyping";
import Workspace from "./components/Workspace";

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
          <Canvas camera={{ position: [1.65, 1.5, 4] }}>
            <Suspense fallback={<Loader />}>
              <Sky />
              <Dolly />
              <AvatarTyping />
              <Workspace
                scale={[0.13, 0.11, 0.12]}
                position={[-0.04, 0.19, 1.66]}
                rotation={[-0.08, 3.1, 0]}
              />
              <JordanOne position={[0, 0.1, -14]} />
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
