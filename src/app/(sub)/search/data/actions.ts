"use server";

import { GetBusinessesResponse } from "./types";

import { fetchGPlaceBusinesses } from "@/lib/google-place/api";

export const getBusinesses = async (q: string): Promise<GetBusinessesResponse> => {
  // query params are always string, so no need to validate
  // no risk on 'q' as we send it to google api
  const response = await fetchGPlaceBusinesses(q);
  return response.predictions.map((input) => ({
    name: input.terms[0].value,
    address: input.terms.slice(1).map((term) => term.value),
    place_id: input.place_id,
  }))
};
