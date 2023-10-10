import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/button";
import { Heading } from "@/components/heading";

interface Props {
  place: string;
};

const Thanks = ({ place }: Props) => {
  return (
    <div>
      <Heading
        size="xl"
        level={1}
        className="mb-6 md:mb-12"
      >
        Tenemos tu reseña
      </Heading>
      <div className="flex flex-col md:flex-row-reverse">
        <div className="relative flex grow justify-center">
          <Image
            className="mb-12 md:absolute md:-inset-y-60"
            src="/group.png" width={250} height={506} alt="Personas saltando con alegria" />
        </div>
        <div className="flex w-full flex-col gap-3 md:w-fit">
          <p>Gracias por luchar contra la precariedad laboral.</p>
          <p>El mundo es mejor con personas como tú.</p>
          <Link href={`/reviews/${place}`}>
            <Button className="mt-6 w-full md:w-fit">Ir a mi reseña</Button>
          </Link>
        </div>
      </div>

    </div >
  );
};

export default Thanks;
