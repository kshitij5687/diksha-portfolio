import Link from "next/link";
import React from "react";

const CoverLetter = () => {
  return (
    <div className="bg-[#f2f1f1] sm:pt-20 pt-16 border border-t-gray-300">
      <div className=" 2xl:px-[145px] xl:px-[120px] lg:px-[90px] md:px-[56px] sm:px-[40px] px-[24px] md:space-y-0 space-y-8 md:flex 2xl:gap-[70px] xl:gap-[100px] lg:gap-[100px] md:gap-[50px]">
        <div className="flex-[70%]">
          <h4 className="text-xl font-semibold mb-4">What I do best</h4>
          <p className="mb-4 text-gray-600 2xl:w-[80%] xl:w-[80%] lg:w-[90%] md:w-[95%] w-full 2xl:text-[18px] lg:text-md sm:text-[14px] text-[13px]">
            {`I thrive at the intersection of storytelling and design, where ideas
            find their voice and visuals carry meaning. My strengths lie in art
            direction, building brand identities, and shaping campaigns for
            brands like Haldiram’s, Diageo, MILKLAB, Surf Excel, and Sadhev. I
            have a keen interest in typography, and I like to begin every
            project with a simple yet unexpected thought that opens space
            for something bigger, better, and more intentional to grow.`}
          </p>
          <p className="text-gray-600 xl:w-[80%] lg:w-[90%] w-full 2xl:text-[18px] md:w-[95%] lg:text-md sm:text-[14px] text-[13px]">
            {`When I’m not designing, you’ll likely find me on a trek somewhere
            remote or watching my daily dose of cinema (yes, one film a day—it's
            a thing). I’m known for being pretty loud and full of
            energy—sometimes a bit too much. They say
            it's my most lovable yet annoying trait. Here's my `}
            <span className="font-bold">
              <Link
                href="https://drive.google.com/file/d/1-3cPTLx0vP2FLIbk9L0foEnq2qdFVHB3/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-black"
              >
                resume
              </Link>
            </span>
            {`. If you're a founder or someone who values, I’d love to connect. Let’s make something
            with intention or the very least, have a great conversation. You can
            reach here `}
            <a
              href="mailto:hello.tingree@gmail.com"
              className="text-black font-bold underline"
            >
              hello.tingree@gmail.com
            </a>
          </p>
        </div>
        <div className="flex-[30%] flex flex-col">
          <p className="font-semibold mb-2 text-xl">Select feature</p>
          <ul className="space-y-2 text-sm text-gray-700 text-start">
            <li>
              <Link
                href="https://www.creativegaga.com/artist/diksha-sharma"
                target="_blank"
                rel="noopener noreferrer"
                className="2xl:text-[18px] lg:text-[16px] sm:text-[14px] text-[13px] underline"
              >
                Creative gaga
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CoverLetter;
