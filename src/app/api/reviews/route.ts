import { NextResponse } from "next/server";
import { insertReview } from "./actions";

export const POST = async (request: Request) => {
  const bodyObject = await request.json();
  const response = await insertReview(bodyObject);
  return NextResponse.json(response);
};
