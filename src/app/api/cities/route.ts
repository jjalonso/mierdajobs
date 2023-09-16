import { getCollection } from "@/app/_server/db/verbs";
import { NextResponse } from "next/server";
import { IndexedName } from "../types";
import { serializerParamsCity, serializerResponseCity } from "./function";
import { DBCity } from "./types";

const collection = "cities";

export const GET = async (request: Request) => {
  const params = serializerParamsCity(request);
  const response: DBCity[] = await getCollection(collection, params);
  const serializedResponse: IndexedName[] = serializerResponseCity(response);
  return NextResponse.json(serializedResponse);
};
