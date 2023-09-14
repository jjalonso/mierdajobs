import { getCollection } from "@/app/_server/db/verbs";
import {
  serializerParams,
  serializerResponseCity,
} from "@/app/_server/utils/functions";
import { NextResponse } from "next/server";
import { CityResponse, DBCity } from "./types";

const collection = "cities";

export const GET = async (request: Request) => {
  const params = serializerParams(request, "city");
  const response: DBCity[] = await getCollection(collection, params);
  const serializedResponse: CityResponse[] = serializerResponseCity(response);
  return NextResponse.json(serializedResponse);
};
