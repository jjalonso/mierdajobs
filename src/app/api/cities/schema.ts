import Joi from "joi";

export const schemaGetCities = Joi.object({
  county: Joi.string().required(),
});
