import Joi from "joi";

const schema = Joi.object({
	place_id: Joi.string().required()
});

export default schema;