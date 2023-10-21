type ValueOffSet = {
	value: string;
};

export type GPlaceAutocompleteResponse = {
	predictions: [
		{
			place_id: string;
			terms: ValueOffSet[];
		}
	];
};

export type GPlaceDetailsResponse = {
	result: {
		formatted_address: string;
		name: string;
	};
	status: string;
};
