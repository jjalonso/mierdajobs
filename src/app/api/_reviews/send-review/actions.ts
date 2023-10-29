"use server";

import { SendReviewRequest } from "./types";
import { processBody } from "./utils";

import { insertDataInCollection } from "@/app/_server/db/verbs";

export const sendReview = async (review: SendReviewRequest) => {
	await insertDataInCollection("reviews", processBody(review));
}
