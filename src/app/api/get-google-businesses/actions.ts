import { getGooglePlaceBusinesses } from "@/app/_server/google-place/verbs";
import { serializeIndexedGoogleBusinessess } from "./utils";

export const getGoogleBusiness = async (q: string) => {
  const response = await getGooglePlaceBusinesses(q);
  return serializeIndexedGoogleBusinessess(response);
};
