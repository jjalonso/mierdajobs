"use server";

import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";

import authOptions from "../../../(auth)/api/auth/_options/options";

import schema from "./schema";

import { WorkingHoursPeriodEnum } from "@/app/(sub)/types";
import { disconnectDB } from "@/app/_server/db/mongodb";
import { insertDataInCollection } from "@/app/_server/db/verbs";
import { ActionResponse } from "@/app/types";
import { fetchGPlaceDetails } from "@/lib/google-place/api";
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

  } else {
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
      termsAcceptanceSignature: `${new Date().toISOString()}/${session.user.id}/${session.user.email}`
    }

    // Save data in DB and return the modified business
    await insertDataInCollection("reviews", reviewDocument);
    await disconnectDB();
    revalidatePath("/reviews");
    return {
      code: 201,
      data: {
        name: encodeURIComponent(result.name),
        id: castedValues.place_id
      }
    }
  }
};