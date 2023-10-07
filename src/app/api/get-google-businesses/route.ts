import { NextResponse } from "next/server";
import { parseParams, serializeIndexed } from "../utils";
import { getGoogleBusiness } from "./actions";
import { schemaGetGoogleBusiness } from "./schema";

export const GET = async (request: Request) => {
  const params = parseParams(request.url);
  const paramObject = serializeIndexed(params);

  const { error, value } = schemaGetGoogleBusiness.validate(paramObject);

  if (error) {
    return NextResponse.json(error.message, { status: 424 });
  }

  const { q, county, city } = value;

  try {
    const response = await getGoogleBusiness(q, county, city);
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};
