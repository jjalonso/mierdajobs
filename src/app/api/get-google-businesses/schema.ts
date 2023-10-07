import Joi from "joi";

export const schemaGetGoogleBusiness = Joi.object({
  q: Joi.string().required(),
});
