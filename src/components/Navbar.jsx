import React, { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [blur, setBlur] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = navLinks.map((link) =>
      document.getElementById(link.target)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // adjust sensitivity
    );

    sections.forEach((sec) => sec && observer.observe(sec));

    return () => {
      sections.forEach((sec) => sec && observer.unobserve(sec));
    };
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Don't hide navbar if mobile menu is open
    if (mobileMenuOpen) {
      setHidden(false);
      setBlur(true);
      return;
    }

    const previous = scrollY.getPrevious();

    // If user is at the top → remove blur
    if (latest <= 0) {
      setBlur(false);
      return;
    }

    if (latest > previous && latest > 50) {
      setHidden(true);
      setBlur(false);
    } else {
      setHidden(false);
      setBlur(true);
    }
  });

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { label: "About", target: "about-section" },
    { label: "My Work", target: "work-section" },
    { label: "Contact", target: "contact-section" },
  ];

  const handleScroll = (target) => {
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.div
        animate={hidden ? { y: "-100%" } : { y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed z-[999] w-full px-4 sm:px-8 md:px-12 lg:px-14 py-4 sm:py-6 md:py-8 
          font-neue-montreal text-white flex justify-between items-center
          transition-all duration-300
          ${blur ? "backdrop-blur-md bg-white/10" : "bg-transparent"}
        `}
      >
        <div className="logo items-center justify-center">
          <h1 className="font-['Founders_Grotesk_X-Condensed'] text-2xl md:text-4xl  leading-none uppercase text-white">
            Mohammed Azhar
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="links hidden md:flex gap-10">
          {navLinks.map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.target)}
              className="text-lg capitalize font-bold text-white"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-red-500 text-2xl focus:outline-none z-[1001] relative hover:opacity-70 transition-opacity"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <FaTimes className="text-red-500" />
          ) : (
            <FaBars className="text-red-500" />
          )}
        </button>
      </motion.div>

      <a
        href="https://drive.google.com/uc?export=download&id=1gcVTq2pJgnJmDgE8HStVeftcbTSceAOS"
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[1100]
             rounded-full border border-white/30 bg-black/60 backdrop-blur-md
             p-3 md:p-4 flex items-center justify-center
             text-white hover:bg-white hover:text-black
             transition-all duration-200 shadow-lg"
        aria-label="Download Resume"
      >
        <FaDownload className="text-red-500 text-xl" />

        {/* Tooltip - hidden on mobile */}
        <span
          className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2
               whitespace-nowrap px-3 py-1 rounded-md
               bg-black/80 text-white text-xs opacity-0
               group-hover:opacity-100 transition-opacity duration-300
               pointer-events-none select-none"
        >
          Download Resume
        </span>
      </a>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-[997] bg-black/50 md:hidden"
            />

            {/* Menu Content */}
            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className={`fixed z-[1000] w-full top-0 left-0 
                backdrop-blur-md bg-zinc-900/95
                pt-20 pb-8 px-4 sm:px-8
                md:hidden
                min-h-screen
              `}
            >
              {/* Close Button in Menu */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-4 right-4 text-red-500 text-2xl focus:outline-none hover:opacity-70 transition-opacity z-[1001]"
                aria-label="Close menu"
              >
                <FaTimes />
              </button>

              <div className="flex flex-col gap-6">
                {navLinks.map((item, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleScroll(item.target)}
                    className={`text-6xl font-semibold leading-[48px] cursor-pointer transition-opacity font-['Founders_Grotesk_X-Condensed'] uppercase
                   ${
                     activeSection === item.target
                       ? "text-[#CDEA68]"
                       : "text-white"
                   }
                 `}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
