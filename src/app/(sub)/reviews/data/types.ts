import { ReviewDB } from "../../types";

export type Review = {
	salary_ph: string;
	working_hours_pw: string;
	avatar: string;
	contract_fraud: string;
} & Pick<
	ReviewDB,
	| "_id"
	| "likes"
	| "created_at"
	| "annual_leave"
	| "comment"
>;

export type GetReviewsResponse = {
	isSubmittedAllowed: boolean;
	totalReviews: number;
	reviews: Review[];
};
