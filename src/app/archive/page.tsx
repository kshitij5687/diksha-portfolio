"use client";
import React, { useState } from "react";

import CursorLineTrail from "../components/CursourLine";
import PlaySection from "./_components/PlaySection";
import Header from "../components/Header";

const PlayPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-black">
      <CursorLineTrail />
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <PlaySection />
    </div>
  );
};

export default PlayPage;
