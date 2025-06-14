"use client";

const Scroll = () => (
  <svg
    viewBox="0 0 900 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute top-48 left-[10vw] w-[50vw]"
  >
    <path
      d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
      fill="#D9D9D9"
    />
    <mask
      id="mask0"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="900"
      height="10"
    >
      <path
        d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
        fill="#D9D9D9"
      />
    </mask>
    <g mask="url(#mask0)">
      <rect className="mask" y="-49" height="99" fill="black" />
    </g>
  </svg>
);

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Slider = () => {
  useEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>(".scrollx section");
    const mask = document.querySelector(".mask");

    const scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".scrollx",
        pin: true,
        scrub: 1,
        end: "+=3000",
      },
    });

    gsap.to(mask, {
      width: "100%",
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top left",
        scrub: 1,
      },
    });

    sections.forEach((section) => {
      const texts = section.querySelectorAll(".anim");
      if (texts.length === 0) return;
      gsap.from(texts, {
        y: -130,
        opacity: 0,
        duration: 2,
        ease: "elastic",
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          containerAnimation: scrollTween,
          start: "left center",
        },
      });
    });
  }, []);

  return (
    <div className="wrapper relative overflow-x-hidden">
      <div className="scrollx flex w-[300vw] relative">
        <Scroll />
        {[1, 2, 3].map((id) => (
          <section key={id} className="w-screen px-[10vw] py-[20vw] h-screen">
            <span className="anim text-xl">Advanced</span>
            <h1 className="anim text-4xl font-bold">Signify Elegance</h1>
            <div className="anim flex gap-12">
              <p className="w-1/2">
                Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit
                sed massa turpis in.
              </p>
              <p className="w-1/2">
                Sit praesent arcu leo lectus pellentesque. Ornare elit orci
                morbi volutpat.
              </p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Slider;
