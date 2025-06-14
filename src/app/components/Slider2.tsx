"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalSnapScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".panel");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + containerRef.current!.offsetWidth, // end after full horizontal scroll
        },
      });
    }, containerRef);

    return () => ctx.revert(); // clean up
  }, []);

  return (
    <div className="h-screen overflow-hidden">
      <div ref={containerRef} className="flex w-[600vw] h-full">
        <div className="panel bg-blue-500 text-white flex items-center justify-center w-screen">
          <div className="max-w-xl p-6 text-center">
            <h1 className="text-4xl font-bold mb-4">
              Horizontal snapping sections (simple)
            </h1>
            <p className="mb-6">
              Scroll vertically to scrub the horizontal animation. It snaps
              dynamically to sections based on scroll momentum.
            </p>
            <div className="scroll-down animate-bounce text-lg font-semibold">
              ↓ Scroll down
            </div>
          </div>
        </div>
        <section className="panel bg-red-500 text-white text-4xl font-bold flex items-center justify-center w-screen">
          ONE
        </section>
        <section className="panel bg-orange-400 text-white text-4xl font-bold flex items-center justify-center w-screen">
          TWO
        </section>
        <section className="panel bg-purple-600 text-white text-4xl font-bold flex items-center justify-center w-screen">
          THREE
        </section>
        <section className="panel bg-green-500 text-white text-4xl font-bold flex items-center justify-center w-screen">
          FOUR
        </section>
        <section className="panel bg-gray-700 text-white text-4xl font-bold flex items-center justify-center w-screen">
          FIVE
        </section>
      </div>
    </div>
  );
};

export default HorizontalSnapScroll;
