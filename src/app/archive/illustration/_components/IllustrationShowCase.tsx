import Illustrations8 from "@/app/public/assets/illustration/illus8.jpg";
import Illustrations7 from "@/app/public/assets/illustration/illus7.jpg";
import Illustrations6 from "@/app/public/assets/illustration/illus6.jpg";
import Illustrations5 from "@/app/public/assets/illustration/illus5.png";
import Illustrations4 from "@/app/public/assets/illustration/illus4.jpg";
import Illustrations3 from "@/app/public/assets/illustration/illus3.jpg";
import Illustrations2 from "@/app/public/assets/illustration/illus2.png";
import Illustrations1 from "@/app/public/assets/illustration/illus1.jpg";
import Image from "next/image";
import React from "react";

const IllustrationShowCase = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="lg:py-20 md:py-16 sm:py-12 py-16 lg:px-12 md:px-10 sm:px-8 px-4 lg:space-y-12 md:space-y-10 sm:space-y-8 space-y-3">
        <div className="flex lg:gap-10 md:gap-8 sm:gap-8 gap-3">
          <div className="flex-1">
            <Image
              src={Illustrations1}
              alt="Image 1"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1">
            <Image
              src={Illustrations2}
              alt="Image 2"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="flex lg:gap-10 md:gap-8 sm:gap-8 gap-3">
          <div className="flex-1">
            <Image
              src={Illustrations3}
              alt="Image 1"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1">
            <Image
              src={Illustrations4}
              alt="Image 2"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="flex lg:gap-10 md:gap-8 sm:gap-8 gap-3">
          <div className="flex-1">
            <Image
              src={Illustrations5}
              alt="Image 1"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1">
            <Image
              src={Illustrations6}
              alt="Image 2"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="flex lg:gap-10 md:gap-8 sm:gap-8 gap-3">
          <div className="flex-1">
            <Image
              src={Illustrations7}
              alt="Image 1"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1">
            <Image
              src={Illustrations8}
              alt="Image 2"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IllustrationShowCase;
