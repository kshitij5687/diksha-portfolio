"use client";

import { useEffect, useRef } from "react";
import { Epilogue } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const epilogue = Epilogue({ subsets: ["latin"] });

const Main = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lines = gsap.utils.toArray<HTMLElement>(".main-line");

    gsap.set(lines, { opacity: 0, y: 40 });

    gsap.to(lines, {
      opacity: 1,
      y: 0,
      stagger: {
        amount: 0.5, // more time between lines
        from: "start",
      },
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top 75%", // trigger earlier if needed
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  // Original text lines for larger screens
  const largeScreenTextLines = [
    `“It’s an upward scroll. It’s an intention.”`,
    `And a gentle attack on your muscle memory."`,
  ];

  // Specific text lines for small screens (now 3 lines)
  const smallScreenTextSegments = [
    `It’s an upward scroll. It’s an intention.”`, // First part - will be black, larger
    `And a gentle attack on your `, // Second part - will be gray, smaller
    `muscle memory.`,
  ];

  return (
    <div
      ref={mainRef}
      id="main-section"
      className={`${epilogue.className} bg-[#f2f1f1] sm:h-screen sm:pt-0 sm:pb-0 pb-64 pt-48 flex flex-col justify-center items-center`}
    >
      <div
        className="text-gray-900 text-center font-semibold
        // Responsive width
        lg:w-[65%] md:w-[75%] sm:w-[85%] w-[90%]
        // Responsive font size for the main lines
        lg:text-[32px] md:text-[28px] sm:text-[26px] text-[14px]
        // Responsive spacing and leading for the overall block
        space-y-2 lg:leading-[40px] md:leading-[36px] sm:leading-[30px] leading-[20px]"
      >
        {/* Content for screens >= 640px (sm: and up) */}
        <div className="hidden sm:block">
          {largeScreenTextLines.map((line, i) => (
            <div
              key={`large-${i}`} // Unique key for this set
              className={`main-line ${
                i === 1
                  ? "text-gray-600 lg:text-[24px] md:text-[22px] sm:text-[18px] text-[14px] font-normal lg:tracking-normal md:tracking-tight"
                  : "" // The main text color (text-gray-900) is inherited for the first line
              }`}
            >
              {line}
            </div>
          ))}
        </div>

        {/* Content for screens < 640px (max-sm) */}
        <div className="block sm:hidden">
          {smallScreenTextSegments.map((segment, i) => (
            <div
              key={`small-${i}`} // Unique key for this set
              // Apply styles to all segments from index 1 onwards (the gray, smaller lines)
              className={`main-line ${
                i > 0 ? "text-gray-600 font-normal text-[14px] leading-5" : ""
              }`}
            >
              {segment}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
