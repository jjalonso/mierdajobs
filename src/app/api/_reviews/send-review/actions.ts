"use server";

import xss from "xss";

import { schemaReviews } from "./schema";
import { SendReviewRequest } from "./types";

import { disconnectDB } from "@/app/_server/db/mongodb";
import { insertDataInCollection } from "@/app/_server/db/verbs";

export const sendReview = async (review: SendReviewRequest) => {
  let customError = undefined;

  try {
    const { error, value } = schemaReviews.validate(review);

    if (error) {
      customError = error.message;
      throw error;
    }

    const sanitizedComment = xss(value.comment);

    if (sanitizedComment !== value.comment) {
      customError = "El comentario tiene contenido no permitido o malicioso";
      throw error;
    }

    await insertDataInCollection("reviews", review);
  } catch (error) {
    throw new Error(customError ?? "Error al enviar la reseña");
  } finally {
    await disconnectDB();
  }
};
