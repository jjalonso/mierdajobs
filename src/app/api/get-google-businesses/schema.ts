import Joi from "joi";

export const schemaGoogleBusinesses = Joi.object({
  q: Joi.string().required(),
});
