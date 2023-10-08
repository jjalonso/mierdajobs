import { ReviewsDB, ReviewsRequest } from "./types";

export const bodyObjectReview: (review: ReviewsRequest) => ReviewsDB = (
  review
) => ({
  ...review,
  created_at: new Date().toISOString(),
});
