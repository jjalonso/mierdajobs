import querystring from "querystring";

import { GPlaceAutocompleteResponse, GPlaceDetailsResponse } from "./types";

export const fetchGPlaceBusinesses = async (q: string)
	: Promise<GPlaceAutocompleteResponse> => {
	const baseUrl = "https://maps.googleapis.com/maps/api/place/autocomplete/json?";
	const queryParams = querystring.stringify({
		language: "es",
		components: "country:es",
		types: "establishment",
		input: q,
		key: process.env.GOOGLE_API_KEY
	});

	const response = await fetch(baseUrl + queryParams);
	return await response.json();
}

export const fetchGPlaceDetails = async (
	place_id: string
): Promise<GPlaceDetailsResponse> => {
	const baseUrl = "https://maps.googleapis.com/maps/api/place/details/json?";
	const queryParams = querystring.stringify({
		fields: "name,formatted_address",
		place_id: place_id,
		key: process.env.GOOGLE_API_KEY
	});
	const response = await fetch(baseUrl + queryParams);
	return await response.json();
};
