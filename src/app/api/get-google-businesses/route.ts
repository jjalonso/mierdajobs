import { NextResponse } from "next/server";

import { parseParams, serializeIndexed } from "../utils";

import { getGoogleBusiness } from "./actions";
import { schemaGoogleBusinesses } from "./schema";

export const GET = async (request: Request) => {
  const params = parseParams(request.url);
  const paramsObject = serializeIndexed(params);

  const { error, value } = schemaGoogleBusinesses.validate(paramsObject);

  if (error) {
    return NextResponse.json(error.message, { status: 424 });
  }

  try {
    const response = await getGoogleBusiness(value.q);
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};
