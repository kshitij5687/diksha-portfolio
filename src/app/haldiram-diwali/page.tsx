"use client";

import React, { useState } from "react";

import PageNavigation from "../components/Pagenavigation";
import DiwaliShowCase from "./_components/DiwaliShowCase";
import CursorLineTrail from "../components/CursourLine";
import Header from "../components/Header";

const HaldiramDiwali = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-black">
      <CursorLineTrail />
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <DiwaliShowCase />
      <PageNavigation />
    </div>
  );
};

export default HaldiramDiwali;
