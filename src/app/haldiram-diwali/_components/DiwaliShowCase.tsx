"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import Diwali2 from "@/app/public/assets/diwali/Diwali2.png";
import Diwali3 from "@/app/public/assets/diwali/Diwali3.png";
import Diwali4 from "@/app/public/assets/diwali/Diwali4.png";
import Diwali5 from "@/app/public/assets/diwali/Diwali5.png";
import Diwali7 from "@/app/public/assets/diwali/Diwali7.png";
import Image from "next/image";

const DiwaliShowCase = () => {
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
      {" "}
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
              A legacy brand deserves its own Diwali DVC film — but the
              challenge was to make it resonate in today’s fast-paced,
              Instagram-driven world. The solution? A vertical DVC designed for
              social feeds, paired with visuals that celebrate both the joy of
              food and the warmth of festive feelings.{" "}
            </p>
          </div>
          <div className="text-white flex-[30%] text-start space-y-4">
            <div className="lg:text-[24px] md:text-[20px] sm:text-[16px] font-semibold showcase-animate">
              2024
            </div>
            <div>
              <div className="text-[12px] font-medium showcase-animate mb-1">
                Production - Running Cow Films
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 md:mt-20">
        <div>
          {/* Add some top margin for separation */}
          <div
            className="relative w-full"
            style={{
              paddingTop: "56.25%" /* 16:9 Aspect Ratio (9 / 16 * 100) */,
            }}
          >
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/1088314187?h=40b12e0288"
              frameBorder="0" // Changed from frameborder to frameBorder for JSX
              allowFullScreen // Changed from allowfullscreen to allowFullScreen for JSX
              className="absolute top-0 left-0 w-full h-full" // Make iframe fill the parent container
            ></iframe>
          </div>
        </div>

        <div className="flex justify-between items-center md:px-16 sm:px-12 px-6 py-2.5 md:py-8 sm:py-4">
          <div className="">
            <a
              href="https://www.instagram.com/reel/DBX7exdteaD"
              // target="_blank"
              // rel="noopener noreferrer"
              className="md:text-lg sm:text-md text-xs font-semibold text-white underline cursor-pointer"
            >
              Film 1
            </a>
          </div>

          <div className="">
            <a
              href="https://www.instagram.com/reel/DBQ9CqAtHN5"
              // target="_blank"
              // rel="noopener noreferrer"
              className="md:text-lg sm:text-md text-xs font-semibold text-white underline cursor-pointer"
            >
              Film 2
            </a>
          </div>

          <div className="">
            <a
              href="https://www.instagram.com/reel/DBdAybLNYql"
              // target="_blank"
              // rel="noopener noreferrer"
              className="md:text-lg sm:text-md text-xs  font-semibold text-white underline cursor-pointer"
            >
              Film 3
            </a>
          </div>
        </div>

        <div className="">
          {" "}
          <Image src={Diwali2} alt="Teej Image 1" className="w-full h-auto" />
        </div>

        <div className="">
          {" "}
          <Image src={Diwali3} alt="Teej Image 1" className="w-full h-auto" />
        </div>

        <div className="">
          {" "}
          <Image src={Diwali4} alt="Teej Image 1" className="w-full h-auto" />
        </div>

        <div className="">
          {" "}
          <Image src={Diwali5} alt="Teej Image 1" className="w-full h-auto" />
        </div>

        <div className="">
          {" "}
          <video
            className="w-full h-auto object-contain"
            controls
            autoPlay
            muted
            playsInline
          >
            <source src="/videos/Diwali6.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="">
          <Image
            src={Diwali7}
            alt="Teej Image 5"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default DiwaliShowCase;
