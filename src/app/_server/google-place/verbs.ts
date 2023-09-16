import { GooglePlaceApi } from "./types";

export const getBusinessFromGooglePlaceApi = async (
  params: Record<string, string> | undefined
) => {
  const options = {
    query: `${params?.city},${params?.county}Busqueda de ${params?.q}`,
    language: "es",
    radius: 0,
  };
  const url = `${process.env.GOOGLE_URL_PLACE}?query=${options.query}&language=${options.language}&radius=${options.radius}&key=${process.env.GOOGLE_API_KEY}`;
  const response: Response = await fetch(url.replace(/ /g, "%20"), {
    method: "GET",
  });
  const serializedResponse: GooglePlaceApi = await response.json();
  return serializedResponse;
};
