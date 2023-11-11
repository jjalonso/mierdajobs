"use server";

import { getServerSession } from "next-auth";

import authOptions from "../../../../../(auth)/api/auth/_options/options";
import { ValidationErrorToObject, sanitizeFormData } from "../../../../../api/utils";

import { schemaReviews } from "./schema";
import { buildReview } from "./utils";

import { disconnectDB } from "@/app/_server/db/mongodb";
import { insertDataInCollection } from "@/app/_server/db/verbs";
import { fetchGPlaceDetails } from "@/app/_server/google-place/verbs";
import { ActionResponse } from "@/app/types";

export const sendReview = async (formData: FormData): Promise<ActionResponse> => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return {
      code: 403
    };
  }

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
      const x = await fetchGPlaceDetails(castedValues.place_id)
      console.log(x)
      await insertDataInCollection("reviews", buildReview(session, castedValues));
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