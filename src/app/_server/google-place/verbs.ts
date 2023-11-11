import querystring from "querystring";

import { GPlaceAutocompleteResponse, GPlaceDetailsResponse } from "./types";
import { easyFetch } from "./utils";

export const fetchGPlaceBusinesses = (q: string)
	: Promise<GPlaceAutocompleteResponse> => {
	const baseUrl = "https://maps.googleapis.com/maps/api/place/autocomplete/json?";
	const queryParams = querystring.stringify({
		language: "es",
		components: "country:es",
		types: "establishment",
		input: q,
		key: process.env.GOOGLE_API_KEY
	});

	return easyFetch(baseUrl + queryParams);
}

export const fetchGPlaceDetails = async (
	gplace_id: string
): Promise<GPlaceDetailsResponse> => {
	const baseUrl = "https://maps.googleapis.com/maps/api/place/details/json?";
	const queryParams = querystring.stringify({
		fields: "name,formatted_address",
		place_id: gplace_id,
		key: process.env.GOOGLE_API_KEY
	});
	console.log(baseUrl + queryParams)
	return easyFetch(baseUrl + queryParams);
};
