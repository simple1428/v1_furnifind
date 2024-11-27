import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function AnimatedWrapper({
  isVisible,
  children,
  onExitComplete,
}) {
  return (
    <AnimatePresence onExitComplete={onExitComplete}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
