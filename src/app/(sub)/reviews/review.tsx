import Image from "next/image";
import React from "react";

import { Review } from "../../api/_reviews/get-reviews/types";

import useReviewAdapter from "./hooks/use-review-adapter";
import ValueBlock from "./value-block";

import Paper from "@/components/paper";

interface Props {
  review: Review;
}

const Review = ({ review }: Props) => {
  const adaptedReview = useReviewAdapter(review);

  return (
    <Paper className="flex h-fit flex-col gap-6">
      <li className="flex flex-col gap-8 py-8 md:flex-row">

        {/* Desktop avatar */}
        <Image
          className="hidden h-[100px] w-[100px] md:flex"
          src={adaptedReview.avatar}
          quality={100}
          width={100}
          height={100}
          alt="Avatar"
        />

        <div className="flex grow flex-col gap-4">
          <div className="flex grow items-center gap-4">
            {/* Mobile avatar */}
            <Image
              className="h-[50px] w-[50px] md:hidden"
              src={adaptedReview.avatar}
              quality={100}
              width={50}
              height={50}
              alt="Avatar"
            />

            <div className="flex flex-col">
              <p className="font-bold">{adaptedReview.contract_fraud.title}</p>
              <p className="text-sm text-gray">{adaptedReview.created_at}</p>
            </div>
          </div>

          <p className="mb-6">{adaptedReview.comment}</p>

          <div className="flex grow gap-3 text-sm">
            <ValueBlock
              className="w-1/3"
              title="Jornada" value={`${adaptedReview.working_hours_pw} h/semana`} />
            <ValueBlock
              className="w-1/3"
              title="Vacaciones" value={`${adaptedReview.annual_leave} dias/año`} />
            <ValueBlock
              className="w-1/3"
              title="Salario" value={`${adaptedReview.salary_ph} €/hora`} />
          </div>
        </div>
      </li >
    </Paper>
  )
}

export default Review;