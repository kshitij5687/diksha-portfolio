import React from "react";

import PageNavigation from "../components/Pagenavigation";
import ShuttrShowCase from "./_component/ShuttrShowCase";
import CursorLineTrail from "../components/CursourLine";
import Header from "../components/Header";

const Diageo = () => {
  return (
    <div className="bg-black">
      <CursorLineTrail />
      <Header />
      <ShuttrShowCase />
      <PageNavigation />
    </div>
  );
};

export default Diageo;
