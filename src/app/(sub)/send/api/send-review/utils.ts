import { Session } from "next-auth";

import { WorkingHoursPeriodEnum } from "../../../types";

import { SendReviewRequest } from "./types";

export const buildReview = (session: Session, { working_hours_period, ...body }: SendReviewRequest) => {
	const isPerWeek = working_hours_period === WorkingHoursPeriodEnum.PER_WEEK;
	return {
		...body,
		working_hours: isPerWeek ? body.working_hours * 4 : body.working_hours,
		created_at: new Date().toISOString(),
		user: session.user.id,
		termsAcceptanceSignature: `${new Date().toISOString()}/${session.user.id}/${session.user.email}`
	}
}