"use server";

import { serializeIndexedBusiness } from "./utils";

import { getBusinessFromGooglePlaceApi } from "@/app/_server/google-place/verbs";

export const getGoogleBusiness = async (
  q: string,
  county = "Cadiz",
  city = "El Puerto de Santa Maria"
) => {
  const queryObject = { q, county, city };
  const response = await getBusinessFromGooglePlaceApi(queryObject);
  const serializedResponse = serializeIndexedBusiness(response);
  return serializedResponse;
};
