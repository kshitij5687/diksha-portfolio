import React from "react";

import TarangShowCasePage from "./_components/TarangShowCasePage";
import PageNavigation from "../components/Pagenavigation";
import CursorLineTrail from "../components/CursourLine";
import Header from "../components/Header";

const Diageo = () => {
  return (
    <div className="bg-black">
      <CursorLineTrail />
      <Header />
      <TarangShowCasePage />
      <PageNavigation />
    </div>
  );
};

export default Diageo;
