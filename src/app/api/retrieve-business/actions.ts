import { getBusinessFromGooglePlaceApi } from "@/app/_server/google-place/verbs";
import { serializeIndexedBusiness } from "./utils";

export const getGoogleBusiness = async (
  q: string,
  county: string,
  city: string
) => {
  const queryObject = { q, county, city };
  const response = await getBusinessFromGooglePlaceApi(queryObject);
  const serializedResponse = serializeIndexedBusiness(response);
  return serializedResponse;
};
