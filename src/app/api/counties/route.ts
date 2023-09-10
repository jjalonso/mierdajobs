import { NextResponse } from "next/server";
import { fetchGET, fetchPOST } from "../../server/utils/verbs";

const collection = "counties";

export const runtime = "edge";

export const GET = async (request: Request) => {
  const response = await fetchGET(collection, request);
  return NextResponse.json(response);
};

export const POST = async (request: Request) => {
  const response = await fetchPOST(collection, request);
  return NextResponse.json(response);
};
