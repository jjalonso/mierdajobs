"use server";

import { buildReviews } from "./utils";

import { getCollection } from "@/app/_server/db/verbs";

export const getReviews = async (place_id: string) => {
	const reviews = await getCollection("reviews", { place_id });

	return buildReviews(reviews);
};
