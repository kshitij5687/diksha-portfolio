"use client";

import React, { useState } from "react";

import TarangShowCasePage from "./_components/TarangShowCasePage";
import PageNavigation from "../components/Pagenavigation";
import CursorLineTrail from "../components/CursourLine";
import Header from "../components/Header";

const Diageo = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-black">
      <CursorLineTrail />
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />{" "}
      <TarangShowCasePage />
      <PageNavigation />
    </div>
  );
};

export default Diageo;
