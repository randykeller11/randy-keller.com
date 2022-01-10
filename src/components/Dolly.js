import React from "react";
import { useFrame } from "@react-three/fiber";

function Dolly({
  scene,
  setScene,
  setIsTransForward,
  isTransForward,
  setIsTransBack,
  isTransBack,
}) {
  //first forward transition
  const firstTrans = (state) => {
    if (scene === 0 && isTransForward) {
      if (state.camera.position.z >= -10) {
        state.camera.position.z = state.camera.position.z - 0.1;
      }
      if (state.camera.position.z <= -10) {
        setScene(1);
        setIsTransForward(false);
      }
    }
    if (scene === 1 && isTransBack) {
      if (state.camera.position.z <= 6) {
        state.camera.position.z = state.camera.position.z + 0.1;
      }
      if (state.camera.position.z >= 6) {
        setScene(0);
        setIsTransBack(false);
      }
    }
  };

  useFrame((state) => {
    firstTrans(state);
  });
  return null;
}

export default Dolly;
