import { FaceFrownIcon, PlusIcon } from "@heroicons/react/24/outline";
import _ from "lodash";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

import { getReviews } from "../../api/_reviews/get-reviews/actions";
import { GetReviewsResponse } from "../../api/_reviews/get-reviews/types";

import Review from "./review";

import BackButton from "@/components/back-button";
import { Button } from "@/components/button";
import { Heading } from "@/components/heading";
import Paper from "@/components/paper";

interface Props {
  searchParams: Record<string, string>
}

const Reviews = async ({ searchParams }: Props) => {
  const { id } = searchParams;
  if (!id) redirect("/");

  const reviews: GetReviewsResponse = await getReviews(id);

  return (
    <div className="flex w-full flex-col">
      <div className="mb-12 ml-2 mt-16 space-y-2">
        <Heading
          level={1}
          size="xl"
          className="truncate text-white"
        >
          {reviews.name}
        </Heading>
        <div className="text-white">
          {`${reviews.totalReviews} ${reviews.totalReviews === 1 ? "Reseña" : "Reseñas"}`}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between">
          <BackButton
            variant="ghost"
            className="hidden min-w-fit md:flex">
            Volver
          </BackButton>
          <Link
            href={`/send?id=${id}`} className="w-full md:w-fit">
            <Button
              className="w-full md:w-fit" variant="primary">
              <PlusIcon className="h-6 w-6" />
              Añadir una reseña
            </Button>
          </Link>
        </div>
        {_.isEmpty(reviews.reviews) ?
          <Paper className="flex flex-col items-center gap-4 text-center text-gray-dark">
            <FaceFrownIcon className="h-12 w-12 text-gray-light" />
            Este sitio aún no tiene reseñas
          </Paper>
          :
          <ul className="flex flex-col gap-3">
            {reviews.reviews.map(review =>
              <Review
                key={review.id}
                review={review}
              />
            )}
          </ul>
        }
      </div>
    </div >
  );
};

export default Reviews;