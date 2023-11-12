import { ReviewDB } from "../../../types";

export type SendReviewRequest = Pick<ReviewDB,
	| "place_id"
	| "monthly_salary"
	| "working_hours"
	| "working_hours_period"
	| "contract_fraud"
	| "annual_leave"
	| "comment"
	| "termsAcceptanceSignature"
>
