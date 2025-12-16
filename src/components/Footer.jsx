import React from "react";

function Footer() {
  const handleScroll = (target) => {
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 font-['Founders_Grotesk_X-Condensed'] p-6 sm:p-8 md:p-12 lg:p-20">
      <div className='w-full md:w-1/2 h-full flex flex-col gap-6 sm:gap-8 md:gap-10 justify-between font-["Founders_Grotesk_X-Condensed"]'>
        <div className="heading items-center justify-center">
          <h1 className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] font-semibold uppercase leading-none -mb-2 sm:-mb-2 md:-mb-4 lg:-mb-2">
            Let's Build
          </h1>
          <h1 className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] font-semibold uppercase leading-none -mb-2 sm:-mb-2 md:-mb-4 lg:-mb-2">
            Something
          </h1>
        </div>
        <div className="logo items-center justify-center hidden sm:flex md:flex">
          <h1 className="font-['Founders_Grotesk_X-Condensed'] text-4xl mt-4 md:mt-8 lg:mt-24 leading-none uppercase text-white">
            Mohammed Azhar
          </h1>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2">
        <h1 className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] font-semibold uppercase leading-none -mb-4 sm:-mb-6 md:-mb-8 lg:-mb-10">
          Get in touch
        </h1>

        <div className="flex flex-col sm:flex-row justify-between font-['Neue_Montreal'] mt-6 sm:mt-10 md:mt-14">
          <div>
            <p className="text-sm mb-3 opacity-70">S:</p>
            {/* These could also open external links */}
            <button
              className="block text-left text-base mb-2 hover:opacity-70"
              onClick={() => window.open("https://wa.me/+97156969225406", "_blank")}
            >
              WhatsApp
            </button>
            <button
              className="block text-left text-base mb-2 hover:opacity-70"
              onClick={() => window.open("www.linkedin.com/in/mohammed-azhar-dongre-285aa71b6", "_blank")}
            >
              LinkedIn
            </button>
          </div>

          <div>
            <p className="text-sm mb-3 opacity-70 mt-4">A:</p>
            <p className="leading-tight">Dubai, UAE</p>
          </div>

          <div>
            <p className="text-sm mb-3 mt-4 opacity-70">L:</p>
            <button
              className="block text-left mb-2 hover:opacity-70"
              onClick={() => handleScroll("about-section")}
            >
              About
            </button>
            <button
              className="block text-left mb-2 hover:opacity-70"
              onClick={() => handleScroll("work-section")}
            >
              My work
            </button>
            <button
              className="block text-left mb-2 hover:opacity-70"
              onClick={() => handleScroll("contact-section")}
            >
              Contact us
            </button>
          </div>
        </div>

        <div className="mt-10 font-['Neue_Montreal']">
          <p className="text-sm mb-3 opacity-70">E:</p>
          <a
            href="mailto:mohdazhardongre@gmail.com"
            className="hover:opacity-70"
          >
            mohdazhardongre@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
