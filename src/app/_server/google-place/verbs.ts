import { GooglePlaceAutocomplete } from "./types";

const objectQuery = {
  url_google: "https://maps.googleapis.com/maps/api/place/autocomplete/json?",
  language: "es",
  components: "country:es",
  types: "establishment",
};

export const getGooglePlaceBussiness = async (
  q: string
): Promise<GooglePlaceAutocomplete> => {
  const url = `${objectQuery.url_google}input=${q}&language=${objectQuery.language}&components=${objectQuery.components}&types=${objectQuery.types}&key=${process.env.GOOGLE_API_KEY}`;
  const response = await fetch(url.replace(/ /g, "%20"), {
    method: "GET",
  });
  return await response.json();
};
