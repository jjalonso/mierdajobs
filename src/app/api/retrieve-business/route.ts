import { NextResponse } from "next/server";
import { handleErrors, parseParams } from "../utils";
import { getGoogleBusiness } from "./actions";

export const GET = async (request: Request) => {
  const params = parseParams(request.url);
  const q = params.get("q");
  const county = params.get("county");
  const city = params.get("city");

  if (q && county && city) {
    try {
      const response = await getGoogleBusiness(q, county, city);
      return NextResponse.json(response);
    } catch (error) {
      return handleErrors("Hubo un problema al recuperar el negocio", 500);
    }
  } else {
    return handleErrors(
      "Parámetros incompletos para recuperar el negocio",
      424
    );
  }
};
