import { ReviewDB } from "../types";

export type Review = {
	id: string;
	salary_ph: number;
	working_hours_pw: number;
	avatar: string;
	contract_fraud: string;
} & Pick<
	ReviewDB,
	| "likes"
	| "created_at"
	| "annual_leave"
	| "comment"
>;

export type GetReviewsResponse = {
	name: string;
	address: string;
	totalReviews: number;
	reviews: Review[];
};
