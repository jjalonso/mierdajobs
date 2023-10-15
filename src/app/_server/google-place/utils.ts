export const fetchGooglePlaceAPI = async (url: string) => {
	const response = await fetch(url.replace(/ /g, "%20"), {
		method: "GET"
	});

	return await response.json();
};
