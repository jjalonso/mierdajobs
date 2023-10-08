import { NextResponse } from "next/server";

import { handleErrors } from "../utils";

import { insertReview } from "./actions";

export const POST = async (request: Request) => {
  try {
    const bodyObject = await request.json();
    const response = await insertReview(bodyObject);
    return NextResponse.json(response);
  } catch (error) {
    return handleErrors("Hubo un problema al insertar la reseña", 500);
  }
};
