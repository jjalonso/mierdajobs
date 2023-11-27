"use server";

import { getServerSession } from "next-auth";

import authOptions from "../../../(auth)/api/auth/_options/options";

import schema from "./schema";

import { WorkingHoursPeriodEnum } from "@/app/(sub)/types";
import { ActionResponse } from "@/app/types";
import { fetchGPlaceDetails } from "@/lib/google-place/api";
import { hasUserSubmittedReview } from "@/lib/mongodb/checks";
import { insertInCollection } from "@/lib/mongodb/insert";
import { sanitizeFormData } from "@/lib/sanitization";
import { ValidationErrorToObject } from "@/lib/validation";

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

    // check if exist a review document in DB that contains a review with .user.id as session.user.id

  } else {
    // Check if user already submitted a review for this business
    const existingReview = await hasUserSubmittedReview(
      session.user.id,
      formData.get("place_id") as string
    );
    if (existingReview) throw new Error("User already submitted a review for this business");

    // Is a google business? (GMaps return 200 even if contains errors)
    const { error_message, result } = await fetchGPlaceDetails(castedValues.place_id);
    if (!result) throw Error(error_message);

    // Build document
    const { working_hours_period, working_hours, ...restCastedValues } = castedValues;
    const isPerWeek = working_hours_period === WorkingHoursPeriodEnum.PER_WEEK;
    const reviewDocument = {
      ...restCastedValues,
      working_hours: isPerWeek ? working_hours * 4 : working_hours,
      created_at: new Date().toISOString(),
      user: session.user.id,
      termsAcceptanceSignature: `${new Date().toISOString()}/${session.user.id}/${session.user.email}`,
      likes: 0
    }

    // Save data in DB and return the modified business
    await insertInCollection("reviews", reviewDocument);
    return {
      code: 201,
      data: {
        name: encodeURIComponent(result.name),
        id: castedValues.place_id
      }
    }
  }
};