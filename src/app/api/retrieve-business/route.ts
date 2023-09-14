import { getBusinessFromGooglePlaceApi } from "@/app/_server/google-place/verbs";
import { serializerResponseApiGooglePlace } from "@/app/_server/utils/functions";
import { NextResponse } from "next/server";
import { BusinessResponse, GooglePlaceApi } from "./types";

export const GET = async (request: Request) => {
  const response: GooglePlaceApi = await getBusinessFromGooglePlaceApi(request);
  const serializedResponse: BusinessResponse[] =
    serializerResponseApiGooglePlace(response);
  return NextResponse.json(serializedResponse);
};
