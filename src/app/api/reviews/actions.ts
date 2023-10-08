import { insertDataInCollection } from "@/app/_server/db/verbs";
import { ReviewsRequest } from "./types";
import { bodyObjectReview } from "./utils";

export const insertReview = async (review: ReviewsRequest) =>
  await insertDataInCollection("reviews", bodyObjectReview(review));
