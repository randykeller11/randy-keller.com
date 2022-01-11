import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ProductEditor.css";

function ProductEditor({ scene, isTransBack, isTransForward }) {
  return (
    <AnimatePresence>
      {scene === 1 && !isTransBack && !isTransForward && (
        <motion.div
          className="card"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 0.8, y: 45 }}
          exit={{ opacity: 0, y: 800 }}
          transition={{ type: "spring", stiffness: 500 }}
        >
          <div className="card__heading" style={{ height: "3vh" }}>
            <h1>Custom Product Editors</h1>
          </div>
          <div className="card__body">
            <h3>
              Give your users the freedom to design your products how they would
              like them. This level of customizability is possible with just
              about any 3D file type and does not require multiple 3D files.{" "}
            </h3>
          </div>
        </motion.div>
      )}
      {scene === 1 && !isTransBack && !isTransForward && (
        <motion.div
          className="colorCard"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 0.8, y: 620 }}
          exit={{ opacity: 0, y: 800 }}
          transition={{ type: "spring", stiffness: 500 }}
        ></motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProductEditor;
