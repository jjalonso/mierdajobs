import { FaceFrownIcon } from "@heroicons/react/24/outline";
import _ from "lodash";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import React from "react";

import Review from "./review";

import authOptions from "@/app/(auth)/api/auth/_options/options";
import getMyReviews from "@/app/(sub)/my-reviews/data/actions";
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
          <FaceFrownIcon className="h-12 w-12 text-gray-light" />
          Este sitio aún no tiene reseñas
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