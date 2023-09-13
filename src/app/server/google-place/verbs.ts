import {
  GooglePlaceParams,
  GooglePlaceResponse,
} from "@/app/server/types/google-place.type";
import { serializerParams } from "@/app/server/utils/functions";

export const GET_API_GOOGLE_PLACE = async (request: Request) => {
  const serializedReqParams: GooglePlaceParams | undefined =
    serializerParams(request);
  const params = {
    query: `${serializedReqParams?.city},${serializedReqParams?.countie}Busqueda de ${serializedReqParams?.query}`,
    language: "es",
    radius: 0,
  };
  const url = `${process.env.GOOGLE_URL_PLACE}?query=${params.query}&language=${params.language}&radius=${params.radius}&key=${process.env.GOOGLE_API_KEY}`;
  const response: Response = await fetch(url.replace(/ /g, "%20"), {
    method: "GET",
  });
  const adaptedResponse: GooglePlaceResponse = await response.json();
  return adaptedResponse;
};
