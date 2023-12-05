"use client";

import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

import { Button } from "@/components/button";
import { useShare } from "@/hooks/use-share";

interface Props {
  shareData: ShareData;
  className?: string;
};

const ShareBanner = ({ shareData, className }: Props) => {
  const { sharePage } = useShare(shareData);

  return (

    <div
      onClick={sharePage}
      className={twMerge("relative flex w-fit cursor-pointer flex-col items-center gap-4", className)}
    >
      <Image
        src="/objects/hands-love.png"
        width="100"
        height="0"
        alt="Cool hand"
      />
      <Button
        className="-rotate-6"
        variant="secondary"
      >
        Comparte
      </Button>
    </div>
  )
};

export default ShareBanner;
