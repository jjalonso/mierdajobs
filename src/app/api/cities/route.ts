import { disconnectDB } from "@/app/_server/db/mongodb";
import { NextResponse } from "next/server";
import { handleErrors, parseParams } from "../utils";
import { getCities } from "./actions";
import { schemaGetCities } from "./schema";

export const GET = async (request: Request) => {
  const params = parseParams(request.url);
  const pCounty = params.get("county");

  const { error, value } = schemaGetCities.validate({ county: pCounty });

  if (error) {
    return handleErrors(
      "Hubo un problema en la validación de los datos",
      424,
      error
    );
  }

  const { county } = value;

  try {
    const response = await getCities(county);
    return NextResponse.json(response);
  } catch (error) {
    await disconnectDB();
    return handleErrors(
      "Hubo un problema al recuperar la localidad",
      500,
      error
    );
  }
};
