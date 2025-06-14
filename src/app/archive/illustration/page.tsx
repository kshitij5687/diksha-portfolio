import CursorLineTrail from "@/app/components/CursourLine";
import Header from "@/app/components/Header";
import React from "react";

import ArchivePageNavigation from "../_components/ArchivePageNavigation";
import IllustrationShowCase from "./_components/IllustrationShowCase";

const Illustrations = () => {
  return (
    <div className="bg-black">
      {" "}
      <CursorLineTrail />
      <Header />
      <IllustrationShowCase />
      <ArchivePageNavigation />
    </div>
  );
};

export default Illustrations;
