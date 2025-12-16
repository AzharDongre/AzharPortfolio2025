import React from "react";

function Cards() {
  return (
    <div>
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 border-b-[1px] border-zinc-500">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-['Neue_Montreal']">Education</h1>
      </div>
      <div className="cardsparent w-full min-h-screen bg-zinc-900 flex flex-col lg:flex-row items-center justify-center text-[#CDEA68] uppercase font-['Neue_Montreal'] font-semibold gap-4 sm:gap-5 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-8 sm:py-12 lg:py-0">
        <div className="cardcontainer w-full lg:w-1/2 h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[50vh]">
          <div className="relative pl-4 sm:pl-6 md:pl-8 card rounded-2xl w-full h-full bg-[#004D43] flex flex-col justify-between">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl pt-4 sm:pt-6 md:pt-4">Master's in Computer Applications</h1>
            <button className="absolute px-3 py-1 sm:px-4 md:px-5 rounded-full border-2 bottom-4 sm:bottom-6 md:bottom-10 text-sm sm:text-base">
              2020 - 2022
            </button>
          </div>
        </div>

        <div className="cardcontainer w-full lg:w-1/2 h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[50vh]">
          <div className="relative pl-4 sm:pl-6 md:pl-8 card rounded-2xl w-full h-full bg-[#004D43] flex flex-col justify-between">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl pt-4 sm:pt-6 md:pt-4">Bachelor's in Computer Applications</h1>
            <button className="absolute px-3 py-1 sm:px-4 md:px-5 rounded-full border-2 bottom-4 sm:bottom-6 md:bottom-10 text-sm sm:text-base">
              2017 - 2020
            </button>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default Cards;
