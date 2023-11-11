import { ReviewDB } from "../../../api/types";

export type SendReviewRequest = Pick<ReviewDB,
	| "gplace_id"
	| "monthly_salary"
	| "working_hours"
	| "working_hours_period"
	| "contract_fraud"
	| "annual_leave"
	| "comment"
	| "termsAcceptanceSignature"
>
