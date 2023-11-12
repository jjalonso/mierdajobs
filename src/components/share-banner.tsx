"use client";

import Image from "next/image";
import React from "react";

import { Button } from "@/components/button";
import { useShare } from "@/hooks/use-share";

interface Props {
  shareData: ShareData;
};

const ShareBanner = ({ shareData }: Props) => {
  const { sharePage, canShare } = useShare(shareData);

  return canShare ? <div className="mt-12 flex grow items-end justify-center px-7">
    <div className="flex items-center gap-4 ">
      <Image
        className="relative"
        src="/hand-fist.png"
        width="100"
        height="0"
        alt="Cool hand"
      />
      <div className="flex flex-col items-center gap-2">
        <Button
          variant="secondary"
          onClick={sharePage}
        >
          Comparte
        </Button>
        <div className="text-center text-sm text-white">Lucha y ganaremos</div>
      </div>
    </div>
  </div>
    : null;
};

export default ShareBanner;
