import { GooglePlaceAutocomplete } from "./types";

const GOOGLE_QUERY = {
  url_google: "https://maps.googleapis.com/maps/api/place/autocomplete/json?",
  language: "es",
  components: "country:es",
  types: "establishment",
};

export const getGooglePlaceBusinesses = async (
  q: string
): Promise<GooglePlaceAutocomplete> => {
  const url = `${GOOGLE_QUERY.url_google}input=${q}&language=${GOOGLE_QUERY.language}&components=${GOOGLE_QUERY.components}&types=${GOOGLE_QUERY.types}&key=${process.env.GOOGLE_API_KEY}`;
  const response = await fetch(url.replace(/ /g, "%20"), {
    method: "GET",
  });

  return await response.json();
};
