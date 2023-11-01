import { FaceFrownIcon } from "@heroicons/react/24/outline";
import _ from "lodash";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import React from "react";

import Review from "../reviews/review";

import { getReviews } from "@/app/api/_reviews/get-reviews/actions";
import { GetReviewsResponse } from "@/app/api/_reviews/get-reviews/types";
import authOptions from "@/app/api/auth/_options/options";
import { Heading } from "@/components/heading";
import Paper from "@/components/paper";

const Reviews = async () => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin?callbackUrl=/my-reviews");

  // Temporary till new API
  const reviews: GetReviewsResponse = await getReviews("ChIJo-UIxefPDQ0RAJLc7b2of74");

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
          {`${reviews.totalReviews} ${reviews.totalReviews === 1 ? "Reseña" : "Reseñas"}`}
        </div>
      </div>

      {_.isEmpty(reviews.reviews) ?
        <Paper className="flex flex-col items-center gap-4 text-center text-gray-dark">
          <FaceFrownIcon className="h-12 w-12 text-gray-light" />
          Este sitio aún no tiene reseñas
        </Paper>
        :
        <ul className="flex flex-col gap-5">
          {reviews.reviews.map(review =>

            <Review
              key={review.id}
              review={review}
            />
          )}
        </ul>
      }
    </div>
  );
};

export default Reviews;