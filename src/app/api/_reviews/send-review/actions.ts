"use server";

import { ValidationError } from "joi";
import _ from "lodash";

import { schemaReviews } from "./schema";

import { disconnectDB } from "@/app/_server/db/mongodb";
import { insertDataInCollection } from "@/app/_server/db/verbs";
import { HTTPValidationError, HTTPValidationErrorData } from "@/lib/errors";

export const sendReview = async (formData: FormData) => {
  try {
    const values = _.assign(Object.fromEntries(formData));

    await schemaReviews.validateAsync(values, { abortEarly: false });
    // TODO: XSS

    await insertDataInCollection("reviews", values);

  } catch (e: unknown) {
    console.error(e)

    if (e instanceof ValidationError) {
      const errorsObject = e.details.reduce((acc: HTTPValidationErrorData, { message, path }) => {
        const fieldName = path.join(".");
        acc[fieldName] = acc[fieldName] || [];
        acc[fieldName].push(message);
        return acc;
      }, {});
      console.log(errorsObject)
      throw new HTTPValidationError(errorsObject);
    }
  } finally {
    await disconnectDB();
  }
};

// debugger;
// const sanitizedComment = xss(value.comment);

// if (sanitizedComment !== value.comment) {
//   customError = "El comentario tiene contenido no permitido o malicioso";
//   throw error;
// }

// await insertDataInCollection("reviews", review);
// 
