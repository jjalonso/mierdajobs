// import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { fetchGET } from "../../server/utils/verbs";

export const GET = async (req: any) => {
  console.log(req)
  const response = await fetchGET("counties", req);
  return NextResponse.json(response);
};
