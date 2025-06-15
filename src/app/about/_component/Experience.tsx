import pleaseSee from "@/app/public/assets/pleaseSee.jpg";
import misoInc from "@/app/public/assets/MisoInc.jpg";
import diwali from "@/app/public/assets/diwali.png";
import gas from "@/app/public/assets/gas.jpeg";
import Image from "next/image";
import React from "react";

const Experience = () => {
  return (
    <div className="bg-[#f2f1f1] py-16 2xl:px-[145px] xl:px-[120px] lg:px-[90px] md:px-[56px] sm:px-[40px] px-[24px] xl:space-y-[72px] lg:space-y-[60px] md:space-y-[45px] sm:space-y-[32px] space-y-[32px] md:pt-32 sm:pt-28 pt-20">
      <div className="sm:flex lg:gap-16 md:gap-14 sm:gap-12 items-center sm:space-y-0 space-y-4">
        <Image
          src={pleaseSee}
          alt="Haldiram Project"
          className="w-[100px] h-[100px] "
        />
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-xl sm:text-[18px] text-[16px]">
            Please See - Motion Design Intern (June - Aug 2022)
          </h3>
          <p className="2xl:w-[50%] xl:w-[50%] lg:w-[65%] md:w-[75%] text-gray-600 lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px]">
            As a 2D and 3D motion designer, I’ve brought brands like Stranger &
            Sons, Apsara, and Parle to life through web content and brand-driven
            visuals.
          </p>
        </div>
      </div>

      <div className="sm:flex lg:gap-16 md:gap-14 sm:gap-12 items-center sm:space-y-0 space-y-4">
        <Image
          src={misoInc}
          alt="Haldiram Project"
          className="w-[100px] h-[100px]"
        />
        <div className="flex flex-col sm:gap-3 gap-2">
          <h3 className="font-bold text-xl sm:text-[18px] text-[16px]">
            Part time Graphic Designer (June 2023 - March 2025)
          </h3>
          <p className="2xl:w-[50%] xl:w-[50%] lg:w-[65%] md:w-[75%] text-gray-600 lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px]">
            I’ve also worked on a variety of projects — from packaging and
            publications to decks — for brands like Dolphy, Rama Cafe, Planet
            Motors, and more.
          </p>
        </div>
      </div>

      <div className="sm:flex lg:gap-16 md:gap-14 sm:gap-12 items-center sm:space-y-0 space-y-4">
        <Image
          src={gas}
          alt="Haldiram Project"
          className="w-[100px] h-[100px]"
        />
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-xl sm:text-[18px] text-[16px]">
            Creative design Intern (Jan - June 2023)
          </h3>
          <p className="2xl:w-[50%] xl:w-[50%] lg:w-[65%] md:w-[75%] text-gray-600 lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px]">
            For my graduation project, I transformed a typeface from just a
            digital file on the screen into a tangible, experiential PR kit —
            bringing the design to life in a way you can see and touch. After
            that, I worked with Malabar Gold and Diamonds and De Beers
            Forevermark, creating immersive experiences for their flagship
            stores, and also worked on a packaging project for Wyn (What You
            Need).
          </p>
        </div>
      </div>

      <div className="sm:flex lg:gap-16 md:gap-14 sm:gap-12 items-center sm:space-y-0 space-y-4">
        <Image
          src={pleaseSee}
          alt="Haldiram Project"
          className="w-[100px] h-[100px]"
        />
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-xl sm:text-[18px] text-[16px]">
            Junior Creative Designer (Oct 2023 - Present)
          </h3>
          <p className="2xl:w-[50%] xl:w-[50%] lg:w-[65%] md:w-[75%] text-gray-600 lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px]">
            Directed art and design for 19+ festive campaigns for Haldiram’s
            across India and Dubai, creating high-impact visuals across print
            and digital platforms. Developed brand identities for Diageo and
            Sadhev, and crafted digital creative for brands like MILKLAB, Surf
            Excel, and Sadhev.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
