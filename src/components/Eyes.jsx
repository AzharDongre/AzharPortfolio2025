import React, { useEffect, useState, useRef } from "react";

function Eyes() {
  const [angle, setAngle] = useState(0);
  const animationFrameRef = useRef(null);
  const previousAngleRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        let mouseX = e.clientX;
        let mouseY = e.clientY;

        let deltaX = mouseX - window.innerWidth / 2;
        let deltaY = mouseY - window.innerHeight / 2;

        let newAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 180;

        let previousAngle = previousAngleRef.current;
        let angleDiff = newAngle - previousAngle;

        while (angleDiff > 180) angleDiff -= 360;
        while (angleDiff < -180) angleDiff += 360;

        let normalizedAngle = previousAngle + angleDiff;
        previousAngleRef.current = normalizedAngle;
        setAngle(normalizedAngle);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);
  return (
    <div className="eyes w-full h-screen overflow-hidden bg-zinc-200 relative">
      <div className="absolute uppercase font-['Founders_Grotesk_X-Condensed'] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] z-0 text-center px-4 pointer-events-none">
        <h2 className="text-[8vh] sm:text-[12vh] md:text-[18vh] lg:text-[22vh] xl:text-[25vh] text-zinc-900 font-semibold leading-none">
          <div className="-mb-4 sm:-mb-6 md:-mb-8 lg:-mb-10 xl:-mb-12">
            Let Us
          </div>
          <div className="-mb-4 sm:-mb-6 md:-mb-8 lg:-mb-10 xl:-mb-12">
            Collaborate
          </div>
        </h2>
      </div>

      <button className="absolute top-1/2 left-1/2 -translate-x-[50%] translate-y-[20vh] z-20 text-zinc-900 font-['Founders_Grotesk_X-Condensed'] leading-relaxed border-zinc-900 px-3 py-1 sm:px-4 sm:py-2 md:px-6 md:py-2 lg:px-8 lg:py-2 xl:px-8 xl:py-2 rounded-full border-2 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-wide sm:tracking-wider cursor-pointer hover:bg-zinc-900 hover:text-zinc-200 transition-colors duration-300">
        <a href="mailto:mohdazhardongre@gmail.com">mohdazhardongre@gmail.com</a>
      </button>
      <button
        onClick={() => window.open("https://wa.me/+971566225406", "_blank")}
        className="absolute top-1/2 left-1/2 -translate-x-[50%] translate-y-[28vh] sm:translate-y-[30vh] md:translate-y-[32vh] lg:translate-y-[34vh] xl:translate-y-[36vh] z-20 text-zinc-900 font-['Founders_Grotesk_X-Condensed'] leading-relaxed border-zinc-900 px-3 py-1 sm:px-4 sm:py-2 md:px-6 md:py-2 lg:px-8 lg:py-2 xl:px-8 xl:py-2 rounded-full border-2 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-wide sm:tracking-wider cursor-pointer hover:bg-zinc-900 hover:text-zinc-200 transition-colors duration-300"
      >
        <span>+971 566225406</span>
      </button>
      <div
        data-scroll
        data-scroll-speed="-.8"
        className="relative w-full h-full z-10"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          <div className="flex justify-center items-center w-[12vh] h-[12vh] sm:w-[16vh] sm:h-[16vh] md:w-[18vh] md:h-[18vh] lg:w-[20vh] lg:h-[20vh] bg-zinc-100 rounded-full shadow-lg">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900 overflow-hidden">
              <div
                style={{
                  transform: "translate(-50%, -50%) rotate(" + angle + "deg)",
                  transition: "transform 0.1s ease-out",
                }}
                className="line absolute top-1/2 left-1/2 w-full h-3 sm:h-4 md:h-5 origin-center"
              >
                <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-zinc-100 absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-[12vh] h-[12vh] sm:w-[16vh] sm:h-[16vh] md:w-[18vh] md:h-[18vh] lg:w-[20vh] lg:h-[20vh] bg-zinc-100 rounded-full shadow-lg">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900 overflow-hidden">
              <div
                style={{
                  transform: "translate(-50%, -50%) rotate(" + angle + "deg)",
                  transition: "transform 0.1s ease-out",
                }}
                className="line absolute top-1/2 left-1/2 w-full h-3 sm:h-4 md:h-5 origin-center"
              >
                <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-zinc-100 absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
