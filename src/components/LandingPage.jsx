import React, { useState, useEffect } from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768); // Consider < 768px as mobile
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const scrollProps = isMobile ? {} : { "data-scroll": true, "data-scroll-section": true, "data-scroll-speed": "-.3" };

    return (
        <div {...scrollProps} className='relative z-0 w-full min-h-screen bg-zinc-900 text-white pt-1'>
            <div className='textstructure mt-16 sm:mt-24 md:mt-32 lg:mt-36 px-4 sm:px-8 md:px-12 lg:px-14'>
                {
                    ["Your Next", "Software", "Developer"].map((item, index) => {
                        return (
                            <div className="masker" key={index}>
                                <div className="w-fit flex items-center">
                                    <h1 className="flex items-center uppercase text-[12vw] sm:text-[10vw] md:text-[8.5vw] lg:text-[7.5vw] h-full leading-[10vw] sm:leading-[8vw] md:leading-[7vw] lg:leading-[6vw] font-['Founders_Grotesk_X-Condensed'] font-bold">
                                        {item}
                                    </h1>
                                </div>
                            </div>
                        );
                    })
                }

            </div>

            <div className='border-t-2 border-zinc-700 mt-16 sm:mt-20 md:mt-24 lg:mt-32 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 py-4 sm:py-5 px-4 sm:px-8 md:px-12 lg:px-20'>
                <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-10 sm:justify-between w-full sm:w-auto'>
                    {["Engineering Clean & Connected Systems", "Let us collaborate"].map((item, index) => (
                        <p key={index} className='text-xs sm:text-sm md:text-base font-light tracking-tight leading-tight sm:leading-none'>{item}</p>
                    ))}
                </div>

                <div className='start flex items-center gap-3 sm:gap-4 md:gap-5 w-full sm:w-auto justify-start sm:justify-end'>
                    <div className='px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 border-[1px] border-zinc-500 font-light cursor-pointer text-xs sm:text-sm md:text-base capitalize rounded-full whitespace-nowrap'>
                        <a href="mailto:mohdazhardongre@gmail.com">mohdazhardongre@gmail.com</a>
                    </div>

                    <div className='w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center border-[1px] border-zinc-500 rounded-full flex-shrink-0'>
                        <span className='rotate-45'>
                            <FaArrowUpLong />
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LandingPage