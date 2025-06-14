import React from "react";

import PageNavigation from "../components/Pagenavigation";
import DiwaliShowCase from "./_components/DiwaliShowCase";
import CursorLineTrail from "../components/CursourLine";
import Header from "../components/Header";

const HaldiramDiwali = () => {
  return (
    <div className="bg-black">
      <CursorLineTrail />
      <Header />
      <DiwaliShowCase />
      <PageNavigation />
    </div>
  );
};

export default HaldiramDiwali;
