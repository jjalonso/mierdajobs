import { GooglePlaceApi } from "./types";

import { getOneCity } from "@/app/api/cities/actions";
import { getOneCounty } from "@/app/api/counties/actions";

export const getBusinessFromGooglePlaceApi = async ({
  q,
  county,
  city,
}: {
  q: string;
  county: string;
  city: string;
}) => {
  const gettedCounty = await getOneCounty(county);
  const gettedCity = await getOneCity(city);
  const url = `${process.env.GOOGLE_URL_PLACE}?query=${gettedCounty[0].name} in ${gettedCity[0].name}, ${q}&language=es&key=${process.env.GOOGLE_API_KEY}`;
  const response: Response = await fetch(url.replace(/ /g, "%20"), {
    method: "GET",
  });
  const serializedResponse: GooglePlaceApi = await response.json();
  return serializedResponse;
};
