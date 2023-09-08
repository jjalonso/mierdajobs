import { NextResponse } from "next/server";
import { fetchGET } from "../../server/utils/verbs";

export const GET = async (request: Request) => {
  const response = await fetchGET("counties", request);
  return NextResponse.json(response);
};
