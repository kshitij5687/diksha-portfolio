"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SpidermanLogo from "@/app/public/assets/spiderman/SpidermanLogo.png";
import Spidey1 from "@/app/public/assets/spiderman/Spidey1.png";
import Spidey2 from "@/app/public/assets/spiderman/Spidey2.png";
import Spidey3 from "@/app/public/assets/spiderman/Spidey3.png";
import Spidey4 from "@/app/public/assets/spiderman/Spidey4.png";
import Spidey5 from "@/app/public/assets/spiderman/Spidey5.png";
import Spidey6 from "@/app/public/assets/spiderman/Spidey6.png";
import Spidey7 from "@/app/public/assets/spiderman/Spidey7.png";
import Spidey8 from "@/app/public/assets/spiderman/Spidey8.png";
import Spidey9 from "@/app/public/assets/spiderman/Spidey9.png";
import Spidey10 from "@/app/public/assets/spiderman/Spidey10.png";
import Spidey11 from "@/app/public/assets/spiderman/Spidey11.png";
import Spidey12 from "@/app/public/assets/spiderman/Spidey12.png";
import Spidey13 from "@/app/public/assets/spiderman/Spidey13.png";

import Image from "next/image";

const SpidermanShowCasePage = () => {
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
          <div className="sm:mt-0 mt-14">
            <Image
              src={SpidermanLogo}
              alt="Spiderman Logo"
              className="w-[65%] sm:w-[60%] md:w-full h-auto mr-auto sm:mx-0"
            />
          </div>

          <div className="text-white flex-[75%] space-y-4">
            <div className="lg:text-[24px] md:text-[20px] sm:text-[16px] font-semibold showcase-animate">
              Lenskart:
            </div>
            <div>
              <p className="text-[12px] font-medium w-[90%] leading-5 showcase-animate">
                Brand & Communication Design <br /> for Lenskart’s collab with
              </p>
              <p className="text-xs text-white showcase-animate">
                Marvel Spiderman.
              </p>
            </div>
          </div>
          <div className="text-white flex-[40%] text-start space-y-4">
            <div className="lg:text-[24px] md:text-[20px] sm:text-[16px] font-semibold showcase-animate">
              2026
            </div>
            <div>
              <div className="text-[12px] font-medium leading-5 showcase-animate mb-1">
                Campaign, Art Direction & Visual Merchandising
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-12">
        <Image
          src={Spidey1}
          alt="Winter Billboard PNG"
          className="w-full h-auto"
        />
      </div>
      <div>
        <Image src={Spidey2} alt="Spidey 2" className="w-full h-auto" />
      </div>
      <div>
        <Image src={Spidey3} alt="Spidey 3" className="w-full h-auto" />
      </div>
      <div>
        <Image src={Spidey4} alt="Spidey 4" className="w-full h-auto" />
      </div>
      <div>
        <Image src={Spidey5} alt="Spidey 5" className="w-full h-auto" />
      </div>
      <div>
        <Image src={Spidey6} alt="Spidey 6" className="w-full h-auto" />
      </div>
      <div>
        <Image src={Spidey7} alt="Spidey 7" className="w-full h-auto" />
      </div>
      <div>
        <Image src={Spidey8} alt="Spidey 8" className="w-full h-auto" />
      </div>
      <div>
        <Image src={Spidey9} alt="Spidey 9" className="w-full h-auto" />
      </div>
      <div>
        <Image src={Spidey10} alt="Spidey 10" className="w-full h-auto" />
      </div>
      <div>
        <Image src={Spidey11} alt="Spidey 11" className="w-full h-auto" />
      </div>
      <div>
        <Image src={Spidey12} alt="Spidey 12" className="w-full h-auto" />
      </div>
      <div>
        <Image src={Spidey13} alt="Spidey 13" className="w-full h-auto" />
      </div>

      {/* Credits Section */}
      <div className="grid max-w-[90%] mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mt-6 sm:mt-10 md:mt-14 mb-6 sm:mb-10 md:mb-16 text-white">
        <div>
          <h3 className="text-[18px] md:text-[20px] font-semibold mb-3">
            Project Manager
          </h3>
          <p className="text-[12px] leading-5 font-medium">
            Somya Nagabhushan
            <br />
            Ananya Banerjee (Assistant Manager)
          </p>
        </div>

        <div>
          <h3 className="text-[18px] md:text-[20px] font-semibold mb-3">
            Art Direction
          </h3>
          <p className="text-[12px] leading-5 font-medium">
            Diksha Sharma
            <br />
            Nisha Verma
          </p>
        </div>

        <div>
          <h3 className="text-[18px] md:text-[20px] font-semibold mb-3">
            Sound Design
          </h3>
          <p className="text-[12px] leading-5 font-medium">Studio One</p>
        </div>

        <div>
          <h3 className="text-[18px] md:text-[20px] font-semibold mb-3">
            3D & Motion Design
          </h3>
          <p className="text-[12px] leading-5 font-medium">
            Aman, Kartik, Himanshu, Abhishek,
            <br />
            Harneet & Shresth
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpidermanShowCasePage;
