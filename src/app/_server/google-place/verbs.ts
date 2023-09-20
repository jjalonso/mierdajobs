import { getOneCity } from "@/app/api/cities/actions";
import { getOneCounty } from "@/app/api/counties/actions";
import { GooglePlaceApi } from "./types";

export const getBusinessFromGooglePlaceApi = async ({
  q,
  county,
  city,
}: {
  q: string;
  county: string;
  city: string;
}) => {
  const _county = await getOneCounty(county);
  const _city = await getOneCity(city);
  const url = `${process.env.GOOGLE_URL_PLACE}?query=${_county[0].name} in ${_city[0].name}, ${q}&language=es&key=${process.env.GOOGLE_API_KEY}`;
  const response: Response = await fetch(url.replace(/ /g, "%20"), {
    method: "GET",
  });
  const serializedResponse: GooglePlaceApi = await response.json();
  return serializedResponse;
};
