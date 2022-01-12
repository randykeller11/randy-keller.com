import { useFrame } from "@react-three/fiber";
import useAppStore from "../stores/useAppStore";

function Dolly() {
  const AppStore = useAppStore();

  //first forward transition
  const firstTrans = (state) => {
    if (AppStore.scene === 0 && AppStore.isTransForward) {
      if (state.camera.position.z >= -10) {
        state.camera.position.z = state.camera.position.z - 0.1;
      }
      if (state.camera.position.z <= -10) {
        AppStore.setScene(1);
        AppStore.finishTransition();
      }
    }
    if (AppStore.scene === 1 && AppStore.isTransBack) {
      if (state.camera.position.z <= 4) {
        state.camera.position.z = state.camera.position.z + 0.1;
      }
      if (state.camera.position.z >= 4) {
        AppStore.setScene(0);
        AppStore.finishTransition();
      }
    }
  };

  useFrame((state) => {
    firstTrans(state);
  });
  return null;
}

export default Dolly;
