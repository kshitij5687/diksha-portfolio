"use client";
import React, { useEffect, useRef } from "react";

import Diageo28 from "../../public/assets/diageo/Diageo28.jpg";
import Diageo27 from "../../public/assets/diageo/Diageo27.jpg";
import Diageo26 from "../../public/assets/diageo/Diageo26.jpg";
import Diageo25 from "../../public/assets/diageo/Diageo25.jpg";
import Diageo24 from "../../public/assets/diageo/Diageo24.png";
import Diageo23 from "../../public/assets/diageo/Diageo23.png";
import Diageo22 from "../../public/assets/diageo/Diageo22.png";
import Diageo21 from "../../public/assets/diageo/Diageo21.gif";
import Diageo20 from "../../public/assets/diageo/Diageo20.png";
import Diageo19 from "../../public/assets/diageo/Diageo19.gif";
import Diageo15 from "../../public/assets/diageo/Diageo15.png";
import Diageo16 from "../../public/assets/diageo/Diageo16.png";
import Diageo14 from "../../public/assets/diageo/Diageo14.jpg";
import Diageo13 from "../../public/assets/diageo/Diageo13.jpg";
import Diageo12 from "../../public/assets/diageo/Diageo12.jpg";
import Diageo11 from "../../public/assets/diageo/Diageo11.jpg";
import Diageo10 from "../../public/assets/diageo/Diageo10.jpg";
import Diageo9 from "../../public/assets/diageo/Diageo9.jpg";
import Diageo8 from "../../public/assets/diageo/Diageo8.jpg";
import Diageo7 from "../../public/assets/diageo/Diageo7.png";
import Diageo6 from "../../public/assets/diageo/Diageo6.png";
import Diageo5 from "../../public/assets/diageo/Diageo5.png";
import Diageo4 from "../../public/assets/diageo/Diageo4.png";
// import Diageo2 from "../../public/assets/diageo/Diageo2.png";
import gsap from "gsap";
import Image from "next/image";

const DiageoShowCasePage = () => {
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
              {` Diageo - The Good Craft.Co India's first sensorial Experience Home
                with a vision to put Indian craft on world stage. The intersection
                of Craft, Community and Innovation of Spirits.`}
            </p>
          </div>
          <div className="text-white flex-[30%] text-start space-y-4">
            <div className="lg:text-[24px] md:text-[20px] sm:text-[16px] font-semibold showcase-animate">
              2024
            </div>
            {/* <div>
              <div className="text-[12px] font-medium showcase-animate mb-1">
                Photography - Shirish Sen
              </div>
              <div className="text-[12px] font-medium showcase-animate">
                Food Stylist - Kirin Vas
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="mt-12 sm:mt-16 md:mt-20">
        {" "}
        <div className="">
          {" "}
          {/* <Image src={Diageo1} alt="Haldiram GIF" className="w-full h-auto" />
           */}
          <video
            className="w-full h-auto object-contain"
            controls
            autoPlay
            muted
            playsInline
          >
            <source src="/videos/Diageo1.mp4" type="video/mp4" />
          </video>
        </div>
        {/* <div className="">
          {" "}
          <Image src={Diageo2} alt="Haldiram GIF" className="w-full h-auto" />
        </div> */}
        <div className="">
          {" "}
          <video
            className="w-full h-auto object-contain"
            controls
            autoPlay
            muted
            playsInline
          >
            <source src="/videos/Diageo3.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="">
          {" "}
          <Image src={Diageo4} alt="Haldiram GIF" className="w-full h-auto" />
        </div>
        <div className="">
          {" "}
          <Image src={Diageo5} alt="Haldiram GIF" className="w-full h-auto" />
        </div>
        <div className="">
          {" "}
          <Image src={Diageo6} alt="Haldiram GIF" className="w-full h-auto" />
        </div>
        <div className="">
          {" "}
          <Image src={Diageo7} alt="Haldiram GIF" className="w-full h-auto" />
        </div>
        <div className="">
          {" "}
          <Image src={Diageo8} alt="Haldiram GIF" className="w-full h-auto" />
        </div>
        <div className="flex">
          <div className="flex-1">
            <Image
              src={Diageo9}
              alt="Image 1"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1">
            <Image
              src={Diageo10}
              alt="Image 2"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1">
            <Image
              src={Diageo11}
              alt="Image 3"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="flex-1">
            <Image
              src={Diageo12}
              alt="Image 3"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex-1">
            <Image
              src={Diageo13}
              alt="Image 1"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1">
            <Image
              src={Diageo14}
              alt="Image 2"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="">
          <Image
            src={Diageo15}
            alt="Image 1"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="flex">
          <div className="">
            <Image
              src={Diageo16}
              alt="Image 1"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="">
          {" "}
          <Image src={Diageo19} alt="Haldiram GIF" className="w-full h-auto" />
        </div>
        <div className="">
          {" "}
          <Image src={Diageo20} alt="Haldiram GIF" className="w-full h-auto" />
        </div>
        <div className="">
          {" "}
          <Image src={Diageo21} alt="Haldiram GIF" className="w-full h-auto" />
        </div>
        <div className="">
          {" "}
          <Image src={Diageo22} alt="Haldiram GIF" className="w-full h-auto" />
        </div>
        <div className="flex gap-2">
          <div className="flex-1">
            <Image
              src={Diageo23}
              alt="Image 1"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1">
            <Image
              src={Diageo24}
              alt="Image 2"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex-1">
            <Image
              src={Diageo25}
              alt="Image 1"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1">
            <Image
              src={Diageo26}
              alt="Image 2"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1">
            <Image
              src={Diageo27}
              alt="Image 3"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="flex-1">
            <Image
              src={Diageo28}
              alt="Image 3"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiageoShowCasePage;
