"use client";
import React, { useState } from "react";

import PageNavigation from "../components/Pagenavigation";
import ShuttrShowCase from "./_component/ShuttrShowCase";
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
      />
      <ShuttrShowCase />
      <PageNavigation />
    </div>
  );
};

export default Diageo;
