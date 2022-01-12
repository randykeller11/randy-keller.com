import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ProductEditor.css";
import useAppStore from "../stores/useAppStore";

function ProductEditor({ scene, isTransBack, isTransForward }) {
  const AppStore = useAppStore();

  const firstRowColors = ["lightBlue", "orange", "gold", "red"];

  const secondRowColors = ["purple", "green", "blue", "brown"];

  return (
    <AnimatePresence>
      {AppStore.scene === 1 &&
        !AppStore.isTransBack &&
        !AppStore.isTransForward && (
          <motion.div
            className="card"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 0.85, y: 45 }}
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
      {AppStore.scene === 1 &&
        !AppStore.isTransBack &&
        !AppStore.isTransForward && (
          <motion.div
            className="colorCard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            <div className="colorCard__row">
              {firstRowColors.map((color) => (
                <div
                  className="colorCard__row__button"
                  style={{ "background-color": color }}
                ></div>
              ))}
            </div>
            <div className="colorCard__row">
              {secondRowColors.map((color) => (
                <div
                  className="colorCard__row__button"
                  style={{ "background-color": color }}
                ></div>
              ))}
            </div>
          </motion.div>
        )}
    </AnimatePresence>
  );
}

export default ProductEditor;
