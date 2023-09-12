import {
  GooglePlaceParams,
  GooglePlaceResponse,
} from "@/app/server/types/google-place.type";
import { serializerParams } from "@/app/server/utils/functions";

export const GET_API_GOOGLE_PLACE = async (request: Request) => {
  const serializedParams: GooglePlaceParams | undefined =
    serializerParams(request);
  const url = `${process.env.GOOGLE_URL_PLACE}input=${serializedParams?.query},${serializedParams?.countie},${serializedParams?.citie}&fields=place_id,name,formatted_address&types=establishment&key=${process.env.GOOGLE_API_KEY}`;
  const response: Response = await fetch(url, { method: "GET" });
  const adaptedResponse: GooglePlaceResponse = await response.json();
  return adaptedResponse;
};
