import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ProductEditor.css";
import useAppStore from "../stores/useAppStore";

function ProductEditor({ scene, isTransBack, isTransForward }) {
  const AppStore = useAppStore();

  const firstRowColors = ["lightBlue", "lightGreen", "#E59595", "gold"];

  const secondRowColors = ["#FFA9F4", "#FFAD64", "#68A5FF", "#AF7A56"];

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
                most 3D file types and does not require multiple 3D files.{" "}
              </h3>
            </div>
          </motion.div>
        )}
      {AppStore.scene === 1 &&
        !AppStore.isTransBack &&
        !AppStore.isTransForward && (
          <div className="colorCard">
            <div className="colorCard__row">
              {firstRowColors.map((color, i) => (
                <motion.div
                  className="colorCard__row__button"
                  style={{ "background-color": color }}
                  whileTap={{ scale: 0.8, transition: { duration: 0.25 } }}
                  onClick={() => AppStore.shoeToggle(color)}
                  initial={{ opacity: 0, x: -400 }}
                  animate={{ opacity: 0.85, x: 0 }}
                  exit={{ opacity: 0, x: 800 }}
                  transition={{ type: "spring", duration: 1, delay: i * 0.1 }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.25 } }}
                ></motion.div>
              ))}
            </div>
            <div className="colorCard__row">
              {secondRowColors.map((color, i) => (
                <motion.div
                  className="colorCard__row__button"
                  style={{ "background-color": color }}
                  whileTap={{ scale: 0.8, transition: { duration: 0.25 } }}
                  onClick={() => AppStore.shoeToggle(color)}
                  initial={{ opacity: 0, x: -400 }}
                  animate={{ opacity: 0.85, x: 0 }}
                  exit={{ opacity: 0, x: 800 }}
                  transition={{ type: "spring", duration: 1, delay: i * 0.2 }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.25 } }}
                ></motion.div>
              ))}
            </div>
          </div>
        )}
    </AnimatePresence>
  );
}

export default ProductEditor;
