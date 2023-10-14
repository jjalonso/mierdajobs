import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/button";
import { Heading } from "@/components/heading";
import { Paper } from "@/components/paper";

const Thanks = () => {
  return (

    <Paper className="relative mb-10 md:pt-56 md:mt-56 mt-52 pt-44 text-center items-center flex flex-col gap-6 h-fit">
      {/* <div className="relative h-24 flex grow justify-center">
      </div> */}
      <Image
        className="absolute -top-52 md:-top-56"
        src="/group.png"
        width={250}
        height={0}
        alt="Personas saltando con alegria"
      />
      <div className="flex w-full flex-col gap-6 items-center">
        {/* <p>Juntos en la lucha contra la precariedad laboral.</p> */}
        <Heading level={1}>
          Tenemos tu reseña
        </Heading>
        <p>Tu reseña sera revisada y publicada lo antes posible.</p>
        <Link className="w-full md:w-fit mt-8" href="/buscador">
          <Button className="w-full md:w-fit">Volver</Button>
        </Link>
      </div>
    </Paper>
  );
};

export default Thanks;
