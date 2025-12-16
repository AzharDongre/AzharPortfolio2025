import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

function Flowchart({ nodes, connections = [], className = "" }) {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const nodeVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (delay = 0) => ({
      pathLength: 1,
      opacity: 0.3,
      transition: {
        duration: 1.2,
        delay: delay + 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  // Calculate positions for nodes - horizontal linear flow
  const getNodePosition = (index, total, isMobile = false, nodeWidth = 0, containerWidth = 0) => {
    if (isMobile) {
      // Vertical stack for mobile
      return {
        x: 50,
        y: 15 + index * (60 / (total - 1 || 1)),
      };
    }

    // For desktop, calculate based on actual container width
    if (containerWidth > 0 && nodeWidth > 0) {
      const totalWidth = nodeWidth * total;
      const spacing = (containerWidth - totalWidth) / (total + 1);
      const startX = spacing;
      
      return {
        x: startX + index * (nodeWidth + spacing) + nodeWidth / 2,
        y: 50,
      };
    }
    
    // Fallback: evenly spaced percentages
    const spacing = 100 / (total + 1);
    return {
      x: spacing * (index + 1),
      y: 50,
    };
  };

  // Generate SVG path for connections - horizontal arrows for linear flow
  const getConnectionPath = (fromIndex, toIndex, containerWidth, nodeWidth, isMobile = false) => {
    if (isMobile || containerWidth === 0) {
      return null; // Don't render SVG paths for mobile or before dimensions are known
    }
    
    // Calculate positions based on flexbox layout
    const spacing = (containerWidth - nodeWidth * nodes.length) / (nodes.length + 1);
    const fromX = spacing + fromIndex * (nodeWidth + spacing) + nodeWidth;
    const toX = spacing + toIndex * (nodeWidth + spacing);
    const y = containerWidth * 0.5; // Center vertically in viewBox
    
    // Convert to percentage for SVG viewBox (0-100)
    const fromXPercent = (fromX / containerWidth) * 100;
    const toXPercent = (toX / containerWidth) * 100;
    const yPercent = 50;
    
    return `M ${fromXPercent} ${yPercent} L ${toXPercent} ${yPercent}`;
  };

  const isMobile = dimensions.width > 0 && dimensions.width < 1024;

  return (
    <div 
      ref={containerRef}
      className={`relative w-full ${className}`}
    >
      {/* SVG connections removed - using arrow icons instead for better alignment */}

      {/* Render nodes */}
      <div 
        className={`relative w-full ${
          isMobile 
            ? "flex flex-col items-center justify-center gap-4 px-4" 
            : "flex items-center justify-center gap-4 lg:gap-6 xl:gap-8 px-4 min-h-[600px]"
        }`}
      >
        {nodes.map((node, index) => {
          const isLast = index === nodes.length - 1;
          
          return (
            <React.Fragment key={node.id}>
              <motion.div
                className={isMobile ? "w-full max-w-md" : "flex-shrink-0 z-10"}
                custom={index}
                variants={nodeVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {node.content}
              </motion.div>
              
              {/* Arrow indicator between nodes */}
              {!isLast && (
                <motion.div
                  className={`flex items-center justify-center ${
                    isMobile ? "py-2" : "px-2"
                  } flex-shrink-0`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.4 }}
                >
                  <FaArrowRight 
                    className={`text-zinc-400 ${
                      isMobile ? "text-3xl rotate-90" : "text-4xl lg:text-5xl"
                    }`} 
                  />
                </motion.div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default Flowchart;

