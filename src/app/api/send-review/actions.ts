"use server";

import { bodyObjectReview } from "./utils";

import { BodyProps, insertDataInCollection } from "@/app/_server/db/verbs";

export const insertReview = async (review: BodyProps) =>
	await insertDataInCollection("reviews", bodyObjectReview(review));
