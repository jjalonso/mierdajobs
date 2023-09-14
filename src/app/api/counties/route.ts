import { getCollection } from "@/app/(server)/db/verbs";
import {
  serializerParams,
  serializerResponseCounty,
} from "@/app/(server)/utils/functions";
import { NextResponse } from "next/server";
import { CityResponse, DBCity } from "./type";

const collection = "counties";

export const GET = async (request: Request) => {
  const params = serializerParams(request, "county");
  const response: DBCity[] = await getCollection(collection, params);
  const serializedResponse: CityResponse[] = serializerResponseCounty(response);
  return NextResponse.json(serializedResponse);
};
