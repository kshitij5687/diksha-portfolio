import React from "react";

import ArchivePageNavigation from "../_components/ArchivePageNavigation";
import IllustrationShowCase from "./_components/IllustrationShowCase";
import CursorLineTrail from "../../components/CursourLine";
import Header from "../../components/Header";

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
