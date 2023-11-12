import Joi from "joi";

import { AvatarEnum } from "@/app/(auth)/api/auth/types";

export const schemaReviews = Joi.object({
  avatar: Joi.string().valid(...Object.values(AvatarEnum)).required(),
})
