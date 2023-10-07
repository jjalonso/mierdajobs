import { getOneCity } from "@/app/api/cities/utils";
import { getOneCounty } from "@/app/api/counties/utils";
import { GooglePlaceApi } from "./types";

export const getBusinessFromGooglePlaceApi = async ({
  q,
  county,
  city,
}: {
  q: string;
  county: string;
  city: string;
}): Promise<GooglePlaceApi> => {
  const [gettedCounty, gettedCity] = await Promise.all([
    getOneCounty(county),
    getOneCity(city),
  ]);

  const query = `${q} en ${gettedCounty[0].name}, ${gettedCity[0].name}, `;
  const url = `${process.env.GOOGLE_URL_PLACE}?fields=formatted_address,place_id,name&input=${query}&inputtype=textquery&language=es&key=${process.env.GOOGLE_API_KEY}`;
  const response = await fetch(url.replace(/ /g, "%20"), {
    method: "GET",
  });
  const serializedResponse = await response.json();
  return serializedResponse;
};

export const getBusinessFromGooglePlaceApiById = async (gplace_id: string) => {
  const url = `${process.env.GOOGLE_URL_DETAIL}?fields=formatted_address,place_id,name&place_id=${gplace_id}&language=es&key=${process.env.GOOGLE_API_KEY}`;
  const response = await fetch(url.replace(/ /g, "%20"), {
    method: "GET",
  });
  const serializedResponse = await response.json();
  return serializedResponse;
};
