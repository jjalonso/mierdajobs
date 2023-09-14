import { getBusinessFromGooglePlaceApi } from "@/app/(server)/google-place/verbs";
import { serializerResponseApiGooglePlace } from "@/app/(server)/utils/functions";
import { NextResponse } from "next/server";
import { BusinessResponse, GooglePlaceApi } from "./type";

export const GET = async (request: Request) => {
  const response: GooglePlaceApi = await getBusinessFromGooglePlaceApi(request);
  const serializedResponse: BusinessResponse[] =
    serializerResponseApiGooglePlace(response);
  return NextResponse.json(serializedResponse);
};
