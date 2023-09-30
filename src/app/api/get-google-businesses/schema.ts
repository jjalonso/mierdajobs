import Joi from "joi";

export const schemaGetGoogleBusiness = Joi.object({
  q: Joi.string().required(),
  county: Joi.string().required(),
  city: Joi.string().required(),
});
