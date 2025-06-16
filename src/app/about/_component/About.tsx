"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DikshaImagePhone from "@/app/public/assets/DikshaProfile.jpg";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const elements = gsap.utils.toArray<HTMLElement>(".about-animate");

    // Set initial states
    gsap.set(elements, { opacity: 0, y: 60 }); // Increased initial offset

    // Animate elements
    gsap.to(elements, {
      opacity: 1,
      y: 0,
      duration: 1.2, // Increased duration
      stagger: {
        amount: 0.8, // Increased stagger time
        from: "start",
      },
      ease: "power2.out", // Smoother easing
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%", // Earlier trigger point
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div className="bg-[#f2f1f1]" ref={aboutRef}>
      <div className="xl:px-20 lg:px-14 md:px-10  lg:pt-40 md:pt-32 sm:pt-28 pt-20 md:flex gap-8 md:pb-10 sm:pb-6 pb-4 hidden">
        <Image
          ref={imageRef}
          src={DikshaImagePhone}
          alt="Haldiram Project"
          className="2xl:w-[750px] 2xl:h-[600px] xl:w-[700px] xl:h-[600px] lg:w-[580px] lg:h-[550px] md:w-[430px] md:h-[450px] about-animate"
        />
        <div className="xl:px-10 lg:px-4 flex flex-col h-[600px] justify-between">
          <div>
            <h3 className="font-bold 2xl:text-[34px] xl:text-[32px] lg:text-[28px] md:text-[23px] sm:text-[20px] about-animate">
              {`I'm Diksha Sharma!`}
            </h3>
            <p className="font-medium 2xl:text-[16px] lg:text-[14px] md:text-[14px] text-gray-600 2xl:w-[90%] w-full mt-2 about-animate">
              {`  A designer with 2+ years of experience who doesn't just think
              outside the box, but obsesses over everything about it. Corners.
              Textures. Typography. And occasionally, what happens when it
              spins. Currently working at Please See as a Creative Designer. I
              believe in ideas that transformed not just on screen but into
              experiences as well.`}
            </p>
          </div>
          <div className="flex justify-end py-3 about-animate sm:text-md text-sm">
            {`Copy right © Diksha 2025 :)`}
          </div>
        </div>
      </div>

      <div className="md:hidden sm:px-10 px-4 space-y-8 md:pt-36 sm:pt-32 pt-28 min-h-screen">
        <div className="px-3">
          <h3 className="text-[24px] font-bold about-animate">
            {`I'm Diksha Sharma!`}
          </h3>
          <p className="font-medium text-gray-600 about-animate mt-3 text-[14px]">
            {` A designer with 2+ years of experience who doesn't just think
            outside the box, but obsesses over everything about it. Corners.
            Textures. Typography. And occasionally, what happens when it spins.
            Currently working at Please See as a Creative Designer. I believe in
            ideas that transform not just on screens but into experiences as
            well.`}
          </p>
        </div>
        <Image
          ref={imageRef}
          src={DikshaImagePhone}
          alt="Haldiram Project"
          className="w-full sm:h-[500px] h-[400px] about-animate object-contain"
        />
        <div className="flex justify-end py-3 px-6 about-animate sm:text-md text-xs">
          {`Copy right © Diksha 2025 :)`}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
