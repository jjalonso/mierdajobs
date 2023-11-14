import _ from "lodash";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import React from "react";

import Review from "./review";

import authOptions from "@/app/(auth)/api/auth/_options/options";
import getMyReviews from "@/app/(sub)/my-reviews/data/actions";
import { Button } from "@/components/button";
import { Heading } from "@/components/heading";
import Paper from "@/components/paper";

const MyReviews = async () => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin?callbackUrl=/my-reviews");

  const myreviews = await getMyReviews();

  return (
    <div className="flex w-full flex-col">
      <div className="mb-12 ml-2 mt-16 space-y-2">
        <Heading
          level={1}
          size="xl"
          className="truncate text-white"
        >
          Mis reseñas
        </Heading>
        <div className="text-white">
          {`${myreviews.totalReviews} ${myreviews.totalReviews === 1 ? "Reseña" : "Reseñas"}`}
        </div>
      </div>

      {_.isEmpty(myreviews.reviews) ?
        <Paper className="flex flex-col items-center gap-4 text-center text-gray-dark">
          <Image
            className=""
            src="/objects/roll.png"
            width="100"
            height="0"
            alt="Silla vacia"
          />
          <div className="mt-4 space-y-2">
            <p>Aún no tienes reseñas</p>
            <p>Estamos esperando que compartas tus experiencias</p>
          </div>

          <Link href="/">
            <Button
              className="mt-6 w-full md:w-fit" variant="primary">
              Empieza a buscar negocios
            </Button>
          </Link>
        </Paper>
        :
        <ul className="flex flex-col gap-5">
          {myreviews.reviews.map(review =>

            <Review
              key={review.id}
              data={review}
            />
          )}
        </ul>
      }
    </div>
  );
};

export default MyReviews;
export const metadata: Metadata = {
  title: "Mis reseñas",
}