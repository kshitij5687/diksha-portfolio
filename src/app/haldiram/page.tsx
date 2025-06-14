import React from "react";

import PageNavigation from "../components/Pagenavigation";
import CursorLineTrail from "../components/CursourLine";
import ShowCasePage from "./_component/ShowCasePage";
import Header from "../components/Header";

const Haldiram = () => {
  return (
    <div className="bg-black">
      <CursorLineTrail />
      <Header />
      <ShowCasePage />
      <PageNavigation />
    </div>
  );
};

export default Haldiram;
