import { GET_API_GOOGLE_PLACE } from "@/app/server/google-place/verbs";
import { serializerResponseApiGooglePlace } from "@/app/server/utils/functions";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const response: any = await GET_API_GOOGLE_PLACE(request);
  const serializedResponse = serializerResponseApiGooglePlace(response);
  return NextResponse.json(serializedResponse);
};
