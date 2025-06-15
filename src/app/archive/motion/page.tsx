import React from "react";

import ArchivePageNavigation from "../_components/ArchivePageNavigation";
import CursorLineTrail from "../../components/CursourLine";
import MotionShowCase from "./_components/MotionShowCase";
import Header from "../../components/Header";

const Motion = () => {
  return (
    <div className="bg-black">
      <CursorLineTrail />
      <Header />
      <MotionShowCase />
      <ArchivePageNavigation />
    </div>
  );
};

export default Motion;
