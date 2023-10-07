import { GooglePlaceAutocomplete } from "@/app/_server/google-place/types";
import { sortListAlphabetically } from "../utils";

export const serializeIndexedGoogleBusiness = (
  response: GooglePlaceAutocomplete
) => {
  let selectedFieldsResponse: Record<string, any>[] = [];
  response.predictions.forEach((input) => {
    selectedFieldsResponse.push({
      name: input.terms[0].value,
      address: input.terms.slice(1).map((term) => term.value),
      gplace_id: input.place_id,
    });
  });
  return selectedFieldsResponse.sort(sortListAlphabetically);
};
