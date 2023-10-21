import Joi from "joi";

export const schemaGetReviews = Joi.object({
	gplace_id: Joi.string().required()
});
