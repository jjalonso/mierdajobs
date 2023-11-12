"use server";
import { serializeIndexedGoogleBusinessess } from "./utils";

import { fetchGPlaceBusinesses } from "@/lib/google-place/api";

export const getGooglebusinesses = async (q: string) => {
  const response = await fetchGPlaceBusinesses(q);
  return serializeIndexedGoogleBusinessess(response);
};
