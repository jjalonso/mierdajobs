"use server";
import { serializeIndexedGoogleBusinessess } from "./utils";

import { getGooglePlaceBusinesses } from "@/app/_server/google-place/verbs";

export const getGoogleBusiness = async (q: string) => {
  const response = await getGooglePlaceBusinesses(q);
  return serializeIndexedGoogleBusinessess(response);
};
