import { GET_MONGODB, POST_MONGODB } from "@/app/server/db/verbs";
import { DbResponse } from "@/app/server/types/db.type";
import { serializerResponseCountiesAndCities } from "@/app/server/utils/functions";
import { NextResponse } from "next/server";

const collection = "cities";

export const GET = async (request: Request) => {
  const response: DbResponse[] = await GET_MONGODB(collection, request);
  const adaptedResponse = serializerResponseCountiesAndCities(response);
  return NextResponse.json(adaptedResponse);
};

export const POST = async (request: Request) => {
  const response: any = await POST_MONGODB(collection, request);
  return NextResponse.json(response);
};
