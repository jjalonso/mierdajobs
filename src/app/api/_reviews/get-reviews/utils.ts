
import moment from "moment";

import { ReviewDB } from "../types";

import { GetReviewsResponse } from "./types";

import { contractFraudValues } from "@/app/(sub)/reviews/values";
import { BodyProps } from "@/app/_server/db/verbs";
import { fetchGPlaceDetails } from "@/app/_server/google-place/verbs";

export const serializeIndexedGetReviews = async (
	reviews: BodyProps,
	gplace_id: string
): Promise<GetReviewsResponse> => {
	const gettedDetailsBusiness = await fetchGPlaceDetails(gplace_id);
	const serializedAllReviews = reviews.map((item: ReviewDB) => ({
		id: item._id,
		created_at: moment(item.created_at).format("MMMM YYYY"),
		monthly_salary: item.monthly_salary,
		working_hours_pw: (item.working_hours / 4).toFixed(2).replace(/[.,]00$/, ""),
		salary_ph: (item.monthly_salary / item.working_hours).toFixed(2),
		contract_fraud: contractFraudValues[item.contract_fraud].title,
		annual_leave: item.annual_leave,
		comment: item.comment,
		avatar: "/avatars/avatar-1.png",
	}));

	return {
		name: gettedDetailsBusiness.result.name,
		address: gettedDetailsBusiness.result.formatted_address,
		totalReviews: reviews.length,
		reviews: serializedAllReviews
	};
};
