"use server";

import { ReviewsRequest } from "./types";
import { bodyObjectReview } from "./utils";

import { insertDataInCollection } from "@/app/_server/db/verbs";

export const insertReview = async (review: ReviewsRequest) => {
  await insertDataInCollection("reviews", bodyObjectReview(review));
};
