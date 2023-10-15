import Image from "next/image";
import React from "react";

import { Review as ReviewType } from "../api/reviews/types";

import useReviewAdapter from "./hooks/use-review-adapter";
import ValueBlock from "./value-block";

interface Props {
  review: ReviewType;
}

const Review = ({ review }: Props) => {
  const adaptedReview = useReviewAdapter(review)
  return (
    <li className="flex flex-col gap-6 py-6">
      <div className="flex gap-6">
        <Image
          className="h-[100px] w-[100px]"
          src={adaptedReview.avatar}
          quality={100}
          width={100}
          height={100}
          alt="Avatar"
        />
        <div className="flex flex-col justify-center">
          <p className="text-sm text-gray">Enviada en {adaptedReview.created_at}</p>
          <p className="font-bold">{adaptedReview.contract_fraud}</p>
        </div>
      </div>
      <p>{adaptedReview.comment}</p>
      <div className="flex gap-3 text-sm">
        <ValueBlock
          className="w-1/3"
          title="Vacaciones" value={`${adaptedReview.annual_leave} dias/año`} />
        <ValueBlock
          className="w-1/3"
          title="Jornada" value={`${adaptedReview.working_hours_pw} h/semana`} />
        <ValueBlock
          className="w-1/3"
          title="Salario" value={`${adaptedReview.salary_ph} €/hora`} />
      </div>
    </li >
  )
}

export default Review;