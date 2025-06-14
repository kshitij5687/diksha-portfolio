"use client";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Shuttr1 from "../../public/assets/shuttr/Shuttr1.png";
import Shuttr2 from "../../public/assets/shuttr/Shuttr2.png";
import Shuttr3 from "../../public/assets/shuttr/Shuttr3.png";
import Shuttr4 from "../../public/assets/shuttr/Shuttr4.png";
import Shuttr5 from "../../public/assets/shuttr/Shuttr5.gif";
import Shuttr6 from "../../public/assets/shuttr/Shuttr6.png";
import Shuttr7 from "../../public/assets/shuttr/Shuttr7.png";
import Shuttr8 from "../../public/assets/shuttr/Shuttr8.png";
import Shuttr9 from "../../public/assets/shuttr/Shuttr9.png";
import Shuttr10 from "../../public/assets/shuttr/Shuttr10.png";
import Shuttr11 from "../../public/assets/shuttr/Shuttr11.gif";
import Shuttr12 from "../../public/assets/shuttr/Shuttr12.png";
import Shuttr13 from "../../public/assets/shuttr/Shuttr13.png";
import Shuttr14 from "../../public/assets/shuttr/Shuttr14.png";
import Shuttr15 from "../../public/assets/shuttr/Shuttr15.png";
import Shuttr16 from "../../public/assets/shuttr/Shuttr16.png";
import Shuttr17 from "../../public/assets/shuttr/Shuttr17.png";
import Shuttr18 from "../../public/assets/shuttr/Shuttr18.png";
import Shuttr19 from "../../public/assets/shuttr/Shuttr19.png";

const ShuttrShowCase = () => {
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
          className="sm:flex justify-around lg:gap-48 md:gap-24 pt-20 sm:space-y-0 space-y-5 sm:px-0 px-4"
          ref={textRef}
        >
          <div className="text-white flex-[70%] space-y-4">
            <div className="lg:text-[24px] md:text-[20px] sm:text-[16px] font-semibold showcase-animate">
              Shuttr up Studios
            </div>
            <p className="text-[12px] font-medium w-[90%] showcase-animate">
              A bold play on words blending "camera shutter" and "shut her up."
              It reclaims the phrase by emphasizing silence as power - letting
              visual storytelling speak louder than words. The brand offers
              visually rich, story-driven film content for brands, creators, and
              narratives that need a sharp, cinematic edge.
            </p>
            <p className="text-[12px] font-medium w-[90%] showcase-animate">
              Scrawl | Bold | Minimal
            </p>
          </div>
          <div className="text-white flex-[30%] text-start space-y-4">
            <div className="md:text-[20px] sm:text-[14px] font-medium showcase-animate">
              2025
            </div>
            <div>
              <div className="text-[12px] font-medium showcase-animate mb-1">
                Freelance Project
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 sm:mt-16 md:mt-20">
        <div className="">
          {" "}
          <Image src={Shuttr1} alt="Haldiram GIF" className="w-full h-auto" />
        </div>

        {/* <div className="">
          {" "}
          <Image src={Shuttr2} alt="Haldiram GIF" className="w-full h-auto" />
        </div> */}

        <div className="">
          {" "}
          <Image src={Shuttr3} alt="Haldiram GIF" className="w-full h-auto" />
        </div>

        <div className="flex">
          <div className="flex-1">
            <Image
              src={Shuttr4}
              alt="Image 1"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1">
            <Image
              src={Shuttr5}
              alt="Image 2"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="">
          {" "}
          <Image src={Shuttr6} alt="Haldiram GIF" className="w-full h-auto" />
        </div>

        <div className="">
          {" "}
          <Image src={Shuttr7} alt="Haldiram GIF" className="w-full h-auto" />
        </div>

        <div className="">
          {" "}
          <Image src={Shuttr8} alt="Haldiram GIF" className="w-full h-auto" />
        </div>

        <div className="">
          {" "}
          <Image src={Shuttr9} alt="Haldiram GIF" className="w-full h-auto" />
        </div>

        <div className="flex">
          <div className="flex-1">
            <Image
              src={Shuttr10}
              alt="Image 1"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1">
            <Image
              src={Shuttr11}
              alt="Image 2"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="">
          {" "}
          <Image src={Shuttr12} alt="Haldiram GIF" className="w-full h-auto" />
        </div>

        <div className="">
          {" "}
          <Image src={Shuttr13} alt="Haldiram GIF" className="w-full h-auto" />
        </div>

        <div className="">
          {" "}
          <Image src={Shuttr14} alt="Haldiram GIF" className="w-full h-auto" />
        </div>

        <div className="">
          {" "}
          <Image src={Shuttr15} alt="Haldiram GIF" className="w-full h-auto" />
        </div>

        <div className="">
          {" "}
          <Image src={Shuttr16} alt="Haldiram GIF" className="w-full h-auto" />
        </div>

        <div className="">
          {" "}
          <Image src={Shuttr17} alt="Haldiram GIF" className="w-full h-auto" />
        </div>

        <div className="">
          {" "}
          <Image src={Shuttr18} alt="Haldiram GIF" className="w-full h-auto" />
        </div>

        {/* <div className="">
          {" "}
          <Image src={Shuttr19} alt="Haldiram GIF" className="w-full h-auto" />
        </div> */}
      </div>
    </div>
  );
};

export default ShuttrShowCase;
