import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Marquee() {
  const [duration, setDuration] = useState(10);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateDuration = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768); // Consider < 768px as mobile
      if (width < 640) {
        // Mobile: faster scrolling (8s)
        setDuration(6);
      } else if (width < 768) {
        // Small tablets: 9s
        setDuration(9);
      } else if (width < 1024) {
        // Tablets: 9.5s
        setDuration(9.5);
      } else {
        // Desktop: original 10s
        setDuration(10);
      }
    };

    updateDuration();
    window.addEventListener("resize", updateDuration);
    return () => window.removeEventListener("resize", updateDuration);
  }, []);

  const scrollProps = isMobile
    ? {}
    : {
        "data-scroll": true,
        "data-scroll-section": true,
        "data-scroll-speed": ".1",
      };

  return (
    <div
      {...scrollProps}
      className="relative z-10 w-full py-12 sm:py-8 md:py-12 lg:py-16 xl:py-20 bg-[#004D43] rounded-lg sm:rounded-xl md:rounded-2xl text-white px-2 sm:px-4 md:px-6 lg:px-0 overflow-hidden"
    >
      <div className="text border-t-2 border-b-2 py-10 sm:py-10 md:py-0 lg:py-0 border-zinc-300 flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 overflow-hidden whitespace-nowrap ">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: duration }}
          className="text-[40vw] sm:text-[16vw] md:text-[18vw] lg:text-[20vw] xl:text-[24vw] leading-none font-['Founders_Grotesk_X-Condensed'] font-semibold uppercase pt-4 sm:pt-4 md:pt-6 lg:pt-8 xl:pt-10 -mb-[3vw] sm:-mb-[4vw] md:-mb-[5vw] lg:-mb-[6vw] xl:-mb-[7vw] pr-6 sm:pr-8 md:pr-12 lg:pr-16 xl:pr-20"
        >
          Mohammed Azhar
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: duration }}
          className="text-[40vw] sm:text-[16vw] md:text-[18vw] lg:text-[20vw] xl:text-[24vw] leading-none font-['Founders_Grotesk_X-Condensed'] font-semibold uppercase pt-4 sm:pt-4 md:pt-6 lg:pt-8 xl:pt-10 -mb-[3vw] sm:-mb-[4vw] md:-mb-[5vw] lg:-mb-[6vw] xl:-mb-[7vw] pr-6 sm:pr-8 md:pr-12 lg:pr-16 xl:pr-20"
        >
          Mohammed Azhar
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
