import { disconnectDB } from "@/app/_server/db/mongodb";
import { NextResponse } from "next/server";
import { handleErrors } from "../utils";
import { getCounties } from "./actions";

export const GET = async () => {
  try {
    const response = await getCounties();
    return NextResponse.json(response);
  } catch (error) {
    await disconnectDB();
    return handleErrors("Hubo un problema al recuperar la provincia", 500);
  }
};
