import { NextResponse } from "next/server";
import { getCounties } from "./actions";

export const GET = async () => {
  const response = await getCounties();
  return NextResponse.json(response);
};
