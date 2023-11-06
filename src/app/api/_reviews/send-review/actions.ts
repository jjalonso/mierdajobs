"use server";

import { ActionResponse } from "../../types";
import { ValidationErrorToObject, sanitizeFormData } from "../../utils";

import { schemaReviews } from "./schema";
import { processBody } from "./utils";

import { disconnectDB } from "@/app/_server/db/mongodb";
import { insertDataInCollection } from "@/app/_server/db/verbs";

export const sendReview = async (formData: FormData): Promise<ActionResponse> => {
  try {
    const sanitizedFormData = sanitizeFormData(formData);
    const values = Object.fromEntries(sanitizedFormData.entries());

    const { error: validationError, value: castedValues } = schemaReviews.validate(values, { abortEarly: false });
    if (validationError) {
      return {
        code: 400,
        data: ValidationErrorToObject(validationError)
      }
    } else {
      await insertDataInCollection("reviews", processBody(castedValues));
      return {
        code: 201
      }
    }
  } catch (error: unknown) {
    console.error(error)
  }

  await disconnectDB();
  return {
    code: 500,
    data: { global: "Se produjo un error inesperado, intentelo de nuevo" },
  };
};