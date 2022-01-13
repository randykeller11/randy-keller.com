import { useFrame } from "@react-three/fiber";
import useAppStore from "../stores/useAppStore";

function Dolly() {
  const AppStore = useAppStore();

  //first forward transition
  const firstTrans = (state) => {
    if (AppStore.scene === 0 && AppStore.isTransForward) {
      state.camera.position.z = state.camera.position.z - 0.1;

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

  //second forward transition
  const secondTrans = (state) => {
    if (AppStore.scene === 1 && AppStore.isTransForward) {
      state.camera.position.z = state.camera.position.z - 0.1;
      state.camera.position.x = state.camera.position.x - 0.3;

      if (state.camera.position.z <= -20) {
        AppStore.setScene(2);
        AppStore.finishTransition();
      }
    }
    if (AppStore.scene === 2 && AppStore.isTransBack) {
      if (state.camera.position.z <= -10) {
        state.camera.position.z = state.camera.position.z + 0.1;
        state.camera.position.x = state.camera.position.x + 0.3;
      }
      if (state.camera.position.z >= -10) {
        AppStore.setScene(1);
        AppStore.finishTransition();
      }
    }
  };

  //third transition
  const thirdTrans = (state) => {
    if (AppStore.scene === 2 && AppStore.isTransForward) {
      state.camera.position.z = state.camera.position.z - 0.1;
      state.camera.position.y = state.camera.position.y + 0.1;

      if (state.camera.position.z <= -35) {
        AppStore.setScene(3);
        AppStore.finishTransition();
      }
    }
    if (AppStore.scene === 3 && AppStore.isTransBack) {
      if (state.camera.position.z <= -20) {
        state.camera.position.z = state.camera.position.z + 0.1;
        state.camera.position.y = state.camera.position.y - 0.1;
      }
      if (state.camera.position.z >= -20) {
        AppStore.setScene(2);
        AppStore.finishTransition();
      }
    }
  };

  //fourth transition
  const fourthTrans = (state) => {
    if (AppStore.scene === 3 && AppStore.isTransForward) {
      state.camera.position.z = state.camera.position.z - 0.1;
      state.camera.position.y = state.camera.position.y - 0.1;

      if (state.camera.position.z <= -45) {
        AppStore.setScene(4);
        AppStore.finishTransition();
      }
    }
    if (AppStore.scene === 4 && AppStore.isTransBack) {
      if (state.camera.position.z <= -35) {
        state.camera.position.z = state.camera.position.z + 0.1;
        state.camera.position.y = state.camera.position.y + 0.1;
      }
      if (state.camera.position.z >= -35) {
        AppStore.setScene(3);
        AppStore.finishTransition();
      }
    }
  };

  //fifth transition
  const fifthTrans = (state) => {
    if (AppStore.scene === 4 && AppStore.isTransForward) {
      state.camera.position.z = state.camera.position.z - 0.1;
      state.camera.position.x = state.camera.position.x + 0.1;

      if (state.camera.position.z <= -55) {
        AppStore.setScene(5);
        AppStore.finishTransition();
      }
    }
    if (AppStore.scene === 5 && AppStore.isTransBack) {
      if (state.camera.position.z <= -45) {
        state.camera.position.z = state.camera.position.z + 0.1;
        state.camera.position.x = state.camera.position.x - 0.1;
      }
      if (state.camera.position.z >= -45) {
        AppStore.setScene(4);
        AppStore.finishTransition();
      }
    }
  };

  useFrame((state) => {
    firstTrans(state);
    secondTrans(state);
    thirdTrans(state);
    fourthTrans(state);
    fifthTrans(state);
  });
  return null;
}

export default Dolly;
