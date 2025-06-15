"use client";

import React, { useState } from "react";

import PageNavigation from "../components/Pagenavigation";
import CursorLineTrail from "../components/CursourLine";
import TeejShowCase from "./_components/TeejShowCase";
import Header from "../components/Header";

const Teej = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-black">
      <CursorLineTrail />
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />{" "}
      <TeejShowCase />
      <PageNavigation />
    </div>
  );
};

export default Teej;
