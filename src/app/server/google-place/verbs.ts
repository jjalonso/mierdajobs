import {
  GooglePlaceParams,
  GooglePlaceResponse,
} from "@/app/server/types/google-place.type";
import { serializerParams } from "@/app/server/utils/functions";

export const GET_API_GOOGLE_PLACE = async (request: Request) => {
  const serializedParams: GooglePlaceParams | undefined =
    serializerParams(request);
  const params = {
    input: `${serializedParams?.city},${serializedParams?.countie}Busqueda de ${serializedParams?.query}`,
    language: "es",
    radius: 0,
    types: "establishment",
  };
  const url = `${process.env.GOOGLE_URL_PLACE}input=${params.input}&language=${params.language}&types=${params.types}&key=${process.env.GOOGLE_API_KEY}`;
  const response: Response = await fetch(url.replace(/ /g, "%20"), {
    method: "GET",
  });
  const adaptedResponse: GooglePlaceResponse = await response.json();
  return adaptedResponse;
};
