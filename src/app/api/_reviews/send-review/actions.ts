"use server";

import { sanitizeHtmlInput, sanitizeXssInput } from "../../sanitization";

import { schemaReviews } from "./schema";
import { SendReviewRequest } from "./types";

import { disconnectDB } from "@/app/_server/db/mongodb";
import { insertDataInCollection } from "@/app/_server/db/verbs";

export const sendReview = async (review: SendReviewRequest) => {
  let customError = "Error al enviar la reseña";

  const valuesToSanitize = {
    comment: review.comment
  };

  try {
    const { error } = schemaReviews.validate(review);

    if (error) {
      customError = error.message;
      throw error;
    }

    // Sanitization XSS input
    if (!sanitizeXssInput(valuesToSanitize)) {
      customError = "Alguno de los valores ingresados es malicioso";
      throw error;
    }

    // Sanitization HTML input
    const cleanedInputHTML = sanitizeHtmlInput(valuesToSanitize);

    await insertDataInCollection("reviews", { ...review, cleanedInputHTML });
  } catch (error) {
    throw new Error(customError);
  } finally {
    await disconnectDB();
  }
};
