"use server";

import { serializeIndexedGetReviews } from "./utils";

import { getCollection } from "@/app/_server/db/verbs";

export const getReviews = async (gplace_id: string) => {
	const response = await getCollection("reviews", { gplace_id });
	if (response.length <= 0) {
		return [];
	}

	return serializeIndexedGetReviews(response, gplace_id);
};
