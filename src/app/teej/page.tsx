import React from "react";

import PageNavigation from "../components/Pagenavigation";
import CursorLineTrail from "../components/CursourLine";
import TeejShowCase from "./_components/TeejShowCase";
import Header from "../components/Header";

const Teej = () => {
  return (
    <div className="bg-black">
      <CursorLineTrail />
      <Header />
      <TeejShowCase />
      <PageNavigation />
    </div>
  );
};

export default Teej;
