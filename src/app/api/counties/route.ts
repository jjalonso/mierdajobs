import { NextResponse } from "next/server";

import { fetchGET, fetchPOST } from "../../server/utils/verbs";

import { adaptResponseCountiesAndCities } from "@/app/server/utils/functions";
import { ApiResponseProps } from "@/app/server/utils/props-type";

const collection = "counties";

export const GET = async (request: Request) => {
  const response: ApiResponseProps[] = await fetchGET(collection, request);
  const adaptedResponse = adaptResponseCountiesAndCities(response);
  return NextResponse.json(adaptedResponse);
};

export const POST = async (request: Request) => {
  const response: any = await fetchPOST(collection, request);
  return NextResponse.json(response);
};
