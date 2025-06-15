// Home.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import CursorLine from "./components/CursourLine";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
// import HorizontalSnapScroll from "./components/Slider2";
import Intro from "./components/Intro";
import Project from "./components/Project";

export default function Home() {
  const [showHeader, setShowHeader] = useState(true);
  const [introActive, setIntroActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // NEW!

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      if (mobileMenuOpen) {
        // Prevent scroll effect when menu is open
        return;
      }
      const st = window.scrollY || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        // Scrolling down
        setShowHeader(true);
      } else {
        // Scrolling up
        if (!introActive) {
          setShowHeader(true);
        } else {
          setShowHeader(false);
        }
      }
      lastScrollTop = st <= 0 ? 0 : st;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [introActive, mobileMenuOpen]);

  const projectsRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <CursorLine />

      {/* Animate header show/hide */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-opacity duration-500 ${
          showHeader ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Header
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </div>

      <div className="overflow-y-scroll scroll-smooth rotate-180 h-screen">
        <div className="rotate-180">
          <Main />
        </div>
        <div className="rotate-180">
          <Intro setIntroActive={setIntroActive} />
        </div>
        <div
          className="rotate-180 bg-[#f2f1f1] text-center sm:pt-20 pt-6"
          ref={projectsRef}
          id="work-section"
        >
          <span className="text-black sm:text-sm text-xs">
            Scroll to see work
          </span>{" "}
          <br />
          <span className="text-gray-500 sm:text-sm text-xs">
            2022 - Present
          </span>
        </div>
        <div className="rotate-180">
          <Project />
        </div>
        <div className="rotate-180">
          <Footer />
        </div>
      </div>
    </div>
  );
}
