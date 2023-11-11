import { ReviewDB } from "../types";

export type Review = {
	id: string;
	salary_ph: string;
	working_hours_pw: string;
	avatar: string;
	contract_fraud: string; // TODO: test if could be just picked
} & Pick<
	ReviewDB,
	| "likes"
	| "created_at"
	| "annual_leave"
	| "comment"
>;

export type GetReviewsResponse = {
	totalReviews: number;
	reviews: Review[];
};
