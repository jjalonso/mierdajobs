import { SendReviewDB } from "../send-review/types";

type GetReviewsDB = Pick<
	SendReviewDB,
	| "created_at"
	| "monthly_salary"
	| "working_hours"
	| "contract_fraud"
	| "annual_leave"
	| "comment"
> & {
	salary_ph: number;
};

export type ReviewsDTO = {
	name: string; //Google Place Details
	address: string; //Google Place Details
	totalReviews: number;
	reviews: GetReviewsDB[];
};
