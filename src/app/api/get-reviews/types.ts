import { SendReviewDB } from "../send-review/types";

export type Review = Pick<
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

export type GetReviewsResponse = {
	id: string;
	name: string;
	address: string;
	totalReviews: number;
	reviews: Review[];
};
