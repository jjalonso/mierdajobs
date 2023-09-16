import { getCollection, insertDataInCollection } from "@/app/_server/db/verbs";
import { NextResponse } from "next/server";
import { serializerParamsReviews } from "./functions";
import { DBReviews } from "./types";

const collection = "reviews";

export const GET = async (request: Request) => {
  const params = serializerParamsReviews(request);
  const response: DBReviews[] = await getCollection(collection, params);
  return NextResponse.json(response);
};

export const POST = async (request: Request) => {
  const response: Response = await insertDataInCollection(collection, request);
  return NextResponse.json(response);
};
