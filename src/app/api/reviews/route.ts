import { disconnectDB } from "@/app/_server/db/mongodb";
import { NextResponse } from "next/server";
import { handleErrors, handleSuccess } from "../utils";
import { postReviews } from "./actions";
import { schemaReviews } from "./schema";

export const POST = async (request: Request) => {
  try {
    const bodyObject = await request.json();

    const { error, value } = schemaReviews.validate(bodyObject);

    if (error) {
      return handleErrors(
        "Hubo un problema en la validación de los datos",
        424,
        error
      );
    }

    await postReviews(value);

    return handleSuccess("Reseña insertada correctamente", 201);
  } catch (error) {
    await disconnectDB();
    return handleErrors("Hubo un problema al insertar la reseña", 500);
  }
};
