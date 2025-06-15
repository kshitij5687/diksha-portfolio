"use client";
import React, { useState } from "react";

import ArchivePageNavigation from "../_components/ArchivePageNavigation";
import CursorLineTrail from "../../components/CursourLine";
import MotionShowCase from "./_components/MotionShowCase";
import Header from "../../components/Header";

const Motion = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-black">
      <CursorLineTrail />
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <MotionShowCase />
      <ArchivePageNavigation />
    </div>
  );
};

export default Motion;
