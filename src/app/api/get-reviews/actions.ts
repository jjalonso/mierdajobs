"use server";

import { getCollection } from "@/app/_server/db/verbs";
import { serializeIndexedReviews } from "./utils";

export const getReviews = async (gplace_id: string) => {
	const response = await getCollection("reviews", { gplace_id });
	if (response.length <= 0) {
		return [];
	}

	return serializeIndexedReviews(response, gplace_id);
};
