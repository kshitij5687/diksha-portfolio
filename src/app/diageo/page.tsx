import React from "react";

import DiageoShowCasePage from "./_component/DiageoShowCasePage";
import PageNavigation from "../components/Pagenavigation";
import CursorLineTrail from "../components/CursourLine";
import Header from "../components/Header";

const Diageo = () => {
  return (
    <div className="bg-black">
      <CursorLineTrail />
      <Header />
      <DiageoShowCasePage />
      <PageNavigation />
    </div>
  );
};

export default Diageo;
