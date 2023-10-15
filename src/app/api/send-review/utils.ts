import { BodyProps } from "@/app/_server/db/verbs";

export const bodyObjectReview = (review: BodyProps) => ({
	...review,
	created_at: new Date().toISOString()
});
