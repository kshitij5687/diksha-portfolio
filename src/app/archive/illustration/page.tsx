"use client";

import React, { useState } from "react";

import ArchivePageNavigation from "../_components/ArchivePageNavigation";
import IllustrationShowCase from "./_components/IllustrationShowCase";
import CursorLineTrail from "../../components/CursourLine";
import Header from "../../components/Header";

const Illustrations = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-black">
      {" "}
      <CursorLineTrail />
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <IllustrationShowCase />
      <ArchivePageNavigation />
    </div>
  );
};

export default Illustrations;
