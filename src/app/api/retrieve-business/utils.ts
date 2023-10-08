import { sortListAlphabetically } from "../utils";

import { GooglePlaceApi } from "@/app/_server/google-place/types";

export const serializeIndexedBusiness = (response: GooglePlaceApi) => {
  const selectedFieldsResponse: Record<string, string>[] = [];
  response.results.forEach((item) => {
    if (item.business_status !== "CLOSED_PERMANENTLY") {
      selectedFieldsResponse.push({
        name: item.name,
        address: item.formatted_address,
        id: item.place_id,
      });
    }
  });
  return selectedFieldsResponse.sort(sortListAlphabetically);
};
