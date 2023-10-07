import { getGooglePlaceBussiness } from "@/app/_server/google-place/verbs";
import { serializeIndexedGoogleBusiness } from "./utils";

export const getGoogleBusiness = async (q: string) => {
  const response = await getGooglePlaceBussiness(q);
  return serializeIndexedGoogleBusiness(response);
};
