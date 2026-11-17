"use client";

import React, { useState } from "react";

import PageNavigation from "../components/Pagenavigation";
import CursorLineTrail from "../components/CursourLine";
import Header from "../components/Header";
import SpidermanLogo from "@/app/public/assets/spiderman/SpidermanLogo.png";
import SpidermanShowCasePage from "./_components/SpidermanShowCasePage";

const Spiderman = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-black">
      <CursorLineTrail />
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />{" "}
      <SpidermanShowCasePage />
      <PageNavigation />
    </div>
  );
};

export default Spiderman;
