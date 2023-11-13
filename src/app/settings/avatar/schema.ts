import Joi from "joi";

import { AvatarEnum } from "@/app/(auth)/api/auth/types";

const schema = Joi.object({
  avatar: Joi.string().valid(...Object.values(AvatarEnum)).required(),
})

export default schema;
