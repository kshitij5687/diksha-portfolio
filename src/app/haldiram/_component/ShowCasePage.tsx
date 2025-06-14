"use client";
import HaldiramFestiveWinterMenu from "@/app/public/assets/HaldiramFestiveWinterMenu.png";
import WinterMenuFourScreen from "@/app/public/assets/WinterMenuFourScreen.png";
import WinterMenuTentCard from "@/app/public/assets/WinterMenuTentCard.png";
import WinterMenuStoreLed from "@/app/public/assets/WinterMenuStoreLed.jpg";
import WinterMenuStandee from "@/app/public/assets/WinterMenuStandee.png";
import WinterMenuNameTag from "@/app/public/assets/WInterMenuNameTag.png";
import WInterBillBoard from "@/app/public/assets/WinterBillBoard.png";
import WinterMockKV from "@/app/public/assets/WinterMockKV.gif";
import GajarKaHalwa from "@/app/public/assets/GajarKaHalwa.png";
import MakkeDiRoti from "@/app/public/assets/MakkeDiRote.png";
import Camera from "@/app/public/assets/WInterMenuCamera.jpg";
import DanglerGif from "@/app/public/assets/dangler-gif.gif";
import Table from "@/app/public/assets/WInterMenuTable.jpg";
import Plate from "@/app/public/assets/WInterMenuPlate.jpg";
import LedScreen from "@/app/public/assets/LedScreen.png";
import Dangler from "@/app/public/assets/dangler.png";
import WinterPortfolio1 from "@/app/public/assets/WinterPortfolio1.png";
import WinterMenuKY from "@/app/public/assets/WinterMenuKVGif.gif";
import WinterMenuFence from "@/app/public/assets/WinterMenuFence.png";
import WinterMenu2Screen from "@/app/public/assets/WInterMenuNavratri2Screen.png";
import WinterSpecialMenu from "@/app/public/assets/WInterNavratriSpecialMenu.png";
import WinterScreenGif from "@/app/public/assets/WInterLedScreenGif.gif";
import DubaiRoadBanner from "@/app/public/assets/DubaiRoadBanner.png";
import DubaiHorizontalScreen from "@/app/public/assets/DubaiHorizontalScreen.png";
import NavratriNameTag from "@/app/public/assets/NavratriNameTag.png";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import WinterMenuDog from "@/app/public/assets/WInterMenuDog.jpg";
// import WinterMenuVideo from "@/app/public/videos/"

const ShowCasePage = () => {
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
              Please See Agency :
            </div>
            <p className="text-[12px] font-medium w-[90%] showcase-animate">
              Throughout the year, we have proudly executed 19+ festive
              campaigns across India and later in Dubai. Crafting both print and
              digital collaterals for space and web presence. The goal is to
              transform the brand from a traditional favourite to one that earns
              the trust of both older and younger generation.
            </p>
          </div>
          <div className="text-white flex-[30%] text-start space-y-4">
            <div className="lg:text-[24px] md:text-[20px] sm:text-[16px] font-semibold showcase-animate">
              2024
            </div>
            <div>
              <div className="text-[12px] font-medium showcase-animate mb-1">
                Photography - Shirish Sen
              </div>
              <div className="text-[12px] font-medium showcase-animate">
                Food Stylist - Kirin Vas
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:space-y-6 sm:space-y-5 space-y-2">
        <div className="flex flex-col mt-20 md:gap-6 sm:gap-5 gap-2">
          <div className="">
            <Image
              src={HaldiramFestiveWinterMenu}
              alt="Haldiram PNG"
              className="w-full h-auto"
            />
          </div>

          <div className="">
            {" "}
            <Image
              src={WinterMockKV}
              alt="Haldiram GIF"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="flex md:gap-6 sm:gap-5 gap-2">
          <div className="flex-1">
            <Image
              src={GajarKaHalwa}
              alt="Image 1"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1">
            <Image
              src={LedScreen}
              alt="Image 2"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1">
            <Image
              src={MakkeDiRoti}
              alt="Image 3"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="">
          <Image
            src={WInterBillBoard}
            alt="Winter Billboard PNG"
            className="w-full h-auto"
          />
        </div>

        <div className="flex md:gap-6 sm:gap-5 gap-2">
          <div className="flex-1">
            <Image
              src={WinterMenuStoreLed}
              alt="Winter Billboard"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1">
            <Image
              src={WinterMenuTentCard}
              alt="LED Screen"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="">
          <Image
            src={WinterMenuFourScreen}
            alt="Winter Billboard PNG"
            className="w-full h-auto"
          />
        </div>

        <div className="flex md:gap-6 sm:gap-5 gap-2">
          <div className="flex-1">
            <Image
              src={WinterMenuStandee}
              alt="Winter Billboard"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1">
            <Image
              src={WinterMenuNameTag}
              alt="LED Screen"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="flex md:gap-6 sm:gap-5 gap-2">
          <div className="flex-1">
            <Image
              src={Dangler}
              alt="Winter Billboard"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1">
            <Image
              src={DanglerGif}
              alt="LED Screen"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="flex md:gap-6 sm:gap-5 gap-2">
          <div className="flex-1">
            <Image
              src={Camera}
              alt="Image 1"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1">
            <Image
              src={Plate}
              alt="Image 2"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1">
            <Image
              src={Table}
              alt="Image 3"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="">
          <Image
            src={WinterPortfolio1}
            alt="Winter Billboard PNG"
            className="w-full h-auto"
          />
        </div>

        <div>
          <Image
            src={WinterMenuKY}
            alt="Winter Billboard PNG"
            className="w-full h-auto block"
          />
        </div>
        <div className="text-gray-500 sm:p-4 p-2 flex sm:text-md text-xs justify-center">
          Domestic (India) Campaign Key Visual
        </div>

        <div className="">
          <Image
            src={WinterMenuFence}
            alt="Winter Billboard PNG"
            className="w-full h-auto block"
          />
        </div>

        <div className="flex md:gap-6 sm:gap-5 gap-2">
          <div className="flex-1">
            <Image
              src={WinterMenuDog}
              alt="Image 1"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1">
            <video
              className="w-full h-auto object-contain"
              controls
              autoPlay
              muted
              playsInline
            >
              <source src="/videos/WintermenuVideo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="">
          <Image
            src={WinterMenu2Screen}
            alt="Image 1"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="flex md:gap-6 sm:gap-5 gap-2">
          <div className="flex-1">
            <Image
              src={WinterSpecialMenu}
              alt="Image 1"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1">
            <Image
              src={WinterScreenGif}
              alt="Image 2"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="text-gray-500 sm:p-4 p-2 flex sm:text-md text-xs justify-center">
          Dubai Campaign Key Visual
        </div>

        <div className="">
          <Image
            src={DubaiHorizontalScreen}
            alt="Image 3"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="">
          <Image
            src={DubaiRoadBanner}
            alt="Image 3"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="">
          <Image
            src={NavratriNameTag}
            alt="Image 3"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ShowCasePage;
