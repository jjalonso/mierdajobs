import {
  handleErrors,
  handleSuccess,
  parseParams,
  serializeIndexed,
} from "../utils";
import { getGoogleBusiness } from "./actions";
import { schemaGetGoogleBusiness } from "./schema";

export const GET = async (request: Request) => {
  const params = parseParams(request.url);
  const paramObject = serializeIndexed(params);

  const { error, value } = schemaGetGoogleBusiness.validate(paramObject);

  if (error) {
    return handleErrors(
      "Hubo un problema en la validación de los datos",
      424,
      error
    );
  }

  const { q, county, city } = value;

  try {
    const response = await getGoogleBusiness(q, county, city);
    return handleSuccess(
      "Negocios encontrados en Google Places correctamente",
      200,
      response
    );
  } catch (error) {
    return handleErrors(
      "Hubo un problema al recuperar los negocios en Google Places",
      500,
      error
    );
  }
};
