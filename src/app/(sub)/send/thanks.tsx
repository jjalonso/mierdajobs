import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/button";
import { Heading } from "@/components/heading";
import Paper from "@/components/paper";

interface Props {
  backUrl: string;
}

const Thanks = ({ backUrl }: Props) =>
  <div className="flex w-full grow flex-col items-center">
    <Paper className="relative mt-12 h-56 w-full rounded-b-none bg-secondary bg-center md:mt-20 md:max-w-lg">
      <Image
        className="absolute -bottom-20 right-10"
        src="/objects/balloons.png"
        width="200"
        quality={100}
        height="0"
        alt="Microfono"
      />
    </Paper>

    <Paper className="flex w-full flex-col gap-8 rounded-t-none md:max-w-lg">
      <Heading level={1}>
        Tenemos tu reseña
      </Heading>
      <p>Tu reseña sera revisada y publicada lo antes posible.</p>
      <Link
        className="mt-8 w-full"
        href={backUrl}
      >
        <Button className="w-full">
          Volver
        </Button>
      </Link>
    </Paper>
  </div>

export default Thanks;
