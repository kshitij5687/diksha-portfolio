"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Tarang1 from "@/app/public/assets/tarang/Tarang1.jpg";
import Tarang2 from "@/app/public/assets/tarang/Tarang2.jpg";
import Tarang3 from "@/app/public/assets/tarang/Tarang3.jpg";
import Tarang4 from "@/app/public/assets/tarang/Tarang4.jpg";
import Tarang5 from "@/app/public/assets/tarang/Tarang5.jpg";
import Tarang6 from "@/app/public/assets/tarang/Tarang6.jpg";
import Tarang7 from "@/app/public/assets/tarang/Tarang7.jpg";
import Tarang8 from "@/app/public/assets/tarang/Tarang8.jpg";
import Tarang9 from "@/app/public/assets/tarang/Tarang9.jpg";
import Tarang10 from "@/app/public/assets/tarang/Tarang10.jpg";
import Tarang11 from "@/app/public/assets/tarang/Tarang11.gif";
import Tarang12 from "@/app/public/assets/tarang/Tarang12.jpg";
import Tarang13 from "@/app/public/assets/tarang/Tarang13.jpg";
import Tarang14 from "@/app/public/assets/tarang/Tarang14.png";
import Tarang15 from "@/app/public/assets/tarang/Tarang15.jpg";
import Tarang16 from "@/app/public/assets/tarang/Tarang16.png";
import Tarang17 from "@/app/public/assets/tarang/Tarang17.png";
import Tarang18 from "@/app/public/assets/tarang/Tarang18.jpg";
import Tarang19 from "@/app/public/assets/tarang/Tarang19.jpg";
import Tarang20 from "@/app/public/assets/tarang/Tarang20.jpg";
import Tarang21 from "@/app/public/assets/tarang/Tarang21.jpg";
import Tarang22 from "@/app/public/assets/tarang/Tarang22.jpg";
import Tarang24 from "@/app/public/assets/tarang/Tarang24.gif";
import Tarang25 from "@/app/public/assets/tarang/Tarang25.jpg";
import Image from "next/image";

const TarangShowCasePage = () => {
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
              Tarang - An experiential Type Specimen
            </div>
            <p className="text-[12px] font-medium w-[90%] showcase-animate">
              {`   A font usually lives as an .otf file you download and use — simple
              and done. But what if I told you I’ve transformed a typeface into
              a tangible product? One that doesn’t just evoke curiosity, but
              actively urges you to experiment with it.`}
            </p>
          </div>
          <div className="text-white flex-[30%] text-start space-y-4">
            <div className="lg:text-[24px] md:text-[20px] sm:text-[16px] font-semibold showcase-animate">
              2023
            </div>
            <div>
              <div className="text-[12px] font-medium showcase-animate mb-1">
                Graduation Project : GAS
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2 lg:pt-20 md:pt-16 sm:pt-12 pt-8">
        <div className="">
          <Image
            src={Tarang1}
            alt="Winter Billboard PNG"
            className="w-full h-auto"
          />
        </div>

        <div className="md:space-y-6 sm:space-y-5 space-y-4 flex flex-col mx-auto lg:max-w-[60%] md:max-w-[70%] sm:max-w-[75%] max-w-[90%] lg:py-20 md:py-16 sm:py-12 py-8">
          <h3 className="text-white font-bold md:text-xl sm:text-lg text-md">
            What do you expect when you look at type?
          </h3>
          <p className="text-white font-medium md:text-md text-xs">
            {` This is the question that gave birth to "Tarang" The Introductory
            Kit. I designed an interactive kit that explores showcasing type
            design in an experiential way. It makes use of different graphic
            production methods and reinterpreting traditional formats to
            showcase type as a stencil, a piece or a type specimen. It exhibits
            itself in almost every thinkable way, 2d and 3d spaces as well. `}
          </p>
          <p className="text-white font-medium md:text-md text-xs">
            It is everything everywhere all at once.
          </p>
        </div>

        <div className="">
          <Image
            src={Tarang2}
            alt="Winter Billboard PNG"
            className="w-full h-auto"
          />
        </div>

        <div className="md:space-y-6 sm:space-y-5 space-y-4 flex flex-col mx-auto lg:max-w-[60%] md:max-w-[70%] sm:max-w-[75%] max-w-[90%] lg:py-20 md:py-16 sm:py-12 py-8">
          <h3 className="text-white font-bold md:text-xl sm:text-lg text-md">
            Tarang - A Type Specimen
          </h3>
          <p className="text-white font-medium md:text-md text-xs">
            A visual heavy specimen which flaunts type in a surreal way. It
            breaks the stereotypical methods of designing a specimen and thinks
            about the space it exists in.
          </p>
        </div>

        <div className="flex gap-2">
          <div className="flex-1">
            <Image
              src={Tarang3}
              alt="Winter Billboard"
              className="w-full h-auto object-contain"
            />
            <p className="text-white sm:text-xs text-[8px] md:py-6 sm:py-4 py-2 text-center">
              Front accordion pages{" "}
            </p>
          </div>
          <div className="flex-1">
            <Image
              src={Tarang4}
              alt="LED Screen"
              className="w-full h-auto object-contain"
            />
            <p className="text-white sm:text-xs text-[8px] md:py-6 sm:py-4 py-2 text-center">
              Back accordion pages{" "}
            </p>
          </div>
        </div>

        <div className="flex gap-2 mx-auto md:max-w-[75%] sm:max-w-[80%] max-w-[90%]">
          <div className="flex-1">
            <Image
              src={Tarang5}
              alt="Winter Billboard"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1">
            <Image
              src={Tarang6}
              alt="LED Screen"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1">
            <Image
              src={Tarang7}
              alt="LED Screen"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="flex gap-2 mx-auto md:max-w-[75%] sm:max-w-[80%] max-w-[90%]">
          <div className="flex-1">
            <Image
              src={Tarang8}
              alt="Winter Billboard"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1">
            <Image
              src={Tarang9}
              alt="LED Screen"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="md:space-y-6 sm:space-y-5 space-y-4 flex flex-col mx-auto lg:max-w-[60%] md:max-w-[70%] sm:max-w-[75%] max-w-[90%] lg:py-20 md:py-16 sm:py-12 py-8">
          <h3 className="text-white font-bold md:text-xl sm:text-lg text-md">
            A variety of production techniques
          </h3>
          <p className="text-white font-medium md:text-md text-xs">
            The project approach is defined by the many ways typography
            interacted with the space and the users while making use of varied
            use of mediums and materials. To make it more experiential and
            diverse we used laser cut wood, engraved acrylics, etching,
            embossing and digital printing.
          </p>
        </div>

        <div className="">
          <Image
            src={Tarang10}
            alt="LED Screen"
            className="w-full h-auto object-contain"
          />
          <p className="text-white sm:text-xs text-[8px] md:py-6 sm:py-4 py-2 text-center">
            A paper weight (Handmade)
          </p>
        </div>

        <div className="mx-auto flex max-w-[90%]">
          <Image
            src={Tarang11}
            alt="LED Screen"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="md:space-y-6 sm:space-y-5 space-y-4 flex flex-col mx-auto lg:max-w-[60%] md:max-w-[70%] sm:max-w-[75%] max-w-[90%] lg:py-20 md:py-16 sm:py-12 py-8">
          <h3 className="text-white font-bold md:text-xl sm:text-lg text-md">
            Interactivity through different mediums
          </h3>
          <p className="text-white font-medium md:text-md text-xs">
            A typeface can always surprise the user by the way it is used and
            especially the way it can affect the public perception through its
            interactivity.
          </p>
          <p className="text-white font-medium md:text-md text-xs">
            This limited edition experimental stencil encourages the user to try
            and create something new. It motivates them to move outside of their
            screens and experiment in the space.
          </p>
        </div>

        <div className="">
          <Image
            src={Tarang12}
            alt="LED Screen"
            className="w-full h-auto object-contain"
          />
          <p className="text-white sm:text-xs text-[8px] md:py-6 sm:py-4 py-2 text-center">
            Experimental Type Stencil
          </p>
        </div>

        <div className="">
          <Image
            src={Tarang13}
            alt="LED Screen"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="flex gap-2 mx-auto max-w-[90%] lg:pt-16 md:pt-12 sm:pt-10 pt-3">
          <div className="flex-1">
            <Image
              src={Tarang14}
              alt="Winter Billboard"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1">
            <Image
              src={Tarang15}
              alt="LED Screen"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1">
            <Image
              src={Tarang16}
              alt="LED Screen"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="md:space-y-6 sm:space-y-5 space-y-4 flex flex-col mx-auto lg:max-w-[60%] md:max-w-[70%] sm:max-w-[75%] max-w-[90%] lg:py-20 md:py-16 sm:py-12 py-8">
          <h3 className="text-white font-bold md:text-xl sm:text-lg text-md">
            Tarang - The Introductory Kit.
          </h3>
          <p className="text-white font-medium md:text-md text-xs">
            Tarang is a display typeface designed at G.A.S. They wanted to
            introduce this typeface and send out this concept product to other
            design studios and professionals.
          </p>
          <p className="text-white font-medium md:text-md text-xs">
            The kit consisted of a type specimen, an experimental stencil, a
            gift offering piece and the link to download and preview the
            typeface from the website. And last but not the least to get
            feedbacks from the users.
          </p>
        </div>

        <div className="">
          <Image
            src={Tarang17}
            alt="LED Screen"
            className="w-full h-auto object-contain"
          />
          <p className="text-white sm:text-xs text-[8px] md:py-6 sm:py-4 py-2 text-center">
            The kit{" "}
          </p>
        </div>

        <div className="flex gap-2 lg:py-10 md:py-8 sm:py-6 py-4">
          <div className="flex-1">
            <Image
              src={Tarang18}
              alt="Winter Billboard"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1">
            <Image
              src={Tarang19}
              alt="LED Screen"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1">
            <Image
              src={Tarang20}
              alt="LED Screen"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1">
            <Image
              src={Tarang21}
              alt="LED Screen"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="md:space-y-6 sm:space-y-5 space-y-4 flex flex-col mx-auto lg:max-w-[60%] md:max-w-[70%] sm:max-w-[75%] max-w-[90%] lg:py-20 md:py-16 sm:py-12 py-8">
          <h3 className="text-white font-bold md:text-xl sm:text-lg text-md">
            Website Design and Development
          </h3>
          <p className="text-white font-medium md:text-md text-xs">
            To reach out and promote the typeface we developed a website in
            order to make the most out of the font. The user can download and
            leave a feedback on the website itself.
          </p>
        </div>

        <div className="">
          <Image
            src={Tarang22}
            alt="LED Screen"
            className="w-full h-auto object-contain"
          />
          <p className="text-white sm:text-xs text-[8px] md:py-6 sm:py-4 py-2 text-center">
            The website scroll
          </p>
        </div>

        <div className="md:space-y-6 sm:space-y-5 space-y-4 flex flex-col mx-auto lg:max-w-[60%] md:max-w-[70%] sm:max-w-[75%] max-w-[90%] lg:py-20 md:py-16 sm:py-12 py-6">
          <h3 className="text-white font-bold md:text-xl sm:text-lg text-md">
            Animations for the website
          </h3>
          <p className="text-white font-medium md:text-md text-xs">
            The landing page was designed with these animations. These
            animations became the brand assets and help promote the typeface
            better on social media.
          </p>
        </div>

        <video
          className="w-full h-auto object-contain"
          controls
          autoPlay
          muted
          playsInline
        >
          <source src="/videos/Tarang23.mp4" type="video/mp4" />
        </video>

        <div className="">
          <Image
            src={Tarang24}
            alt="LED Screen"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="">
          <Image
            src={Tarang25}
            alt="LED Screen"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default TarangShowCasePage;
