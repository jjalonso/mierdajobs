import { getBusinessFromGooglePlaceApi } from "@/app/_server/google-place/verbs";
import { NextResponse } from "next/server";
import {
  serializerQueryBusiness,
  serializerResponseBusiness,
} from "./functions";

export const GET = async (request: Request) => {
  const params = serializerQueryBusiness(request);
  const response = await getBusinessFromGooglePlaceApi(params);
  const serializedResponse = serializerResponseBusiness(response);
  return NextResponse.json(serializedResponse);
};
