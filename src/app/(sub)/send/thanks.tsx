import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/button";
import { Heading } from "@/components/heading";
import Paper from "@/components/paper";

interface Props {
  gplace: string;
}

const Thanks = ({ gplace }: Props) =>
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
        className="mt-8 w-full" href={`/reviews?id=${gplace}`}>
        <Button className="w-full">
          Volver
        </Button>
      </Link>
    </Paper>
  </div>
// <Paper className="relative mb-10 mt-52 flex h-fit flex-col items-center gap-6 pt-52 text-center md:mt-56 md:max-w-lg md:pt-52">
//   <Image
//     className="absolute -top-48 md:-top-56"
//     src="/objects/balloons.png"
//     width={200}
//     height={0}
//     alt="Personas saltando con alegria"
//   />
//   <div className="flex w-full flex-col items-center gap-6">
//     {/* <p>Juntos en la lucha contra la precariedad laboral.</p> */}
//     <Heading level={1}>
//       Tenemos tu reseña
//     </Heading>
//     <p>Tu reseña sera revisada y publicada lo antes posible.</p>
//     <Link
//       className="mt-8 w-full" href={backLink}>
//       <Button className="w-full">
//         Volver
//       </Button>
//     </Link>
//   </div>
// </Paper>

export default Thanks;
