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

import ModelHome3 from "./components/ModelHome3";

import Oculus from "./components/Oculus";

import ShoppingCart from "./components/ShoppingCart";

import YoutubeLogo from "./components/YoutubeLogo";

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

              <ModelHome3 position={[-31, -1, -27]} scale={[0.6, 0.6, 0.6]} />

              <Oculus position={[-29, 15, -37]} />

              <ShoppingCart position={[-29, 5, -48]} scale={[1.5, 1.5, 1.5]} />

              <YoutubeLogo position={[-2, 5, -64]} scale={[0.8, 0.8, 0.8]} />

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
