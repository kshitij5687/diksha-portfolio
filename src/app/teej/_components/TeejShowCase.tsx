"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
// Assuming these paths are correct relative to your project structure
import Teej1 from "@/app/public/assets/teej/Teej1.png";
import Teej2 from "@/app/public/assets/teej/Teej2.gif";
import Teej3 from "@/app/public/assets/teej/Teej3.png";
import Teej4 from "@/app/public/assets/teej/Teej4.gif";
import Teej5 from "@/app/public/assets/teej/Teej5.png";
import Teej6 from "@/app/public/assets/teej/Teej6.png";
import Teej7 from "@/app/public/assets/teej/Teej7.png";
import Teej8 from "@/app/public/assets/teej/Teej8.png";
import Image from "next/image";
import NextTeej1 from "@/app/public/assets/teej/NextTeej1.png";
import NextTeej2 from "@/app/public/assets/teej/NextTeej2.png";
import NextTeej3 from "@/app/public/assets/teej/NextTeej3.png";
import NextTeej4 from "@/app/public/assets/teej/NextTeej4.png";
import NextTeej5 from "@/app/public/assets/teej/NextTeej5.png";
import NextTeej6 from "@/app/public/assets/teej/NextTeej6.png";
import NextTeej7 from "@/app/public/assets/teej/NextTeej7.png";
import NextTeej8 from "@/app/public/assets/teej/NextTeej8.png";
import NextTeej9 from "@/app/public/assets/teej/NextTeej9.png";
import NextTeej10 from "@/app/public/assets/teej/NextTeej10.png";
import NextTeejGif from "@/app/public/assets/teej/NextTeejGif.gif";
import NextTeejGif2 from "@/app/public/assets/teej/NextTeej2.gif";

const TeejShowCase = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textElements = gsap.utils.toArray<HTMLElement>(".showcase-animate");

    gsap.set(textElements, { opacity: 0, y: 40 });

    gsap.to(textElements, {
      opacity: 1,
      y: 0,
      stagger: {
        amount: 0.5,
        from: "start",
      },
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  return (
    <div>
      <div className="max-w-[90%] mx-auto lg:px-24 md:px-12">
        <div
          className="sm:flex justify-around lg:gap-48 md:gap-24 md:pt-20 sm:pt-14 pt-8 sm:space-y-0 space-y-5 sm:px-0 px-4"
          ref={textRef}
        >
          <div className="text-white flex-[70%] space-y-4">
            <div className="lg:text-[24px] md:text-[20px] sm:text-[16px] font-semibold showcase-animate">
              Please See Agency :
            </div>
            <p className="text-[12px] font-medium w-[90%] showcase-animate">
              Working on the same festive campaign year after year is a unique
              challenge — after all, how do you reinvent a festival? The real
              test lies in transforming its visuals and evoking a fresh emotion
              every time. Doing this consistently, across diverse audiences in
              India and Dubai, makes the task even more demanding — and
              rewarding.
            </p>
          </div>
          <div className="text-white flex-[30%] text-start space-y-4">
            <div className="lg:text-[24px] md:text-[20px] sm:text-[16px] font-semibold showcase-animate">
              2024 - 2025
            </div>
            <div>
              <div className="text-[12px] font-medium showcase-animate mb-1">
                Photography - Shirish Sen
              </div>
              <div className="text-[12px] font-medium showcase-animate mb-1">
                Food Stylist - Kirin Vas
              </div>
              <div className="text-[12px] font-medium showcase-animate">
                Production - The A Team
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 sm:mt-16 md:mt-20">
        <div className="">
          {" "}
          <Image src={NextTeej1} alt="Teej Image 1" className="w-full h-auto" />
        </div>{" "}
        <div className="">
          {" "}
          <Image src={NextTeej2} alt="Teej Image 1" className="w-full h-auto" />
        </div>{" "}
        <div className="">
          {" "}
          <Image src={NextTeej3} alt="Teej Image 1" className="w-full h-auto" />
        </div>
        <div className="">
          {" "}
          <Image src={NextTeej4} alt="Teej Image 1" className="w-full h-auto" />
        </div>{" "}
        <div className="">
          {" "}
          <Image src={NextTeej5} alt="Teej Image 1" className="w-full h-auto" />
        </div>{" "}
        <div className="">
          {" "}
          <Image src={NextTeej6} alt="Teej Image 1" className="w-full h-auto" />
        </div>{" "}
        <div className="flex">
          <div className="flex-1">
            <Image
              src={NextTeej7}
              alt="Teej Image 7"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1">
            <Image
              src={NextTeejGif}
              alt="Teej Image 8"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="">
          {" "}
          <Image src={NextTeej8} alt="Teej Image 1" className="w-full h-auto" />
        </div>{" "}
        <div className="">
          {" "}
          <Image src={NextTeej9} alt="Teej Image 1" className="w-full h-auto" />
        </div>{" "}
        <div className="flex">
          <div className="flex-1">
            {" "}
            <Image
              src={NextTeej10}
              alt="Teej Image 1"
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1">
            {" "}
            <Image
              src={NextTeejGif2}
              alt="Teej Image 1"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="">
          {" "}
          <Image src={Teej1} alt="Teej Image 1" className="w-full h-auto" />
        </div>
        <div className="">
          {" "}
          <Image src={Teej2} alt="Teej GIF 2" className="w-full h-auto" />
        </div>
        <div className="">
          {" "}
          <Image src={Teej3} alt="Teej Image 3" className="w-full h-auto" />
        </div>
        <div className="flex">
          <div className="flex-1">
            <Image
              src={Teej4}
              alt="Teej GIF 4"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1">
            <Image
              src={Teej5}
              alt="Teej Image 5"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="">
          {" "}
          <Image src={Teej6} alt="Teej Image 6" className="w-full h-auto" />
        </div>
        <div className="flex">
          <div className="flex-1">
            <Image
              src={Teej7}
              alt="Teej Image 7"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1">
            <Image
              src={Teej8}
              alt="Teej Image 8"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeejShowCase;
