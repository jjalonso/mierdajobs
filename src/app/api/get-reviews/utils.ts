import { BodyProps } from "@/app/_server/db/verbs";
import { getGooglePlaceDetailsBusiness } from "@/app/_server/google-place/verbs";
import { SendReviewDB } from "../send-review/types";
import { ReviewsDTO } from "./types";

export const serializeIndexedGetReviews = async (
	reviews: BodyProps,
	gplace_id: string
) => {
	const gettedDetailsBusiness = await getGooglePlaceDetailsBusiness(gplace_id);
	const serializedAllReviews = reviews.map((items: SendReviewDB) => ({
		id: items._id,
		created_at: items.created_at,
		monthly_salary: items.monthly_salary,
		working_hours_pw: items.working_hours / 4,
		salary_ph: items.monthly_salary / items.working_hours,
		contract_fraud: items.contract_fraud,
		annual_leave: items.annual_leave,
		comment: items.comment
	}));

	return {
		name: gettedDetailsBusiness.result.name,
		address: gettedDetailsBusiness.result.formatted_address,
		totalReviews: reviews.length,
		reviews: serializedAllReviews
	} as ReviewsDTO;
};
