"use server";

import { getServerSession } from "next-auth";

import authOptions from "../../../../(auth)/api/auth/_options/options";
import { ValidationErrorToObject, sanitizeFormData } from "../../../search/api/utils";

import schema from "./schema";
import { buildReview } from "./utils";

import { disconnectDB } from "@/app/_server/db/mongodb";
import { insertDataInCollection } from "@/app/_server/db/verbs";
import { ActionResponse } from "@/app/types";
import { fetchGPlaceDetails } from "@/lib/google-place/api";

export const sendReview = async (formData: FormData): Promise<ActionResponse> => {
  const session = await getServerSession(authOptions);
  // Unexpected (Malicious?) request
  if (!session) throw new Error("Session required");

  // Sanitize and validate data
  const sanitizedFormData = sanitizeFormData(formData);
  const values = Object.fromEntries(sanitizedFormData.entries());
  const {
    error: validationError,
    value: castedValues
  } = schema.validate(values, { abortEarly: false });
  if (validationError) {
    return {
      code: 400,
      data: ValidationErrorToObject(validationError)
    }

  } else {
    // Is a google business? (GMaps return 200 even if contains errors)
    const { error_message, result } = await fetchGPlaceDetails("xxx");
    if (!result) throw Error(error_message);

    // Save data in DB and return backUrl
    await insertDataInCollection("reviews", buildReview(session, castedValues));
    await disconnectDB();
    return {
      code: 201,
      data: {
        name: encodeURIComponent(result.name),
        id: castedValues.place_id
      }
    }
  }
};