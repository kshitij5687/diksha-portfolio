import illustrations from "@/app/public/assets/IllustrationsPosture.jpg";
import Portfolio from "@/app/public/assets/3Dportfolio.jpg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PlaySection = () => {
  return (
    <div className="bg-black min-h-screen">
      <div>
        <div className="flex flex-col sm:flex-row sm:space-y-0 space-y-12 sm:gap-8 items-end md:px-10 sm:px-8 px-4 pt-16 mt-4 sm:mt-0">
          {/* Tarang Section */}
          <Link
            href="/archive/motion"
            className="w-full sm:w-[60%] md:w-[60%] lg:w-[65%] xl:w-[70%] cursor-pointer"
          >
            <div className="cursor-pointer">
              <div className="pb-4 flex flex-col gap-1">
                <p className="text-white font-normal text-[14px] sm:text-[18px]">
                  Motion & 3D Design
                </p>
              </div>
              <div className="overflow-hidden">
                <Image
                  src={Portfolio}
                  alt="Project"
                  className="w-full h-auto transition-transform duration-300 hover:scale-[1.05]"
                />
              </div>
            </div>
          </Link>

          {/* Haldiram Diwali Section */}
          <Link
            href="/archive/illustration"
            className="w-full sm:w-[40%] md:w-[40%] lg:w-[35%] xl:w-[30%] cursor-pointer"
          >
            <div className="cursor-pointer">
              <div className="pb-4 flex flex-col gap-1">
                <p className="text-white font-normal text-[14px] sm:text-[18px]">
                  Illustrations and Posters
                </p>
              </div>
              <div className="overflow-hidden">
                <Image
                  src={illustrations}
                  alt="abcd"
                  className="w-full h-auto transition-transform duration-300 hover:scale-[1.05]"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlaySection;
