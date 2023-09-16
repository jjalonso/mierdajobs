import { getCollection } from "@/app/_server/db/verbs";
import { NextResponse } from "next/server";
import { serializerParamsCity, serializerResponseCity } from "./function";
import { CityResponse, DBCity } from "./types";

const collection = "cities";

export const GET = async (request: Request) => {
  const params = serializerParamsCity(request);
  const response: DBCity[] = await getCollection(collection, params);
  const serializedResponse: CityResponse[] = serializerResponseCity(response);
  return NextResponse.json(serializedResponse);
};
