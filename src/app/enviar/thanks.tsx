import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/button";
import { Heading } from "@/components/heading";
import Paper from "@/components/paper";

const Thanks = () => {
  return (

    <Paper className="relative mb-10 mt-52 flex h-fit flex-col items-center gap-6 pt-44 text-center md:mt-56 md:pt-56">
      {/* <div className="relative h-24 flex grow justify-center">
      </div> */}
      <Image
        className="absolute -top-52 md:-top-56"
        src="/group.png"
        width={250}
        height={0}
        alt="Personas saltando con alegria"
      />
      <div className="flex w-full flex-col items-center gap-6">
        {/* <p>Juntos en la lucha contra la precariedad laboral.</p> */}
        <Heading level={1}>
          Tenemos tu reseña
        </Heading>
        <p>Tu reseña sera revisada y publicada lo antes posible.</p>
        <Link
          className="mt-8 w-full md:w-fit" href="/buscador">
          <Button className="w-full md:w-fit">Volver</Button>
        </Link>
      </div>
    </Paper>
  );
};

export default Thanks;
