"use client";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import { useRouter, usePathname } from "next/navigation";

const ArchivePageNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  const pages = ["/archive/motion", "/archive/illustration"];
  const currentIndex = pages.indexOf(pathname);

  const handlePrevious = () => {
    const prevIndex = currentIndex <= 0 ? pages.length - 1 : currentIndex - 1;
    router.push(pages[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = currentIndex >= pages.length - 1 ? 0 : currentIndex + 1;
    router.push(pages[nextIndex]);
  };

  return (
    <div className="flex justify-between items-center sm:px-12 sm:py-8 px-4 py-3">
      <div className="flex items-center">
        <RiArrowLeftSLine size={16} className="text-white cursor-pointer" />
        <button
          onClick={handlePrevious}
          className="text-white sm:px-6 px-3 py-2 hover:scale-110 transition-transform"
        >
          Previous
        </button>
      </div>
      <div className="flex items-center">
        <button
          onClick={handleNext}
          className="text-white sm:px-6 px-3 py-2 hover:scale-110 transition-transform"
        >
          Next
        </button>
        <RiArrowRightSLine size={16} className="text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default ArchivePageNavigation;
