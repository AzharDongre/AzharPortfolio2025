import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function RotatingText({ texts, interval = 2000, className = "" }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative inline-block overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 200,
              duration: 0.5,
            }}
            className="inline-block"
          >
            {texts[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}

export default RotatingText;

