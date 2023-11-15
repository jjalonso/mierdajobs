import { ReviewDB } from "../../types";

export type MyReview = {
  name: string;
  working_hours_pw: string;
  contract_fraud: string;
} & Pick<
  ReviewDB,
  | "_id"
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
