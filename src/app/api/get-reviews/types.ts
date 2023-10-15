import { ReviewsDB } from "../send-review/types";

export type ReviewsResponse = Pick<
  ReviewsDB,
  | "created_at"
  | "monthly_salary"
  | "working_hours"
  | "contract_fraud"
  | "annual_leave"
  | "comment"
> & {
  salary_ph: number;
};

export type ReviewsDTO = {
  name: string; //Google Place Details
  address: string; //Google Place Details
  totalReviews: number;
  reviews: ReviewsResponse[];
};
