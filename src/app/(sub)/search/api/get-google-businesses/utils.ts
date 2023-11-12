import { GoogleBusinesses } from "./types";

import { GPlaceAutocompleteResponse } from "@/app/_server/google-place/types";

export const serializeIndexedGoogleBusinessess = (
  response: GPlaceAutocompleteResponse
): GoogleBusinesses[] => {
  return response.predictions.map((input) => ({
    name: input.terms[0].value,
    address: input.terms.slice(1).map((term) => term.value),
    place_id: input.place_id,
  }))
};
