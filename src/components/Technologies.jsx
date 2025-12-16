import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaDatabase,
  FaServer,
  FaCloud,
  FaShieldAlt,
  FaCode,
  FaPlug,
  FaArrowDown,
} from "react-icons/fa";
import { SiMysql, SiShopify, SiWoo, SiFigma, SiMongodb  } from "react-icons/si";

function Technologies() {
  const techCategories = [
    {
      id: "frontend",
      title: "Frontend",
      icon: FaReact,
      accent: "border-cyan-500",
      pill: "bg-cyan-100 text-cyan-700",
      items: [
        { name: "React.js", icon: FaReact },
        {
          name: "Shopify plugin development (frontend components)",
          icon: SiShopify,
        },
        {
          name: "WooCommerce plugin development (frontend components)",
          icon: SiWoo,
        },
        { name: "UI/UX designing using Figma", icon: SiFigma },
      ],
    },
    {
      id: "api",
      title: "API",
      icon: FaServer,
      accent: "border-orange-500",
      pill: "bg-orange-100 text-orange-700",
      items: [
        { name: "Postman", icon: FaCode },
        { name: "API Integration", icon: FaPlug },
        { name: "API Development", icon: FaCode },
        { name: "Authentication APIs (JWT-based)", icon: FaShieldAlt },
      ],
    },
    {
      id: "backend",
      title: "Backend",
      icon: FaServer,
      accent: "border-green-500",
      pill: "bg-green-100 text-green-700",
      items: [
        { name: "Node.js", icon: FaNodeJs },
        { name: "Java 8", icon: FaJava },
        { name: "Website backend development", icon: FaServer },
        { name: "API creation (custom backend services)", icon: FaServer },
      ],
    },
    {
      id: "database",
      title: "Database",
      icon: FaDatabase,
      accent: "border-purple-500",
      pill: "bg-purple-100 text-purple-700",
      items: [
        { name: "MS SQL", icon: FaDatabase },
        { name: "MySQL", icon: SiMysql },
        { name : "MongoDb", icon : SiMongodb }
      ],
    },
    {
      id: "devops",
      title: "Others / DevOps / Hosting",
      icon: FaCloud,
      accent: "border-blue-500",
      pill: "bg-blue-100 text-blue-700",
      items: [
        { name: "cPanel Website & Email Hosting", icon: FaCloud },
        {
          name: "Plugin development (Shopify / WooCommerce)",
          icon: FaPlug,
        },
      ],
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.25,
      },
    }),
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const getRotationClass = (index) => {
    if (index === 0 || index === techCategories.length - 1) return "-rotate-1";
    if (index % 2 === 0) return "rotate-1";
    return "-rotate-2";
  };

  return (
    <div className="w-full p-6 sm:p-8 md:p-12 lg:p-16 bg-amber-50/80 rounded-tl-3xl rounded-tr-3xl text-zinc-900 relative overflow-visible">
      {/* paper texture / grid feel */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.03)_1px,_transparent_0)] [background-size:18px_18px] opacity-70" />

      <motion.h1
        className="relative z-10 font-['Neue_Montreal',system-ui,sans-serif] text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight mb-6 sm:mb-8 flex flex-wrap items-baseline gap-2"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <span className="text-zinc-900 underline-offset-4">
          Technologies
        </span>
        <span className="text-zinc-700">I Work With</span>
      </motion.h1>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Vertical timeline spine (hand-drawn style) */}
        <div className="hidden sm:block absolute left-3 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0">
          <div className="w-[2px] h-full border-l-2 border-dashed border-zinc-500/60 translate-x-[1px]" />
        </div>

        <div className="flex flex-col gap-6 sm:gap-10">
          {techCategories.map((category, index) => {
            const IconComponent = category.icon;
            const isLast = index === techCategories.length - 1;

            return (
              <React.Fragment key={category.id}>
                <div className="relative flex flex-col sm:flex-row sm:items-stretch gap-3 sm:gap-6">
                  {/* Flow dot on the line (for bigger screens) */}
                  <div className="hidden sm:flex flex-col items-center">
                    <div className="w-5 h-5 rounded-full bg-white border-2 border-zinc-900 shadow-[2px_2px_0_rgba(24,24,27,0.85)] flex items-center justify-center">
                      <span className="text-[10px] font-semibold text-zinc-800">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Card */}
                  <motion.div
                    className={`relative flex-1 sm:max-w-[90%] md:max-w-[80%] bg-white/90 rounded-2xl border-2 border-zinc-900 shadow-[4px_4px_0_rgba(24,24,27,0.85)] p-4 sm:p-5 md:p-6 ${getRotationClass(
                      index
                    )}`}
                    whileHover={{ y: -4, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    {/* colored edge / tape effect */}
                    <div
                      className={`pointer-events-none absolute -top-2 left-8 h-3 w-20 rounded-full ${category.pill} opacity-80 shadow`}
                    />

                    {/* small corner doodles */}
                    <div className="pointer-events-none absolute -left-1 -top-1 w-6 h-6 border-l-2 border-t-2 border-zinc-900/60" />
                    <div className="pointer-events-none absolute -right-1 -bottom-1 w-6 h-6 border-r-2 border-b-2 border-zinc-900/60" />

                    {/* Header */}
                    <div className="flex items-start gap-3 sm:gap-4 mb-4">
                      <div
                        className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-amber-50/90 border-2 ${category.accent} flex items-center justify-center shadow-[2px_2px_0_rgba(24,24,27,0.7)]`}
                      >
                        <IconComponent className="text-xl sm:text-2xl text-zinc-800" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h2 className="font-['Neue_Montreal',system-ui,sans-serif] text-lg sm:text-xl md:text-2xl font-bold text-zinc-900">
                          {category.title}
                        </h2>
                        <p className="text-[11px] sm:text-xs uppercase tracking-[0.17em] text-zinc-500">
                          Step {index + 1} of {techCategories.length}
                        </p>
                      </div>
                    </div>

                    {/* Items – everything visible, no scrolling */}
                    <div className="space-y-2 sm:space-y-3">
                      {category.items.map((item, itemIndex) => {
                        const ItemIcon = item.icon;
                        return (
                          <motion.div
                            key={itemIndex}
                            className="flex items-start gap-2 sm:gap-3 rounded-xl border border-dashed border-zinc-300 bg-zinc-50/80 px-3 py-2.5 sm:px-3.5 sm:py-3 hover:border-zinc-400 hover:bg-white transition-colors"
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            custom={itemIndex}
                          >
                            <div className="mt-0.5 flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg border border-zinc-300 bg-white flex items-center justify-center shadow-[1px_1px_0_rgba(24,24,27,0.5)]">
                              <ItemIcon className="text-xs sm:text-sm text-zinc-800" />
                            </div>
                            <p className="text-sm sm:text-[15px] leading-snug text-zinc-800">
                              {item.name}
                            </p>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                </div>

                {/* Connector between cards */}
                {!isLast && (
                  <div className="flex flex-col items-center justify-center my-1 sm:my-2">
                    {/* small vertical hand-drawn arrow */}
                    <div className="h-4 w-px border-l-2 border-dashed border-zinc-500/70" />
                    <FaArrowDown className="text-zinc-700 mt-1 text-xs sm:text-sm" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Technologies;
