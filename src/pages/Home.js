import React from "react";
import AvatarTyping from "../components/AvatarTyping";
import useAppStore from "../stores/useAppStore";

function Home() {
  const AppStore = useAppStore();

  return (
    <>
      {AppStore.scene === 0 &&
        !AppStore.isTransBack &&
        !AppStore.isTransForward && <AvatarTyping position={[0, 0, 0]} />}
    </>
  );
}

export default Home;
