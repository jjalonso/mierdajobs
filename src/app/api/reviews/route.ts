import { disconnectDB } from "@/app/_server/db/mongodb";
import { NextResponse } from "next/server";
import { postReviews } from "./actions";
import { schemaReviews } from "./schema";

export const POST = async (request: Request) => {
  try {
    const bodyObject = await request.json();

    const { error, value } = schemaReviews.validate(bodyObject);

    if (error) {
      return NextResponse.json(error.message, { status: 424 });
    }

    await postReviews(value);

    return NextResponse.json("Reseña insertada correctamente", { status: 201 });
  } catch (error) {
    await disconnectDB();
    return NextResponse.json(error, { status: 500 });
  }
};
