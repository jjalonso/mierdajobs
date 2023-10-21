
import { ReviewDB } from "../types";

import { GetReviewsResponse } from "./types";

import { BodyProps } from "@/app/_server/db/verbs";
import { fetchGPlaceDetails } from "@/app/_server/google-place/verbs";

export const serializeIndexedGetReviews = async (
	reviews: BodyProps,
	gplace_id: string
): Promise<GetReviewsResponse> => {
	const gettedDetailsBusiness = await fetchGPlaceDetails(gplace_id);
	const serializedAllReviews = reviews.map((items: ReviewDB) => ({
		id: items._id,
		created_at: items.created_at,
		monthly_salary: items.monthly_salary,
		working_hours_pw: (items.working_hours / 4).toFixed(2).replace(/[.,]00$/, ""),
		salary_ph: (items.monthly_salary / items.working_hours).toFixed(2),
		contract_fraud: items.contract_fraud,
		annual_leave: items.annual_leave,
		comment: items.comment
	}));

	return {
		name: gettedDetailsBusiness.result.name,
		address: gettedDetailsBusiness.result.formatted_address,
		totalReviews: reviews.length,
		reviews: serializedAllReviews
	};
};
