"use server";
import { serializeIndexedGoogleBusinessess } from "./utils";

import { fetchGPlaceBusinesses } from "@/app/_server/google-place/verbs";

export const getGooglebusinesses = async (q: string) => {
  const response = await fetchGPlaceBusinesses(q);
  return serializeIndexedGoogleBusinessess(response);
};
