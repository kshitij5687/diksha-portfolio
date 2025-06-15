import React from "react";

import CursorLineTrail from "../components/CursourLine";
import PlaySection from "./_components/PlaySection";
import Header from "../components/Header";

const PlayPage = () => {
  return (
    <div className="bg-black">
      <CursorLineTrail />
      <Header />
      <PlaySection />
    </div>
  );
};

export default PlayPage;
