import Joi from "joi";

export const schemaReviews = Joi.object({
  gplace_id: Joi.string().required(),
  county: Joi.string().required(),
  city: Joi.string().required(),
  address: Joi.string().required(),
  name: Joi.string().required(),
  user: Joi.string().optional(), //v2
  monthly_salary: Joi.number().required(),
  working_hours: Joi.number().required(),
  working_hours_period: Joi.string().required(),
  contract_fraud: Joi.string().optional(),
  annual_leave: Joi.number().required(),
  comment: Joi.string().required(),
});
