"use server";

import { buildReviews } from "./utils";

import { getCollection } from "@/app/_server/db/verbs";

export const getReviews = async (gplace_id: string) => {
	const reviews = await getCollection("reviews", { gplace_id });

	return buildReviews(reviews);
};
