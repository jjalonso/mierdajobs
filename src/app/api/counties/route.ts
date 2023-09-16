import { getCollection } from "@/app/_server/db/verbs";
import { NextResponse } from "next/server";
import { serializerParamsCounty, serializerResponseCounty } from "./functions";
import { CountyResponse, DBCounty } from "./types";

const collection = "counties";

export const GET = async (request: Request) => {
  const params = serializerParamsCounty(request);
  const response: DBCounty[] = await getCollection(collection, params);
  const serializedResponse: CountyResponse[] =
    serializerResponseCounty(response);
  return NextResponse.json(serializedResponse);
};
