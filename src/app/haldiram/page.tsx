"use client";

import React, { useState } from "react";

import PageNavigation from "../components/Pagenavigation";
import CursorLineTrail from "../components/CursourLine";
import ShowCasePage from "./_component/ShowCasePage";
import Header from "../components/Header";

const Haldiram = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-black">
      <CursorLineTrail />
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <ShowCasePage />
      <PageNavigation />
    </div>
  );
};

export default Haldiram;
