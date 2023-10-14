import { sortListAlphabetically } from "../utils";

import { GoogleBusinesses } from "./types";

import { GooglePlaceAutocomplete } from "@/app/_server/google-place/types";

export const serializeIndexedGoogleBusinessess = (
  response: GooglePlaceAutocomplete
): GoogleBusinesses[] =>
  response.predictions
    .map((input) => ({
      name: input.terms[0].value,
      address: input.terms.slice(1).map((term) => term.value),
      gplace_id: input.place_id,
    }))
    .sort(sortListAlphabetically);
