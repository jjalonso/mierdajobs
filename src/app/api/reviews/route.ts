import { NextResponse } from "next/server";

import { insertReview } from "./actions";
import { insertReview } from "./actions";
import { schemaReviews } from "./schema";

import { disconnectDB } from "@/app/_server/db/mongodb";

export const POST = async (request: Request) => {
  try {
    const bodyObject = await request.json();

    const { error, value } = schemaReviews.validate(bodyObject);

    if (error) {
      return NextResponse.json(error.message, { status: 424 });
    }

    await insertReview(value);

    return NextResponse.json("Reseña insertada correctamente", { status: 201 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  } finally {
    await disconnectDB();
  }
};
