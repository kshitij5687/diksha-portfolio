"use client";

import React, { useState } from "react";
import AboutMe from "./_component/About";
import CoverLetter from "./_component/CoverLetter";
import Experience from "./_component/Experience";
import Header from "../components/Header";
import CursorLineTrail from "../components/CursourLine";

const About = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative h-screen">
      <CursorLineTrail />

      {/* Fixed Header: always at the top */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </div>

      {/* Scrollable content flipped vertically */}
      <div className="overflow-y-scroll scroll-smooth h-full rotate-180">
        <div className="rotate-180">
          <Experience />
          {/* This appears at the top when scrolling UP */}
          <CoverLetter />

          {/* Base About section */}
          <AboutMe />
        </div>
      </div>
    </div>
  );
};

export default About;
