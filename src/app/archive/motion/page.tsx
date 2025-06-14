import CursorLineTrail from "../../components/CursourLine";
import Header from "../../components/Header";
import React from "react";

import ArchivePageNavigation from "../_components/ArchivePageNavigation";
import MotionShowCase from "./_components/MotionShowCase";

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
