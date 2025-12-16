import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import Britepixl from "../assets/Britepixl2.png";
import Qubit from "../assets/Qubit2.png";
import Eco from "../assets/Eco.png"; // demo image – replace with your asset
import Rise from "../assets/Rise.png"; // demo image – replace with your asset

function Features() {
  const projects = [
    {
      title: "Britepixl",
      image: Britepixl,
      url: "https://britepixl.com",
    },
    {
      title: "Qubit",
      image: Qubit,
      url: "https://qubit.ae",
    },
    {
      title: "Eco Express Portal",
      image: Eco,
      url: "https://portal.ecofreight.com",
    },
    {
      title: "Rise Pos System",
      image: Rise,
      url: "https://risehq.io/",
    },
  ];
  const rows = [
    [0, 1], // row 1 -> projects[0], projects[1]
    [2, 3], // row 2 -> projects[2], projects[3]
  ];

  // One animation control per letter per project
  const letterControls = projects.map((project) =>
    project.title.split("").map(() => useAnimation())
  );

  // Initialize all letters hidden (y: 100%, opacity: 0)
  useEffect(() => {
    letterControls.forEach((controlsForProject) => {
      controlsForProject.forEach((control) => {
        control.set({ y: "100%", opacity: 0 });
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleHover = (hoveredIndex) => {
    // Hide all other project texts
    letterControls.forEach((controlsForProject, projectIndex) => {
      if (projectIndex !== hoveredIndex) {
        controlsForProject.forEach((control) => {
          control.start({
            y: "100%",
            opacity: 0,
            transition: {
              ease: [0.22, 1, 0.36, 1],
              duration: 0.3,
            },
          });
        });
      }
    });

    // Show hovered project's text with stagger
    const controlsForHovered = letterControls[hoveredIndex];
    controlsForHovered.forEach((control, i) => {
      control.start({
        y: "0%",
        opacity: 1,
        transition: {
          ease: [0.22, 1, 0.36, 1],
          delay: i * 0.05,
          duration: 0.6,
        },
      });
    });
  };

  const handleHoverEnd = (index) => {
    const controlsForProject = letterControls[index];
    controlsForProject.forEach((control) => {
      control.start({
        y: "100%",
        opacity: 0,
        transition: {
          ease: [0.22, 1, 0.36, 1],
          duration: 0.4,
        },
      });
    });
  };

  // helper to render an animated title with spaces preserved
  const renderAnimatedTitle = (projectIndex, variant) => {
    const project = projects[projectIndex];

    return project.title.split("").map((char, letterIndex) => {
      const displayChar = char === " " ? "\u00A0" : char; // keep spaces visible

      return (
        <motion.span
          key={`${project.title}-${variant}-letter-${letterIndex}`}
          style={{ display: "inline-block" }}
          initial={{ y: "100%", opacity: 0 }}
          animate={letterControls[projectIndex][letterIndex]}
        >
          {displayChar}
        </motion.span>
      );
    });
  };

  return (
    <div className="w-full py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 border-b-[1px] border-zinc-500 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-['Neue_Montreal']">
          Projects
        </h1>
      </div>

      <div className="px-4 sm:px-6 md:px-12 lg:px-20 relative">
        <div className="w-full flex flex-col gap-6 sm:gap-8 md:gap-10 mt-6 sm:mt-8 md:mt-10">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="relative flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10"
            >
              <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none z-10">
                <div className="relative">
                  {row.map((projectIndex) => {
                    const project = projects[projectIndex];
                    return (
                      <h1
                        key={`desktop-${project.title}`}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#CDEA68] text-4xl xl:text-6xl 2xl:text-8xl tracking-wide font-semibold font-['Founders_Grotesk_X-Condensed'] leading-none uppercase overflow-hidden whitespace-nowrap"
                      >
                        {renderAnimatedTitle(projectIndex, "desktop")}
                      </h1>
                    );
                  })}
                </div>
              </div>

              {/* Cards in this row */}
              {row.map((projectIndex) => {
                const project = projects[projectIndex];
                return (
                  <motion.div
                    key={project.title}
                    onHoverStart={() => handleHover(projectIndex)}
                    onHoverEnd={() => handleHoverEnd(projectIndex)}
                    onTouchStart={() => handleHover(projectIndex)}
                    onTouchEnd={() => handleHoverEnd(projectIndex)}
                    className="cardcontainer relative w-full lg:w-1/2 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]"
                  >
                    {/* Mobile / Tablet overlay: per-card, centered */}
                    <div className="lg:hidden absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                      <h1 className="text-[#CDEA68] text-3xl sm:text-4xl md:text-5xl tracking-wide font-semibold font-['Founders_Grotesk_X-Condensed'] leading-none uppercase overflow-hidden whitespace-nowrap">
                        {renderAnimatedTitle(projectIndex, "mobile")}
                      </h1>
                    </div>

                    <div
                      className="card w-full h-full rounded-2xl overflow-hidden cursor-pointer"
                      onClick={() => window.open(project.url, "_blank")}
                    >
                      <img
                        className="w-full h-full bg-cover object-cover"
                        src={project.image}
                        alt={project.title}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;