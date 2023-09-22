import { NextResponse } from "next/server";
import { handleErrors, parseParams } from "../utils";
import { getCities } from "./actions";

export const GET = async (request: Request) => {
  const params = parseParams(request.url);
  const county = params.get("county");

  if (county) {
    try {
      const response = await getCities(county);
      return NextResponse.json(response);
    } catch (error) {
      return handleErrors("Hubo un problema al recuperar la localidad", 500);
    }
  } else {
    return handleErrors(
      "Parámetros incompletos al recuperar la localidad",
      424
    );
  }
};
