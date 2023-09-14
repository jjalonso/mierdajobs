import { getCollection } from "@/app/(server)/db/verbs";
import {
  serializerParams,
  serializerResponseCity,
} from "@/app/(server)/utils/functions";
import { NextResponse } from "next/server";
import { CountyResponse, DBCounty } from "./type";

const collection = "cities";

export const GET = async (request: Request) => {
  const params = serializerParams(request, "city");
  const response: DBCounty[] = await getCollection(collection, params);
  const serializedResponse: CountyResponse[] = serializerResponseCity(response);
  return NextResponse.json(serializedResponse);
};
