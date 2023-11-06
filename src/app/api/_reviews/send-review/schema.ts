import Joi from "joi";

import { customValidationMessages } from "../../utils";

export const schemaReviews = Joi.object({
	gplace_id: Joi.string().required(),
	monthly_salary: Joi.number().min(1).required(),
	working_hours: Joi.number().min(1).required(),
	working_hours_period: Joi.string().valid("PER_WEEK", "PER_MONTH").required(),
	contract_fraud: Joi.string().valid("NO_FRAUD", "NO_CONTRACT", "HOURS_MISMATCH").required(),
	annual_leave: Joi.number().min(0).max(365).required(),
	comment: Joi.string().min(10).max(250).required(),
	legal: Joi.string().valid("on").required()
}).messages(customValidationMessages);
