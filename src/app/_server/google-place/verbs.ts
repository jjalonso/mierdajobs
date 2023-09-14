import { serializerQueryGoogle } from "@/app/_server/utils/functions";
import { BussinessQuery } from "@/app/api/retrieve-business/types";

export const getBusinessFromGooglePlaceApi = async (request: Request) => {
  const reqParams = serializerQueryGoogle(request) as BussinessQuery;
  const options = {
    query: `${reqParams?.city},${reqParams?.county}Busqueda de ${reqParams?.q}`,
    language: "es",
    radius: 0,
  };
  const url = `${process.env.GOOGLE_URL_PLACE}?query=${options.query}&language=${options.language}&radius=${options.radius}&key=${process.env.GOOGLE_API_KEY}`;
  const response: Response = await fetch(url.replace(/ /g, "%20"), {
    method: "GET",
  });
  const serializedResponse = await response.json();
  return serializedResponse;
};
