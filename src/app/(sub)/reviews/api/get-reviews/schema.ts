import Joi from "joi";

export const schemaGetReviews = Joi.object({
	place_id: Joi.string().required()
});
