import { NextResponse } from "next/server";
import { parseParams } from "../utils";
import { getCities } from "./actions";

export const GET = async (request: Request) => {
  const params = parseParams(request.url);
  const county = params.get("county");

  if (county) {
    const response = await getCities(county);
    return NextResponse.json(response);
  }
};
