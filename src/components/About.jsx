import React from "react";
import aboutImg from "../assets/Azhar About Cropped.png";

function About() {
  return (
    <div data-scroll data-scroll-section className="relative z-10 w-full p-6 sm:p-8 md:p-12 lg:p-20 bg-[#CDEA68] rounded-tl-xl rounded-tr-xl md:rounded-tl-3xl md:rounded-tr-3xl text-black">
      <h1 className="font-['Neue_Montreal'] text-3xl sm:text-4xl md:text-5xl lg:text-[3vw] leading-tight sm:leading-snug md:leading-normal lg:leading-[3.5vw] tracking-tight">
        About Me
      </h1>

      <div className="w-full border-t-[1px] border-[#7d8e3e] pt-6 sm:pt-8 md:pt-10 flex flex-col md:flex-row gap-4 sm:gap-5">
        <div className="w-full md:w-1/2">
          <h1 className="font-['Neue_Montreal'] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[2.4vw] leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed xl:leading-[3.5vw] tracking-tight">
            I am a Full Stack Software Developer experienced in building CRM
            systems, websites, software solutions, and secure APIs. I work with
            React.js, Node.js, Java 8, and manage databases like MS SQL and
            MySQL.<br></br> I also develop Shopify and WooCommerce plugins, integrate
            APIs, implement JWT authentication, and handle cPanel website and
            email hosting. I focus on delivering scalable, efficient, and
            user-friendly digital solutions.
          </h1>
        </div>

        <div className="w-full md:w-[75vh] lg:w-[90vh] h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[90vh] rounded-2xl overflow-hidden">
          <img src={aboutImg} alt="about" className="w-full h-full object-cover object-top" />
        </div>
      </div>
    </div>
  );
}

export default About;
