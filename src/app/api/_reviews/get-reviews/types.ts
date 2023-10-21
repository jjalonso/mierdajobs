import { ReviewDB } from "../types";

export type Review = {
	id: string;
	salary_ph: number;
	working_hours_pw: number;
} & Pick<
	ReviewDB,
	| "created_at"
	| "monthly_salary"
	| "contract_fraud"
	| "annual_leave"
	| "comment"
>;

export type GetReviewsResponse = {
	name: string;
	address: string;
	totalReviews: number;
	reviews: Review[];
};
