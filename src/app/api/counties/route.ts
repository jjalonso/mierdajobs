import { getCollection } from "@/app/_server/db/verbs";
import {
  serializerParams,
  serializerResponseCounty,
} from "@/app/_server/utils/functions";
import { NextResponse } from "next/server";
import { CountyResponse, DBCounty } from "./types";

const collection = "counties";

export const GET = async (request: Request) => {
  const params = serializerParams(request, "county");
  const response: DBCounty[] = await getCollection(collection, params);
  const serializedResponse: CountyResponse[] =
    serializerResponseCounty(response);
  return NextResponse.json(serializedResponse);
};
