import React from "react";

import ShareBanner from "./share-banner";
import { shareData } from "./values";

import { Heading } from "@/components/heading";

const LandingElements = () => {
  return (
    <>
      <Heading
        className="text-center text-white"
        level={2}
        size="xl"
      >
        Descubre y denuncia ofertas laborales ilegales en una plataforma colaborativa.
      </Heading>
      <ShareBanner shareData={shareData} />
    </>
  );
};

export default LandingElements;
