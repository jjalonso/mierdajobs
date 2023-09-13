import { GET_MONGODB } from "@/app/server/db/verbs";
import { DbResponse } from "@/app/server/types/db.type";
import { serializerResponseIdNameRecord } from "@/app/server/utils/functions";
import { NextResponse } from "next/server";

const collection = "cities";

export const GET = async (request: Request) => {
  const response: DbResponse[] = await GET_MONGODB(collection, request);
  const adaptedResponse = serializerResponseIdNameRecord(response);
  return NextResponse.json(adaptedResponse);
};
