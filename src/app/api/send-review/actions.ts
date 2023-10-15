"use server";

import { SendReviewRequest } from "./types";
import { bodyObjectReview } from "./utils";

import { insertDataInCollection } from "@/app/_server/db/verbs";

export const insertReview = async (review: SendReviewRequest) =>
	await insertDataInCollection("reviews", bodyObjectReview(review));
