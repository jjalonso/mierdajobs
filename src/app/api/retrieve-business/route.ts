import { GET_API_GOOGLE_PLACE } from "@/app/server/google-place/verbs";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const response: any = await GET_API_GOOGLE_PLACE(request);
  return NextResponse.json(response);
};
