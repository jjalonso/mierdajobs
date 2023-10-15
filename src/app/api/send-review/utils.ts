import { SendReviewDB, SendReviewRequest } from "./types";

export const bodyObjectReview: (review: SendReviewRequest) => SendReviewDB = (
	review
) => ({
	...review,
	created_at: new Date().toISOString()
});
