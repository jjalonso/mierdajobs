import { GooglePlaceAutocomplete, GooglePlaceDetails } from "./types";
import { fetchGooglePlaceAPI } from "./utils";

const GOOGLE_QUERY_AUTO = {
	url_google: "https://maps.googleapis.com/maps/api/place/autocomplete/json?",
	language: "es",
	components: "country:es",
	types: "establishment"
};

const GOOGLE_QUERY_DETAILS = {
	url_google: "https://maps.googleapis.com/maps/api/place/details/json?",
	fields: "name,formatted_address"
};

export const getGooglePlaceBusinesses = async (
	q: string
): Promise<GooglePlaceAutocomplete> => {
	const url = `${GOOGLE_QUERY_AUTO.url_google}input=${q}&language=${GOOGLE_QUERY_AUTO.language}&components=${GOOGLE_QUERY_AUTO.components}&types=${GOOGLE_QUERY_AUTO.types}&key=${process.env.GOOGLE_API_KEY}`;
	return await fetchGooglePlaceAPI(url);
};

export const getGooglePlaceDetailsBusiness = async (
	gplace_id: string
): Promise<GooglePlaceDetails> => {
	const url = `${GOOGLE_QUERY_DETAILS.url_google}&fields=${GOOGLE_QUERY_DETAILS.fields}&place_id=${gplace_id}&key=${process.env.GOOGLE_API_KEY}`;
	return await fetchGooglePlaceAPI(url);
};
