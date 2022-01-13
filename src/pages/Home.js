import React from "react";
import useAppStore from "../stores/useAppStore";
import "./Home.css";
import { motion, AnimatePresence } from "framer-motion";

function Home() {
  const AppStore = useAppStore();

  return (
    <AnimatePresence>
      {AppStore.scene === 0 &&
        !AppStore.isTransBack &&
        !AppStore.isTransForward &&
        AppStore.canvasLoaded && (
          <motion.div
            className="home"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 0.85, y: 45 }}
            exit={{ opacity: 0, y: 800 }}
            transition={{ type: "spring", stiffness: 500, duration: 3 }}
          >
            <h1>Hi I'm Randy!</h1>
            <h3>
              I am a full stack web developer with a passion for 3D web design.
              Click the arrow on the right to view the various web development
              services I provide.
            </h3>
          </motion.div>
        )}
    </AnimatePresence>
  );
}

export default Home;
