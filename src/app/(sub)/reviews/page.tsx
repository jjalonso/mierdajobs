import { FaceFrownIcon, PlusIcon } from "@heroicons/react/24/outline";
import _ from "lodash";
import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

import { getReviews } from "./api/get-reviews/actions";
import { GetReviewsResponse } from "./api/get-reviews/types";
import Review from "./review";

import { Button } from "@/components/button";
import { Heading } from "@/components/heading";
import Paper from "@/components/paper";

interface Props {
  searchParams: {
    id: string
    name: string
  }
}

const Reviews = async ({ searchParams }: Props) => {
  const { id, name } = searchParams;
  if (!id || !name) redirect("/");

  const reviews: GetReviewsResponse = await getReviews(id);

  return (
    <div className="flex w-full flex-col">
      <div className="mb-3 ml-2 mt-16 space-y-2">
        <Heading
          level={1}
          size="xl"
          className="truncate text-white"
        >
          {decodeURIComponent(name)}
        </Heading>
        <div className="text-white">
          {`${reviews.totalReviews} ${reviews.totalReviews === 1 ? "Reseña" : "Reseñas"}`}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-end">
          <Link
            className="w-full md:w-fit"
            href={{
              pathname: "/send",
              query: { id, }
            }}
          >
            <Button
              className="w-full md:w-fit" variant="secondary">
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
          <ul className="flex flex-col gap-5">
            {reviews.reviews.map(review =>
              <Review
                key={review.id}
                data={review}
              />
            )}
          </ul>
        }
      </div>
    </div>
  );
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { id, name } = searchParams;
  return {
    title: `Reseñas de ${decodeURIComponent(name)}`,
    alternates: {
      canonical: `/reviews?id=${id}`,
    }
  }
}

export default Reviews;