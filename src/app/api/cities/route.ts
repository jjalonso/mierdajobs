import { disconnectDB } from "@/app/_server/db/mongodb";
import { NextResponse } from "next/server";
import { parseParams } from "../utils";
import { getCities } from "./actions";
import { schemaGetCities } from "./schema";

export const GET = async (request: Request) => {
  const params = parseParams(request.url);
  const pCounty = params.get("county");

  const { error, value } = schemaGetCities.validate({ county: pCounty });

  if (error) {
    return NextResponse.json(error.message, { status: 424 });
  }

  const { county } = value;

  try {
    const response = await getCities(county);
    return NextResponse.json(response);
  } catch (error) {
    await disconnectDB();
    return NextResponse.json(error, { status: 500 });
  }
};
