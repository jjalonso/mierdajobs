import { redirect } from "next/navigation";
import React from "react";

import { ContractFraudEnum, GetReviewsResponse } from "../api/reviews/types";

import Review from "./review";

import BackButton from "@/components/back-button";
import { Heading } from "@/components/heading";
import Paper from "@/components/paper";

interface Props {
  searchParams: Record<string, string>
}

const Reviews = ({ searchParams }: Props) => {
  const { id } = searchParams;
  if (!id) redirect("/buscador");

  // TODO: Get reviews from API

  const reviewsResponse: GetReviewsResponse = {
    name: "Supermercado Bahia",
    address: ["Calle del descubrimiento", "Murcia"],
    totalReviews: 3,
    reviews: [
      {
        id: "1",
        created_at: "2023-10-14T01:12:35.196Z",
        monthly_salary: 700,
        working_hours_pw: 60,
        salary_ph: 12,
        contract_fraud: ContractFraudEnum.NO_CONTRACT,
        annual_leave: 7,
        comment: "Es una pasada trabajar para este señor, te dice que te va a pagar 700€ al mes con 7 dias de vacaciones al año y no le da la mas minima verguenza."
      },
      {
        id: "2",
        created_at: "2023-10-15T02:24:45.123Z",
        monthly_salary: 900,
        working_hours_pw: 40,
        salary_ph: 22.5,
        contract_fraud: ContractFraudEnum.HOURS_MISMATCH,
        annual_leave: 14,
        comment: "La empresa es muy profesional y el ambiente de trabajo es excelente. El salario es justo y las vacaciones son generosas."
      },
      {
        id: "3",
        created_at: "2023-10-16T03:36:55.456Z",
        monthly_salary: 1200,
        working_hours_pw: 50,
        salary_ph: 24,
        contract_fraud: ContractFraudEnum.NO_FRAUD,
        annual_leave: 10,
        comment: "El trabajo es muy exigente y el salario es alto, pero las vacaciones son pocas y el ambiente de trabajo es muy estresante."
      }
    ]
  }

  return (
    <div className="flex flex-col">
      <BackButton />
      <Paper className="mb-10 flex h-fit flex-col gap-6">
        <Heading
          level={2} size="xl">
          {reviewsResponse.name}
        </Heading>
        <ul className="flex flex-col divide-y divide-gray-light">
          {reviewsResponse.reviews.map(review =>
            <Review
              key={review.id}
              review={review} />
          )}
        </ul>
      </Paper>
    </div>
  );
};

export default Reviews;
