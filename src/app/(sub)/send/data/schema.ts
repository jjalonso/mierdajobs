import Joi from "joi";

import { ContractFraudEnum, WorkingHoursPeriodEnum } from "@/app/(sub)/types";
import { customValidationMessages } from "@/lib/validation";

const schema = Joi.object({
	place_id: Joi.string().required(),
	monthly_salary: Joi.number().min(1).required(),
	working_hours: Joi.number().min(1).required(),
	working_hours_period: Joi.string().valid(...Object.values(WorkingHoursPeriodEnum)).required(),
	contract_fraud: Joi.string().valid(...Object.values(ContractFraudEnum)).required(),
	annual_leave: Joi.number().min(0).max(365).required(),
	comment: Joi.string().min(10).max(250).required(),
	termsAcceptance: Joi.string().valid("on").required()
}).messages(customValidationMessages);

export default schema;
