import { ReviewDB } from "../types";

export type MyReview = {
  name: string;
  id: string;
  working_hours_pw: number;
  contract_fraud: string;
} & Pick<
  ReviewDB,
  | "likes"
  | "created_at"
  | "monthly_salary"
  | "annual_leave"
  | "comment"
>;

export type GetMyReviewsResponse = {
  totalReviews: number;
  reviews: MyReview[];
};
