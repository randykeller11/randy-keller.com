import create from "zustand";

let useAppStore = create((set) => ({
  scene: 0,
  isTransForward: false,
  isTransBack: false,
  shoeColor: "lightBlue",

  setScene: (sceneIndex) =>
    set((state) => ({
      scene: sceneIndex,
    })),
  forwardPress: () =>
    set((state) => ({
      isTransForward: true,
    })),
  backPress: () =>
    set((state) => ({
      isTransBack: true,
    })),
  finishTransition: () =>
    set((state) => ({
      isTransBack: false,
      isTransForward: false,
    })),
  shoeToggle: (color) =>
    set((state) => ({
      shoeColor: color,
    })),
}));

export default useAppStore;
